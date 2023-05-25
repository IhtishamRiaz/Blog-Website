import React, { useContext, useEffect, useState } from 'react';
import Comments from '../components/Comments'
import { blogs } from '../context/BlogsProvider';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Alert, Avatar, IconButton, Slide, Snackbar, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { red } from '@mui/material/colors';
import { deletePost, getAllPosts } from '../utils/HandleAPIs';

const Post1 = () => {

    const navigate = useNavigate();
    const { blogsList, currentUser } = useContext(blogs);
    let { postid } = useParams();
    const [currentBlog, setCurrentBlog] = useState();
    const [snackOpen, setSnackOpen] = useState(false);

    useEffect(() => {
        let tempBlog = blogsList?.find(item => item._id === postid);
        if (tempBlog) {
            setCurrentBlog(tempBlog);
        }

        window.scrollTo(0, 0);
    }, [blogsList]);

    const delPost = async () => {
        await deletePost(currentBlog?._id)
        getAllPosts();
        setSnackOpen(true);
        setTimeout(() => {
            navigate('/');
            window.location.reload();
        }, 1500);

    }

    function TransitionRight(props) {
        return <Slide {...props} direction="right" />;
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackOpen(false);
    };

    const url = process.env.REACT_APP_IMAGES_URL
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
                                        <Link to={`/user/editPost/${currentBlog?._id}`}>
                                            <IconButton color="primary">
                                                <EditIcon />
                                            </IconButton>
                                        </Link>
                                    </Tooltip>
                                    <Tooltip title='Delete'>
                                        <IconButton color="primary" sx={{ color: red[500] }} onClick={delPost}>
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
            <Snackbar open={snackOpen}
                autoHideDuration={4000}
                onClose={handleClose}
                TransitionComponent={TransitionRight}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Post Deleted Successfully!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Post1