import React from "react";
import {
    Grid, Card, CardContent
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import AddressForm from "./addressForm"
import Logo from "./logo"



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

export default function Submission(props) {
    const classes = useStyles();





    return (
        // <Grid container justify="center">
        //     <Grid item container xs={8}>
        <Card raised={true} className={classes.cardStyle} >
            <CardContent>
                <Grid container className={classes.root} justify="center" direction="row-reverse">
                    <Grid item xs={12} md={3} className={classes.gridItemStyle}>
                        <Logo />
                    </Grid>

                    <Grid item xs={12} md={9} className={classes.gridItemStyle}>
                        <AddressForm
                            newsChannelName={props.match.params.newsChannelName} />
                    </Grid>

                </Grid>

            </CardContent>
        </Card>
        //     </Grid>
        // </Grid>
    )
}