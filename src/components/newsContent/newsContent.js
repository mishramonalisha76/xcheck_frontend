import React, { Component, useEffect } from "react";
import {
    Grid,
    TextField,
    Button, Card, CardContent
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import NewsDynamicContent from "./newsDynamicContent"
import Logo from "../submission/logo"
import NewsTitle from "./newsTitle"
import { useHistory } from "react-router-dom";
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
const data = {
    newsTitle: "Demonitisation",
    author: "Monalisha Mishra",
    newsCategory: "Politics",
    newsLanguage: "English",
    newsContent: "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."



}

export default function NewsContent(props) {
    const classes = useStyles();

    let history = useHistory();

    function handleClick() {
        history.push("/submission");
    }

    const [data, setData] = React.useState({});

    useEffect( () => {
        console.log(props.match.params.transactionId)
        const requestOptions = {

            id: props.match.params.transactionId
        }
        // axios.post(`${port}/post/getpostbyid`, { requestOptions })
        //   .then(res => (console.log(res))



         axios.post(`${port}/post/getpostbyid`, {
            id: props.match.params.transactionId
        })
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
        //   ),


    }, []);



    return (
        // <Grid container justify="center">
        //     <Grid item container xs={8}>
        <Card raised={true} className={classes.cardStyle} >
            <CardContent>
                <Grid container className={classes.root} justify="center" direction="row-reverse">
                    <Grid item xs={12} md={3} className={classes.gridItemStyle}>
                        <Logo />
                    </Grid>

                    <Grid item xs={12} md={9} >
                        <NewsTitle
                            data={data} />
                    </Grid>
                    <Grid item xs={12} md={12} >
                        <NewsDynamicContent
                            data={data} />
                    </Grid>
                    <Grid item xs={12} md={12} className={classes.gridItemStyle} >
                        <Button variant="contained" color="primary" component="span" onClick={handleClick}>
                            New Article
                    </Button>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
        //     </Grid>
        // </Grid>
    )
}