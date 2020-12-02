import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function NewsTitle(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Typography variant="h5" gutterBottom>
       {props.data.newsTitle}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {props.data.author}
      </Typography>
      <Typography variant="h6" gutterBottom>
       {props.data.newsCategory},{props.data.newsLanguage}
      </Typography>
      <br/>
      <br/>
      <Typography variant="h6" gutterBottom>
       Blockchain Details
      </Typography>
      <Typography variant="h6" gutterBottom>
       News Fingerprint:
      </Typography>
      <Typography variant="h6" gutterBottom>
       {"Network Ropsten:"}
      </Typography>
      <Typography variant="h6" gutterBottom>
      { "Transaction ID:"+ props.data.transactionID}
      </Typography>
      <Typography variant="h6" gutterBottom>
       Block Details:
      </Typography>
      <br/>
      <br/>
     
    </div>
  );
}
