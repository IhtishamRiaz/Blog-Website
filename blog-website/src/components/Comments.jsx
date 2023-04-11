import { Button, IconButton, Rating, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/EditRounded';
import DeleteIcon from '@mui/icons-material/DeleteTwoTone';

const Comments = () => {

    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    let date = new Date();
    let day = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth();

    let monthName = monthList[month];
    let formatedTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    let properDate = monthName + " " + day + ", " + year + " at " + formatedTime;

    const [commentsArray, setCommentsArray] = useState([]);
    const [idToEdit, setIdToEdit] = useState();
    const [isEdit, setIsEdit] = useState(false);
    const [ratingValue, setRatingValue] = useState(0);

    const [commentInput, setCommentInput] = useState({
        id: '',
        name: '',
        email: '',
        commentText: '',
        commentTime: '',
        ratings: 0,
    });

    useEffect(() => {
        setCommentInput((prevState) => ({
            ...prevState,
            ratings: ratingValue,
        }));
    }, [ratingValue])


    const handleChange = (e) => {
        let idSet = Math.floor(Math.random() * 1000000)

        setCommentInput((prevState) => ({
            ...prevState,
            id: idSet,
            commentTime: properDate,
            [e.target.name]: e.target.value,
        }));
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        if (commentInput.name && commentInput.email && commentInput.commentText) {

            setCommentsArray((prevState) =>
                [
                    ...prevState,
                    commentInput
                ]
            )

            setCommentInput({
                id: '',
                name: '',
                email: '',
                commentText: '',
                commentTime: '',
                ratings: 0,
            });
            setRatingValue(0);
        }
    }

    const delComment = (id) => {
        const tempArray = [...commentsArray];
        tempArray.splice(id, 1);
        setCommentsArray(tempArray);
    }

    const editComment = (id) => {

        setCommentInput({
            id: commentsArray[id].id,
            name: commentsArray[id].name,
            email: commentsArray[id].email,
            commentText: commentsArray[id].commentText,
            commentTime: commentsArray[id].commentTime,
            ratings: commentsArray[id].ratings,
        })
        setIdToEdit(id);
        setIsEdit(true);
        setRatingValue(commentsArray[id].ratings)
    }

    const submitEditedComment = () => {
        const tempArray = [...commentsArray];
        tempArray.splice(idToEdit, 1, commentInput);
        setCommentsArray(tempArray);
        setCommentInput({
            id: '',
            name: '',
            email: '',
            commentText: '',
            commentTime: '',
            ratings: 0,
        });
        setIsEdit(false);
        setRatingValue(0);
    }
    return (
        <>
            <div className="my-container">
                <div className="comments-form">
                    <div className="title-text">
                        <h1>Leave a Comment</h1>
                    </div>
                    <form onSubmit={handleCommentSubmit}>
                        <TextField
                            name='name'
                            type='text'
                            label="Name"
                            variant="outlined"
                            fullWidth
                            className='form-fields'
                            value={commentInput.name}
                            onChange={handleChange}
                        />
                        <TextField
                            name='email'
                            type='email'
                            label="Email"
                            variant="outlined"
                            fullWidth
                            className='comment-form-fields'
                            value={commentInput.email}
                            onChange={handleChange}
                        />
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
                        commentsArray.map((elem, id) => {
                            const { name, commentText, commentTime, ratings } = elem;
                            return (
                                <div className="comment-row" key={id}>
                                    <div className="comment-header">
                                        <h3>{name}</h3>
                                        <p>{commentTime}</p>
                                    </div>
                                    <div className="comment-content">
                                        <p>{commentText}</p>
                                        <div className="comment-btns-container">
                                            <IconButton color='primary' onClick={() => editComment(id)}>
                                                <EditIcon className="comment-btn" />
                                            </IconButton>
                                            <IconButton color='error' onClick={() => delComment(id)}>
                                                <DeleteIcon className="comment-btn" />
                                            </IconButton>
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
                <form onSubmit={handleCommentSubmit}>
                    <TextField
                        name='name'
                        type='text'
                        label="Name"
                        variant="outlined"
                        fullWidth
                        className='form-fields'
                        value={commentInput.name}
                        onChange={handleChange}
                    />
                    <TextField
                        name='email'
                        type='email'
                        label="Email"
                        variant="outlined"
                        fullWidth
                        className='comment-form-fields'
                        value={commentInput.email}
                        onChange={handleChange}
                    />
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
                    <Button
                        variant="contained"
                        type='submit'
                        size='large'
                        className='comment-form-fields'
                    >
                        Comment
                    </Button>
                </form>
            </div>

            {/* Comments Container */}
            <div className="comments-container">
                {
                    commentsArray.map((elem) => {
                        const { name, commentText, id, commentTime } = elem;
                        return (
                            <div className="comment-row" key={id}>
                                <div className="comment-header">
                                    <h3>{name}</h3>
                                    <p>{commentTime}</p>
                                </div>
                                <div className="comment-content">
                                    <p>{commentText}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        
        </>
    )
}

export default Comments;