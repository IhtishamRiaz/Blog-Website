import React, { useState, useRef, useContext } from 'react';
import { Alert, Button, Slide, Snackbar, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { blogs } from '../context/BlogsProvider'

const AddPost = () => {
    const { currentUser } = useContext(blogs);
    const [imgUrl, setImgUrl] = useState('');
    const [postCategory, setPostCategory] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [selectedImg, setSelectedImg] = useState('');
    const postDescription = useRef(null);
    const [snackOpen, setSnackOpen] = useState(false);
    const navigate = useNavigate();

    function TransitionRight(props) {
        return <Slide {...props} direction="right" />;
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackOpen(false);
    };

    const handleImgChange = (e) => {
        const img = e.target.files[0];
        setImgUrl(URL.createObjectURL(img));
        console.log(img);
        setSelectedImg(img);
    }

    const handleSelectChange = (e) => {
        setPostCategory(e.target.value);
    }

    const handleTitleChange = (e) => {
        setPostTitle(e.target.value);
    }
    const handleSumbit = (e) => {
        e.preventDefault();
        const authorName = `${currentUser.firstName} ${currentUser.lastName}`
        const formData = new FormData();
        formData.append("postImage", selectedImg);
        formData.append("title", postTitle);
        formData.append("postContent", postDescription.current.getContent());
        formData.append("category", postCategory);
        formData.append("postAuthorId", currentUser._id);
        formData.append("postAuthor", authorName);
        formData.append("postAuthorImg", currentUser.profileImage);
        const config = {
            headers: {
                authorization: localStorage.getItem('accessToken')
            }
        };
        const url = process.env.REACT_APP_API_URL;
        axios.post(`${url}/createPost`, formData, config)
            .then((result) => {
                console.log(result);
                setSnackOpen(true);
                setTimeout(() => {
                    navigate('/');
                    window.location.reload();
                }, 2000);
            })
    }

    let uniqueCategories = ['travel', 'cricket', 'development', 'artificial intelligence'];

    return (
        <>
            <div className='add-post-page page'>
                <div className="header">
                    <div className="my-container">
                        <h1>Add New Post</h1>
                    </div>
                </div>
                <div className="my-container">
                    <div className="add-post-form">
                        <form onSubmit={handleSumbit}>

                            <div className="img-upload-btn">
                                <Button variant="contained" component="label">
                                    Upload Image
                                    <input hidden accept="image/*" type="file" onChange={handleImgChange} />
                                </Button>
                                <img src={imgUrl} alt="" />
                            </div>

                            <div className="input-fields-container">
                                <TextField
                                    value={postTitle}
                                    onChange={handleTitleChange}
                                    type='text'
                                    label="Post Title"
                                    variant="outlined"
                                    fullWidth
                                />
                                <FormControl fullWidth>
                                    <InputLabel>Post Category</InputLabel>
                                    <Select
                                        value={postCategory}
                                        label="Post Category"
                                        onChange={handleSelectChange}
                                    >
                                        {
                                            uniqueCategories.map(item => {
                                                return <MenuItem value={item} key={Math.ceil(Math.random() * 10000)}>{item}</MenuItem>
                                            })
                                        }
                                    </Select>
                                </FormControl>

                                <Editor
                                    onInit={(e, editor) => postDescription.current = editor}
                                    apiKey='suz1cmoumweogwp9i038ne46kqkefdqa8u45ks0jifdl3reu'
                                    initialValue=""
                                    init={{
                                        width: '100%',
                                        menubar: true,
                                        plugins: [
                                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                        ],
                                        toolbar: 'undo redo | blocks | ' +
                                            'bold italic forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                            'removeformat | help',
                                        content_style: 'body {font - family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                />
                                <Button
                                    type='submit'
                                    variant='contained'
                                    size='large'
                                >
                                    Add Post
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Snackbar open={snackOpen} autoHideDuration={4000} onClose={handleClose} TransitionComponent={TransitionRight}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Post Added
                </Alert>
            </Snackbar>
        </>
    )
}

export default AddPost