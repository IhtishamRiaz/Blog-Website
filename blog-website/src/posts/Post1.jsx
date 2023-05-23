import React, { useContext, useEffect, useState } from 'react';
import Comments from '../components/Comments'
import { blogs } from '../context/BlogsProvider';
import { useParams } from 'react-router-dom';
import { Avatar, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { red } from '@mui/material/colors';

const Post1 = () => {

    const { blogsList, currentUser } = useContext(blogs);
    let { postid } = useParams();
    const [currentBlog, setCurrentBlog] = useState();

    useEffect(() => {
        let tempBlog = blogsList?.find(item => item._id === postid);
        if (tempBlog) {
            setCurrentBlog(tempBlog);
        }

        window.scrollTo(0, 0);
    }, [blogsList]);

    const url = "http://localhost:8080/public/images/"
    return (
        <div className='post-page page'>
            <div className="my-container">

                <div className="title-text">
                    <h1>{currentBlog?.title}</h1>
                </div>

                <div className='post-img'>
                    <img src={`${url}${currentBlog?.postImage}`} alt="" />
                </div>
                <div className="post-author-info">
                    <div className="post-author">
                        <Avatar
                            alt={currentBlog?.postAuthor}
                            src={`${url}${currentBlog?.postAuthorImg}`}
                            sx={{ width: 40, height: 40 }}
                        />
                        <h3>{currentBlog?.postAuthor}</h3>
                    </div>
                    <div className="post-icons">
                        {
                            (currentUser?._id === currentBlog?.postAuthorId) ?
                                <>
                                    <Tooltip title='Edit'>
                                        <IconButton color="primary">
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title='Delete'>
                                        <IconButton color="primary" sx={{ color: red[500] }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </> : <></>
                        }
                    </div>
                </div>
                <div className="post-content">
                    <p dangerouslySetInnerHTML={{ __html: currentBlog?.postContent }} />
                </div>
            </div>
            <Comments postId={currentBlog?._id} />
        </div>
    )
}

export default Post1