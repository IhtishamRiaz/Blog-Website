import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const Comments = () => {

    const [commentInput, setCommentInput] = useState({
        id: '',
        name: '',
        email: '',
        commentText: '',
    });
    const [commentsArray, setCommentsArray] = useState([]);

    const handleChange = (e) => {
        let idSet = 1;
        setCommentInput((prevState) => ({
            ...prevState,
            ['id']: idSet,
            [e.target.name]: e.target.value
        }));
        idSet++;
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        setCommentInput({
            id: '',
            name: '',
            email: '',
            commentText: '',
        });
        if (commentInput.name && commentInput.email && commentInput.commentText) {

            setCommentsArray([
                ...commentsArray, commentInput
            ])
        }
    }
    console.log(commentsArray);

    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    let date = new Date();
    let day = date.getDate();
    let minute = date.getMinutes();
    let hour = date.getHours();
    let year = date.getFullYear();
    let month = date.getMonth();

    let timeSuffix = ' AM';
    if (hour > 12) {
        hour = hour - 12;
        timeSuffix = ' PM';
    }

    let monthName = monthList[month];
    let properDate = monthName + " " + day + ", " + year + " at " + hour + ':' + minute + timeSuffix;

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
                            const { name, commentText } = elem;
                            return (
                                <div className="comment-row">
                                    <div className="comment-header">
                                        <h3>{name}</h3>
                                        <p>{properDate}</p>
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