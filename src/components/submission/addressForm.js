import React, { Component } from "react";
import {
    Grid,
    TextField,
    Button
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "80%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));



export default function AddressForm() {

    const classes = useStyles();

    const [author, setAuthorChange] = React.useState('');
    const [newsLanguage, setNewsLanguageChange] = React.useState('');
    const [newsType, setNewsTypeChange] = React.useState('');
    const [newsCategory, setNewsCategoryChange] = React.useState('');
    const [newsHeadline, setNewsHeadlineChange] = React.useState('');
    const [newsContent, setNewsContentChange] = React.useState('');
    const [newsDescription, setNewsDescriptionChange] = React.useState('');

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
    const handleSubmit = (event) => {
        console.log("hello")
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
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
                    <MenuItem value={10}>English</MenuItem>
                    <MenuItem value={20}>Hindi</MenuItem>

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
                    <MenuItem value={10}>News</MenuItem>
                    <MenuItem value={20}>Satire</MenuItem>
                    <MenuItem value={30}>Sponsored</MenuItem>
                    <MenuItem value={30}>Press Release</MenuItem>

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
                    <MenuItem value={10}>Politics</MenuItem>
                    <MenuItem value={20}>National</MenuItem>
                    <MenuItem value={30}>Entertainment</MenuItem>
                    <MenuItem value={30}>Chhattisgarh</MenuItem>
                    <MenuItem value={30}>Sports</MenuItem>
                    <MenuItem value={30}>Economics</MenuItem>
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
                    inputProps={{ maxLength: 500}}
                    

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
                    helperText="Comma separated keywords"


                />
            </FormControl>
            <br />
            <br />
            <Button variant="contained" color="primary" component="span" onClick={handleSubmit}>
                Submit News
                    </Button>
</form>
        </div>
    )


}