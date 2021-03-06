import React,{useEffect,useState} from "react";
import {
    Grid, Card, CardContent
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import AddressForm from "./addressForm"
import Logo from "./logo"
import { port } from "../../config/config";
import axios from 'axios';


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
    

    const [newsChannelData, setNewsChannelData] = useState({});
    useEffect(() => {
        
        console.log("hey")
        axios.post(`${port}/org/authors`, {
            newsChannelName: props.match.params.newsChannelName
        })
            .then((response) => {
                setNewsChannelData(response.data)
            })
            .catch((error) => {
                console.log(error);
            });

   

}, []);
console.log(newsChannelData)



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
                            newsChannelData={newsChannelData} />
                    </Grid>

                </Grid>

            </CardContent>
        </Card>
        //     </Grid>
        // </Grid>
    )
}