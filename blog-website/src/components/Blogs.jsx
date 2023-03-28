import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Pagination from '@mui/material/Pagination';


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
                {
                    posts?.slice(0, 9)?.map((item) => {
                        const { id, title } = item;
                        return (
                            <Link className="blog-box route-link" to={'/about'}>
                                < div key={id}>
                                    <div className="blog-pic" >
                                        <img src="https://picsum.photos/800/550?random=1" alt="" />
                                        <h3>{title.slice(0, 20)}</h3>
                                        <Link>Read More Here</Link>
                                    </div>
                                </div>
                            </Link >
                        )
                    })
                }
            </div >
            <Pagination count={10} variant="outlined" shape="rounded" />
        </>
    )
}

export default Blogs;