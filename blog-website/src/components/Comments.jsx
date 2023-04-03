import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

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

    const [commentInput, setCommentInput] = useState({
        id: '',
        name: '',
        email: '',
        commentText: '',
        commentTime: '',
    });
    const [commentsArray, setCommentsArray] = useState([]);

    const handleChange = (e) => {
        let idSet = Math.floor(Math.random() * 1000000)
        setCommentInput((prevState) => ({
            ...prevState,
            ['id']: idSet,
            ['commentTime']: properDate,
            [e.target.name]: e.target.value
        }));
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        setCommentInput({
            id: '',
            name: '',
            email: '',
            commentText: '',
            commentTime: '',
        });
        if (commentInput.name && commentInput.email && commentInput.commentText) {

            setCommentsArray([
                ...commentsArray, commentInput
            ])
        }
    }
    console.log(commentsArray);

    return (
        <>
            <div className="my-container">
                <div className="comments-form">
                    <div className="title-text">
                        <h1>Comments</h1>
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
            </div>
        </>
    )
}

export default Comments;