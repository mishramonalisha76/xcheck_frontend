import React, { useState, useEffect } from "react";
import {

    TextField,
    Button
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Loader from "../loader/loader"
import { useHistory } from "react-router-dom";
import { port } from "../../config/config";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "80%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));



export default function AddressForm(props) {

    const classes = useStyles();
    let history = useHistory();
    // const { newsChannelName } = props;

    const [newsChannelData, setNewsChannelData] = useState(props);

    const [author, setAuthorChange] = React.useState('');
    const [newsLanguage, setNewsLanguageChange] = React.useState('');
    const [newsType, setNewsTypeChange] = React.useState('');
    const [newsCategory, setNewsCategoryChange] = React.useState('');
    const [newsHeadline, setNewsHeadlineChange] = React.useState('');
    const [newsContent, setNewsContentChange] = React.useState('');
    const [newsDescription, setNewsDescriptionChange] = React.useState('');
    const [newsKeywords, setNewsKeywordsChange] = React.useState('');
    const [loader, setLoader] = React.useState(false);


    //     useEffect(() => {

    //             console.log("hey")
    //             axios.post(`${port}/org/authors`, {
    //                 newsChannelName: newsChannelName
    //             })
    //                 .then((response) => {
    //                     setNewsChannelData(response.data)
    //                 })
    //                 .catch((error) => {
    //                     console.log(error);
    //                 });



    //     }, []);
    // console.log(newsChannelData)

    const handleAuthorChange = (event) => {
        setAuthorChange(event.target.value);
    };
    const handleNewsLanguageChange = (event) => {
        setNewsLanguageChange(event.target.value);
    };
    const handleNewsTypeChange = (event) => {
        setNewsTypeChange(event.target.value);
    };
    const handleNewsCategoryChange = (event) => {
        setNewsCategoryChange(event.target.value);
    };
    const handleNewsHeadlineChange = (event) => {
        setNewsHeadlineChange(event.target.value);
    };
    const handleNewsContentChange = (event) => {
        setNewsContentChange(event.target.value);
    };

    const handleNewsDescriptionChange = (event) => {
        setNewsDescriptionChange(event.target.value);
    };
    const handleNewsKeywordsChange = (event) => {
        setNewsKeywordsChange(event.target.value);
    };
    const handleSubmit = (event) => {
        setLoader(true);
        console.log("loader chnaged");
        //loader to true
        //call to contract
        //call to api
        //loader to false
        //dynamic link next page

        const post = {

            author: author,
            newsLanguage: newsLanguage,
            newsType: newsType,
            newsCategory: newsCategory,
            newsHeadline: newsHeadline,
            newsContent: newsContent,
            newsDescription: newsDescription,
            newsKeywords: newsKeywords.split(',')
        }





        axios.post(`${port}/post/savepost`, {
            organisationName: author, post: post
        })
            .then((response) => {
                console.log(response.data)
                setLoader(false);
                history.push({
                    pathname: '/news/transaction',
                  
                    state: { transactionID: response.data }
                  })
            })
            .catch((error) => {
                console.log(error);
            });







    };




    return (

        <div >

            <form className={classes.root} noValidate autoComplete="off">
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Author</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={author}
                        onChange={handleAuthorChange}
                        label="Author"
                    >

                        {(props.newsChannelData && props.newsChannelData.authors && props.newsChannelData.authors.length > 0) && props.newsChannelData.authors.map((res, index) => {
                            return (

                                <MenuItem key={index} value={res}>{res}</MenuItem>

                            )
                        })}






                    </Select>
                </FormControl>


                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">News Language</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="News Language"

                        value={newsLanguage}
                        onChange={handleNewsLanguageChange}
                    >
                        <MenuItem value={"English"}>English</MenuItem>
                        <MenuItem value={"Hindi"}>Hindi</MenuItem>

                    </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">News Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="News Type"
                        value={newsType}
                        onChange={handleNewsTypeChange}
                    >
                        <MenuItem value={"News"}>News</MenuItem>
                        <MenuItem value={"Satire"}>Satire</MenuItem>
                        <MenuItem value={"Sponsored"}>Sponsored</MenuItem>
                        <MenuItem value={"Press Release"}>Press Release</MenuItem>

                    </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">News Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"

                        label="News Category"
                        value={newsCategory}
                        onChange={handleNewsCategoryChange}
                    >
                        <MenuItem value={"Politics"}>Politics</MenuItem>
                        <MenuItem value={"National"}>National</MenuItem>
                        <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
                        <MenuItem value={"Chhattisgarh"}>Chhattisgarh</MenuItem>
                        <MenuItem value={"Sports"}>Sports</MenuItem>
                        <MenuItem value={"Economics"}>Economics</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <TextField
                        label="News Headline"
                        variant="outlined"
                        value={newsHeadline}
                        onChange={handleNewsHeadlineChange}
                        type="text"
                        type="text"
                        multiline
                        required
                        rows={3}
                        inputProps={{ maxLength: 200 }}

                    />
                </FormControl>

                <FormControl className={classes.formControl}>
                    <TextField
                        label="News Content"
                        variant="outlined"
                        value={newsContent}
                        onChange={handleNewsContentChange}
                        type="text"
                        multiline
                        required
                        rows={5}
                        inputProps={{ maxLength: 500 }}


                    />
                </FormControl>

                <FormControl className={classes.formControl}>
                    <TextField
                        label="News Description"
                        variant="outlined"
                        value={newsDescription}
                        onChange={handleNewsDescriptionChange}
                        type="text"
                        multiline
                        rows={2}
                        inputProps={{ maxLength: 300 }}

                    />
                </FormControl>

                <FormControl className={classes.formControl}>

                    <TextField
                        label="Keywords"
                        variant="outlined"
                        value={newsKeywords}
                        onChange={handleNewsKeywordsChange}
                        helperText="Comma separated keywords"


                    />
                </FormControl>
                <br />
                <br />
                <Button variant="contained" color="primary" component="span" onClick={handleSubmit}>
                    Submit News
                    </Button>
            </form>
            {loader &&
                <Loader
                />}
        </div>
    )


}