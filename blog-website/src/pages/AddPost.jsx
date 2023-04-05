import React, { useContext, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { blogs } from '../context/BlogsProvider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const AddPost = () => {
    const { blogsList, setBlogsList } = useContext(blogs);
    const [imgUrl, setImgUrl] = useState('');
    const [postCategory, setPostCategory] = useState('');

    const [postData, setPostData] = useState({
        postTitle: '',
        postDescription: '',
        postCategory: '',
    });

    const handleImgChange = (e) => {
        const img = e.target.files[0];
        setImgUrl(URL.createObjectURL(img));
    }
    console.log(imgUrl);

    let idToUse = blogsList[blogsList.length - 1].id + 1;

    const handleSelectChange = (e) => {
        setPostCategory(e.target.value);
    }

    const handleChange = (e) => {
        setPostData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        setBlogsList((prevState) => ([
            ...prevState,
            {
                ['id']: idToUse,
                ['title']: postData.postTitle,
                ['category']: postCategory,
                ['image']: imgUrl,
                ['description']: postData.postDescription
            }
        ]))
        setPostData({
            postTitle: '',
            postDescription: '',
            postCategory: ''
        })
        setImgUrl('');
    }
    let allCategories = blogsList?.map(post => {
        return post.category;
    });
    let uniqueCategories = [...new Set(allCategories)];

    return (
        <>
            <div className='add-post-page page'>
                <div className="my-container">
                    <div className="title-text">
                        <h1>Add New Post</h1>
                    </div>
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
                                    value={postData.postTitle}
                                    onChange={handleChange}
                                    name='postTitle'
                                    type='text'
                                    label="Post Title"
                                    variant="outlined"
                                    fullWidth
                                />
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Post Category</InputLabel>
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

                                <TextField
                                    value={postData.postDescription}
                                    onChange={handleChange}
                                    name='postDescription'
                                    type='text'
                                    label="Post Description"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={8}
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