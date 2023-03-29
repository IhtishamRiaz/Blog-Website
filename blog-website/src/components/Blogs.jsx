import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Pagination from '@mui/material/Pagination';


const Blogs = () => {

    const [posts, setPosts] = useState();
    const [isError, setIsError] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);


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

    let indexOfLastPost = postsPerPage * currentPage;
    let indexOfFirstPost = indexOfLastPost - postsPerPage;
    let totalPages = posts?.length;
    let counter = 0;

    const handlePaginationClick = (event, page) => {
        setCurrentPage(page);
    }
    return (
        <>
            <div className="blogs-container">
                {
                    posts?.slice(indexOfFirstPost, indexOfLastPost)?.map((item) => {
                        const { id, title } = item;
                        counter++;
                        return (
                            < div className="blog-box" key={id}>
                                <div className="blog-pic" >
                                    <img src={`https://picsum.photos/800/550?random=${counter}`} alt="" />
                                </div>
                                <h3>{title.slice(0, 20)}</h3>
                                <Link>Read More Here...</Link>
                            </div>
                        )
                    })
                }
            </div >
            <Pagination
                count={Math.ceil(totalPages / postsPerPage)}
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