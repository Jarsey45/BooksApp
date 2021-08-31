import axios from 'axios';

const API_BASE = "https://www.googleapis.com/books/v1/volumes?q=";
const API_KEY = "AIzaSyA91RzlBdFO2QhlcFZa0A0RKVPy3lhUo6Y";
const BOOK_SUBJECT = "fiction"

export interface Volume {
  title: string;
  subtitle: string;
  authors: Array<string>;
  publishedDate: string;
  description: string;
  thumbnail: string;
  id: string;
}

export interface VolumeDetails extends Volume {
  acsTokenLink?: string;
  pubDomain: boolean;
}

interface ResponseVolumes {
  status: boolean;
  data?: Array<Volume>;
}

/**
 * Queries google books api with given text and returns response.
 * @param query 
 * @param index from what index will query start
 * @returns Promise with status and data
 */
export const GET_VOLUMES_BY_SEARCH = async (query: string, index: string) => {
  try {
    const response = await axios.get(`${API_BASE}${query}+subject:${BOOK_SUBJECT}&startIndex=${index}&maxResults=20&key=${API_KEY}`);

    if (!response.data.items)
      return {
        status: false,
        data: []
      }

    const data: Volume[] = response.data.totalItems > 0
      ? response.data.items.map((book: any) => {
        const { volumeInfo } = book;
        return {
          title: volumeInfo.title,
          subtitle: volumeInfo.subtitle,
          authors: volumeInfo.authors,
          publishedDate: volumeInfo.publishedDate,
          description: volumeInfo.description,
          thumbnail: volumeInfo.imageLinks.smallThumbnail,
          id: book.id
        }
      })
      : [];

    // console.table(data)
    const Volumes: ResponseVolumes = {
      status: true,
      data
    }

    return Volumes;
  } catch (error) {
    console.error(error);
    return { status: false };
  }
}