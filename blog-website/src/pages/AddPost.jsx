import React, { useContext, useState, useRef } from 'react';
import { Button, TextField } from '@mui/material';
import { blogs } from '../context/BlogsProvider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Editor } from '@tinymce/tinymce-react';

const AddPost = () => {
    const { blogsList, setBlogsList } = useContext(blogs);
    const [imgUrl, setImgUrl] = useState('');
    const [postCategory, setPostCategory] = useState('');
    const [postTitle, setPostTitle] = useState('')
    const postDescription = useRef(null);

    const handleImgChange = (e) => {
        const img = e.target.files[0];
        setImgUrl(URL.createObjectURL(img));
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
        setBlogsList((prevState) => ([
            ...prevState,
            {
                ['id']: idToUse,
                ['title']: postTitle,
                ['category']: postCategory,
                ['image']: imgUrl,
                ['description']: postDescription.current.getContent()
            }
        ]))
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
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
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