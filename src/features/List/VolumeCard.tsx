//import React from 'react'
import { Card, CardContent, Typography, CardMedia, makeStyles, createStyles, Theme } from '@material-ui/core';
import { Volume as VolumeProps } from '../../api/Queries';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      minWidth: 345,
      minHeight: 500,
      paddingTop: '1em',
      marginTop: '2em'
    },
    media: {
      width: 'auto',
      margin: '0 auto'
    },
    subtitle: {
      color: '#a1a1a1'
    }
  }),
);


const VolumeCard: React.FC<{ data: VolumeProps }> = ({ data }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} height={200} component="img" alt="cover" image={data.thumbnail} title={data.title} />
      <CardContent>

        <Typography variant="h5" color="primary" component="h2">
          {data.title}
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle2" color="textSecondary" gutterBottom component='p'>
          {data.subtitle}
        </Typography>
        <Typography color="textSecondary" component="span">
          <p >
            {data.authors && data.authors.join(", ")}
          </p>
        </Typography>
        <Typography variant="body2" component="p">
          {(data.description && data.description.length > 120)
            ? data.description.slice(0, 120) + "(...)"
            : data.description}
        </Typography>
        <Typography color="textSecondary" component="span" align="center">
          {data.publishedDate}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default VolumeCard
