import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Pagination from '@mui/material/Pagination';


const Blogs = () => {

    const [posts, setPosts] = useState();
    const [isError, setIsError] = useState();


    const ApiUrl = 'https://jsonplaceholder.typicode.com/posts';

    const fetchPosts = (url) => {
        try {
            const res = axios.get(url);
            setPosts(res.data);

        } catch (error) {
            setIsError(error);
        }
    }
    console.log(posts);

    useEffect(() => {
        fetchPosts(ApiUrl);
    }, [])

    const handlePaginationClick = (event, page) => {
        console.log(page);
    }

    let counter = 0;
    return (
        <>
            <div className="blogs-container">
                {
                    posts?.slice(0, 9)?.map((item) => {
                        const { id, title } = item;
                        counter++;
                        return (
                            < div className="blog-box" key={id}>
                                <div className="blog-pic" >
                                    {/* <img src={`https://picsum.photos/800/550?random=${counter}`} alt="" /> */}
                                </div>
                                <h3>{title.slice(0, 20)}</h3>
                                <Link>Read More Here...</Link>
                            </div>
                        )
                    })
                }
            </div >
            <Pagination
                count={10}
                variant="outlined"
                shape="rounded"
                color='primary'
                className="pagination-btns"
                onChange={handlePaginationClick}
            />
        </>
    )
}

export default Blogs;