import React, { useContext, useState, useRef, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import { blogs } from '../context/BlogsProvider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios'

const AddPost = () => {
    const { blogsList, setBlogsList } = useContext(blogs);
    const [imgUrl, setImgUrl] = useState('');
    const [postCategory, setPostCategory] = useState('');
    const [postTitle, setPostTitle] = useState('')
    const [selectedImg, setSelectedImg] = useState('')
    const postDescription = useRef(null);

    const handleImgChange = (e) => {
        const img = e.target.files[0];
        setImgUrl(URL.createObjectURL(img));
        console.log(img);
        setSelectedImg(img);
    }

    let idToUse = blogsList[blogsList.length - 1].id + 1;

    const handleSelectChange = (e) => {
        setPostCategory(e.target.value);
    }

    const handleTitleChange = (e) => {
        setPostTitle(e.target.value);
    }
    const handleSumbit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("postImage", selectedImg);
        formData.append("title", postTitle);
        formData.append("postContent", postDescription.current.getContent());
        formData.append("category", postCategory);
        axios.post("http://localhost:8080/createPost", formData)
            .then((result) => {
                console.log(result);
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
        </>
    )
}

export default AddPost