import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
  
        
    },
});

export default function NewsDynamicContent(props) {
    const classes = useStyles();
   
  

    return (
        <div className={classes.root}>


            <Typography variant="body1" gutterBottom align="left">
                {props.data.newsContent}
            </Typography>
           
        </div>
    );
}
