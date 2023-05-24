import { Alert, Avatar, Button, IconButton, Rating, Slide, Snackbar, TextField, Tooltip } from '@mui/material';
import React, { useEffect, useState, useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { red } from '@mui/material/colors';
import { blogs } from '../context/BlogsProvider';
import { addComment, deleteComment, getAllComments, updateComment } from '../utils/HandleAPIs';

const Comments = ({ postId }) => {

    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    let date = new Date();
    let day = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth();

    let monthName = monthList[month];
    let formatedTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    let properDate = monthName + " " + day + ", " + year + " at " + formatedTime;

    const { currentUser, allComments, setAllComments } = useContext(blogs);
    const [commentsArray, setCommentsArray] = useState(allComments);
    const [snackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState('');
    const [severity, setSeverity] = useState('');
    const [idToEdit, setIdToEdit] = useState();
    const [isEdit, setIsEdit] = useState(false);
    const [ratingValue, setRatingValue] = useState(0);
    const [commentInput, setCommentInput] = useState({
        commentText: '',
        commentTime: '',
        ratings: 0,
    });

    const snackOpener = (message, sev) => {
        setSeverity(sev);
        setSnackMessage(message);
        setSnackOpen(true);
    }

    const filteredComments = allComments?.filter((comment) => {
        return comment.postId === postId;
    })

    useEffect(() => {
        setCommentInput((prevState) => ({
            ...prevState,
            ratings: ratingValue,
        }));
    }, [ratingValue])


    const handleChange = (e) => {
        setCommentInput((prevState) => ({
            ...prevState,
            commentTime: properDate,
            [e.target.name]: e.target.value,
        }));
    }

    // Handle Submit
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (commentInput.commentText) {

            if (!isEdit) {
                const commentAuthorName = `${currentUser?.firstName} ${currentUser?.lastName}`
                const commentData = {
                    commentContent: commentInput.commentText,
                    created: commentInput.commentTime,
                    updated: "",
                    commentAuthor: commentAuthorName,
                    commentAuthorId: currentUser?._id,
                    commentAuthorImg: currentUser?.profileImage,
                    postId: postId,
                    ratings: commentInput.ratings
                }
                addComment(commentData)
                    .then((result) => {
                        setCommentInput({
                            commentText: '',
                            commentTime: '',
                            ratings: 0,
                        });
                        setRatingValue(0);
                        getAllComments(setAllComments);
                        setTimeout(() => {
                            if (JSON.stringify(currentUser) === '{}') {
                                snackOpener('You need to Login!', 'error');
                            } else {
                                snackOpener('Comment Added!', 'success');
                            }
                        }, 200);
                    })
            }
        }
    }
    // Handle Delete
    const delComment = async (id) => {
        await deleteComment(id);
        getAllComments(setAllComments);
        setTimeout(() => {
            snackOpener('Comment Deleted!', 'success');
        }, 200);
    }

    const editComment = (id) => {
        const commentToBeEdited = filteredComments?.find((comment) => {
            return comment._id === id;
        })
        setCommentInput({
            commentText: commentToBeEdited.commentContent,
            commentTime: commentToBeEdited.created,
            ratings: commentToBeEdited.ratings,
        })
        setIdToEdit(id);
        setIsEdit(true);
        setRatingValue(commentToBeEdited.ratings);
        window.scrollTo(0, 1000);
    }

    // Submit Edited Comment
    const submitEditedComment = () => {
        const commentData = {
            commentContent: commentInput.commentText,
            updated: commentInput.commentTime,
            ratings: commentInput.ratings,
        }
        updateComment(commentData, idToEdit)
            .then((result) => {
                setCommentInput({
                    commentText: '',
                    commentTime: '',
                    ratings: 0,
                });
                setRatingValue(0);
                getAllComments(setAllComments);
                setTimeout(() => {
                    snackOpener('Comment Updated!', 'success');
                }, 200);
            });

        setCommentInput({
            commentText: '',
            commentTime: '',
            ratings: 0,
        });
        setIsEdit(false);
        setRatingValue(0);
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
    return (
        <>
            <div className="my-container">
                <div className="comments-form">
                    <div className="title-text">
                        <h1>Leave a Comment</h1>
                    </div>
                    <form onSubmit={handleCommentSubmit}>
                        <TextField
                            name='commentText'
                            label="Comment"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={8}
                            className='comment-form-fields'
                            value={commentInput.commentText}
                            onChange={handleChange}
                        />
                        <div className='comment-form-fields'>
                            <Rating
                                precision={0.5}
                                value={ratingValue}
                                onChange={(e, value) => setRatingValue(value)}
                            />
                        </div>
                        {
                            isEdit ?
                                <Button
                                    variant="contained"
                                    size='large'
                                    className='comment-form-fields'
                                    endIcon={<EditIcon fontSize="small" />}
                                    onClick={submitEditedComment}
                                >
                                    Edit
                                </Button> :
                                <Button
                                    variant="contained"
                                    type='submit'
                                    size='large'
                                    className='comment-form-fields'
                                >
                                    Comment
                                </Button>
                        }
                    </form>
                </div>
                {/* Comments Container */}
                <div className="comments-container">
                    {
                        filteredComments?.map((elem) => {
                            const { commentAuthor, commentAuthorImg, commentContent, created, ratings, commentAuthorId, _id: id } = elem;
                            return (
                                <div className="comment-row" key={id}>
                                    <div className="comment-header">
                                        <div className="comment-author">
                                            <Avatar
                                                alt={commentAuthor}
                                                src={`http://localhost:8080/public/images/${commentAuthorImg}`}
                                                sx={{ width: 40, height: 40 }}
                                            />
                                            <h3>{commentAuthor}</h3>
                                        </div>
                                        <p>{created}</p>
                                    </div>
                                    <div className="comment-content">
                                        <p>{commentContent}</p>
                                        <div className="comment-btns-container">
                                            {
                                                (currentUser._id === commentAuthorId) ?
                                                    <>
                                                        <Tooltip title='Edit'>
                                                            <IconButton color="primary" onClick={() => editComment(id)}>
                                                                <EditIcon />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Tooltip title='Delete'>
                                                            <IconButton color="primary" sx={{ color: red[500] }} onClick={() => delComment(id)}>
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </> : <></>
                                            }
                                        </div>
                                    </div>
                                    <div className="comment-ratings">
                                        <Rating name="read-only" value={ratings} readOnly precision={0.5} />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div >
            <Snackbar open={snackOpen}
                autoHideDuration={2000}
                onClose={handleClose}
                TransitionComponent={TransitionRight}
            >
                <Alert onClose={handleClose} severity={`${severity}`} sx={{ width: '100%' }}>
                    {snackMessage}
                </Alert>
            </Snackbar>
        </>
    )
}

export default Comments;