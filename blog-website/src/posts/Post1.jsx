import React, { useContext, useEffect, useState } from 'react';
import Comments from '../components/Comments'
import { blogs } from '../context/BlogsProvider';
import { useParams } from 'react-router-dom';

const Post1 = () => {

    const { blogsList } = useContext(blogs);
    let { postid } = useParams();
    const [currentBlog, setCurrentBlog] = useState();

    useEffect(() => {
        let tempBlog = blogsList.find(item => item.id === parseInt(postid));

        if (tempBlog) {
            setCurrentBlog(tempBlog);
        }
        window.scrollTo(0, 0);
    }, [])



    return (
        <div className='post-page page'>
            <div className="my-container">

                <div className="title-text">
                    <h1>{currentBlog?.title}</h1>
                </div>

                <div className='post-img'>
                    <img src={`${currentBlog?.image}`} alt="" />
                </div>

                <div className="post-content">
                    <div dangerouslySetInnerHTML={{ __html: currentBlog?.description }} />
                    {/* <p>
                        {currentBlog?.description}
                    </p> */}

                </div>
            </div>
            <Comments />
        </div>
    )
}

export default Post1