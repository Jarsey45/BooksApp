import axios from 'axios';

const API_VOLUMES_BASE = "https://www.googleapis.com/books/v1/volumes?q=";
const API_VOL_BASE = "https://www.googleapis.com/books/v1/volumes/";
const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
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
  acsTokenLink: string | null;
}

interface ResponseVolumes {
  status: boolean;
  data: Array<Volume>;
}
interface ResponseVol extends Omit<ResponseVolumes, 'data'> {
  data: VolumeDetails;
  additionalInfo?: string
}

/**
 * @desc Queries google books api with given text and returns response.
 * @param query text to query 
 * @param index from what index will query start
 * @returns Promise with {status} and volumes[]
 */
export const GET_VOLUMES_BY_SEARCH = async (query: string, index: string) => {
  try {
    const response = await axios.get(`${API_VOLUMES_BASE}${query}+subject:${BOOK_SUBJECT}&startIndex=${index}&maxResults=20&key=${API_KEY}`);

    if (!response.data.items)
      return {
        status: false,
        data: []
      } as ResponseVolumes

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
    return {
      status: true,
      data
    } as ResponseVolumes;
  } catch (error) {
    console.error(error);
    return { status: false } as ResponseVolumes;
  }
}



/**
 * Queries google books api with given text and returns response.
 * @param id id to query 
 * @returns Promise with status and volume info
 */
export const GET_VOLUME_BY_ID = async (id: string) => {
  try {
    const response = await axios.get(`${API_VOL_BASE}${id}?key=${API_KEY}`);

    const { title, subtitle, authors, publishedDate, description, imageLinks } = response.data.volumeInfo;
    const { publicDomain, epub } = response.data.accessInfo;

    const data: VolumeDetails = {
      title,
      subtitle,
      authors,
      publishedDate,
      description,
      thumbnail: imageLinks.thumbnail,
      id: response.data.id,
      acsTokenLink: (typeof epub.acsTokenLink === 'string' &&
        publicDomain === true) ?
        epub.acsTokenLink :
        null
    };

    return { status: true, data } as ResponseVol;
  } catch (error) {
    console.error("An error occurred", " => \n", error);
    return { status: false, additionalInfo: 'not found' } as ResponseVol;
  }
}