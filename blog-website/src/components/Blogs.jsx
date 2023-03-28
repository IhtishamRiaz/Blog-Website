import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


const Blogs = () => {

    const [posts, setPosts] = useState();
    const [isError, setIsError] = useState();


    const ApiUrl = 'https://jsonplaceholder.typicode.com/posts';

    const fetchPosts = async (url) => {
        try {
            const res = await axios.get(url);
            setPosts(res.data);

        } catch (error) {
            setIsError(error);
        }
    }

    useEffect(() => {
        fetchPosts(ApiUrl);
    }, [])

    console.log(posts);

    return (
        <>
            <div className="blogs-container">
                <div className="blog-box">
                    <div className="blog-pic">
                        <img src="https://picsum.photos/800/550?random=1" alt="" />
                        <h3>Blog Title</h3>
                        <Link>Read More Here</Link>
                    </div>
                </div>
                {
                    posts?.map((item) => {
                        const { id, title } = item;
                        return (
                            <div className="blog-box">
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Blogs;