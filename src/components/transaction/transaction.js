import React,{useEffect,useState} from "react";
import {
    Grid, Card, CardContent
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    cardStyle: {
        height: "100%",
        width: "50%",
        margin: "auto",
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,


    },
    gridItemStyle: {
        textAlign: "center"
    }

}));

export default function Tran(props) {
    const classes = useStyles();
    



    return (
        // <Grid container justify="center">
        //     <Grid item container xs={8}>
        <Card raised={true} className={classes.cardStyle} >
            <CardContent>
                <Grid container className={classes.root} justify="center" direction="row-reverse">
                   {"Your transaction id is:"+props.location.state.transactionID}
                </Grid>

            </CardContent>
        </Card>
        //     </Grid>
        // </Grid>
    )
}