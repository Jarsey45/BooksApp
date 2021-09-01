import React, { useEffect, useRef, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { Redirect, useParams } from 'react-router-dom';
import { GET_VOLUME_BY_ID, VolumeDetails } from '../../api/Queries';
import { Card, CardContent, CardMedia, CircularProgress, Typography, Button, Fab, Icon } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

import './Details.scss';


const DetailsView = () => {
  const { id } = useParams<{ id: string }>();
  const [notFound, setFound] = useState<boolean>(false);
  const [volData, setVolData] = useState<false | VolumeDetails>(false);

  const fetchVolumeInfo = async () => {
    const { status, data, additionalInfo } = await GET_VOLUME_BY_ID(id);

    if (additionalInfo && additionalInfo === 'not found')
      setFound(true);
    if (!status) {
      setVolData(false);
      return;
    }
    setVolData(data);
  }

  useEffect(() => {
    if (volData === false)
      fetchVolumeInfo();
  });


  if (notFound) {

    setTimeout(() => {
      window.location.href = '/'; //! works better and faster than with react-router
    }, 2000);

    return (
      <Grid className="volCard">
        <Fab color="primary" aria-label="back" className="backArrow" href="/">
          <Icon>arrow_back</Icon>
        </Fab>
        <Alert variant="outlined" severity="error">
          <AlertTitle>Error</AlertTitle>
          Could not find this volume — <strong>we will redirect shortly!</strong>
        </Alert>
      </Grid>
    )
  }

  return (
    <Grid className="volCard">
      <Fab color="primary" aria-label="back" className="backArrow" href="/">
        <Icon>arrow_back</Icon>
      </Fab>
      {volData ?
        <Card>
          <CardMedia height={300} component="img" alt="cover" image={volData.thumbnail} title={volData.title} />
          <CardContent>

            <Typography variant="h5" color="primary" component="h2">
              {volData.title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom component='p'>
              {volData.subtitle}
            </Typography>
            <Typography color="textSecondary" component="span">
              <p >
                {volData.authors && volData.authors.join(", ")}
              </p>
            </Typography>
            <Typography variant="body2" component="p">
              {volData.description ?
                volData.description.replace(/<\/?[^>]+(>|$)/g, "") :
                null}
            </Typography>
            <Typography color="textSecondary" component="span" align="center">
              {volData.publishedDate}
            </Typography>
            {volData.acsTokenLink ?
              <Button className="link" variant="outlined" color="primary" href={volData.acsTokenLink} >
                Download
              </Button> :
              null}
          </CardContent>
        </Card>
        :
        <CircularProgress className="loading" color="secondary" />
      }
    </Grid>
  )
}

export default DetailsView
