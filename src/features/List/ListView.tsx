import React, { useEffect, useRef, useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import SearchBar from './SearchBar';

import "./List.scss";
import { GET_VOLUMES_BY_SEARCH, Volume } from '../../api/Queries';
import VolumeCard from './VolumeCard';





const ListView: React.FC = () => {
  //const classes = useStyles();
  const App = useRef<HTMLDivElement>(null);
  const index = useRef(0);

  const [loading, setLoading] = useState<boolean>(false);
  const [volumes, setVolumes] = useState<Volume[]>([]);
  const [text, setText] = useState<string>("");


  const fetchMoreVolumes = async () => {
    if (!loading) return;

    try {
      const { status, data } = await GET_VOLUMES_BY_SEARCH(text, index.current.toString())
      if (!status || !data) return;

      index.current += 10;
      setVolumes([...volumes, ...data])
      setLoading(false);
    } catch (err) { console.log(err) }
  }

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (volumes.length === 0) return;
      if (App.current === null) return;

      if (App.current.getBoundingClientRect().bottom <= window.innerHeight + 5 && !loading) {
        setLoading(true);
      }
    })
  })


  useEffect(() => {

    setVolumes([]);
    setLoading(true);
    index.current = 0;

    // GET_VOLUMES_BY_SEARCH(text, index.current.toString())
    //   .then(({ status, data }) => {
    //     index.current += 10;
    //     if (status && data) setVolumes(data)
    //   })

  }, [text])

  useEffect(() => {
    if (loading)
      fetchMoreVolumes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  //useEffect(() => { setLoading(false) }, [volumes]);



  return (
    <Grid container alignItems="center" ref={App}>
      <Grid item xs={12}>
        <SearchBar
          handleInput={setText}
          inputVal={text} />
      </Grid>
      <Grid item xs={12}>
        <div className="volumes">
          {
            volumes.map((vol, index) =>
              <VolumeCard data={vol} key={index} />
            )
          }
          {(volumes.length === 0 && !loading) && <h1>Could not find any matching books</h1>}
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className="volumes">
          {loading && <CircularProgress className="loading" color="secondary" />}
        </div>
      </Grid>
    </Grid>
  )
}


export default ListView;
