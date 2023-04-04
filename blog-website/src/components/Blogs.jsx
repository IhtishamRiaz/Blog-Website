import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { blogs } from '../context/BlogsProvider';
import { Tab, Tabs } from '@mui/material';


const Blogs = () => {

    const { blogsList } = useContext(blogs);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);
    const [tabValue, setTabValue] = useState(0);
    const [currentBlogList, setCurrentBlogList] = useState(blogsList);

    let indexOfLastPost = postsPerPage * currentPage;
    let indexOfFirstPost = indexOfLastPost - postsPerPage;
    let totalPages = blogsList?.length;
    let counter = 0;

    const handlePaginationClick = (event, page) => {
        setCurrentPage(page);
    }
    const handleTabChange = (event, val) => {
        setTabValue(val);
    }
    const categoryList = ['all', 'travel', 'cricket', 'development']
    let categoryName = categoryList[tabValue];

    useEffect(() => {

        if (categoryName === 'all') {
            setCurrentBlogList(blogsList);
        }
        else {
            let tempBlogList = blogsList?.filter(item => item.category === categoryName);
            setCurrentBlogList(tempBlogList);
        }
    }, [categoryName])

    return (
        <>
            <div className="blog-tabs">
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    <Tab label='All' style={{ fontWeight: '800' }}></Tab>
                    <Tab label='Travel' style={{ fontWeight: '800' }}></Tab>
                    <Tab label='Cricket' style={{ fontWeight: '800' }}></Tab>
                    <Tab label='Development' style={{ fontWeight: '800' }}></Tab>
                </Tabs>
            </div>
            <div className="blogs-container">
                {
                    currentBlogList?.slice(indexOfFirstPost, indexOfLastPost)?.map((item) => {
                        const { id, title } = item;
                        counter++;
                        return (
                            <Link className="blog-box route-link" key={id} to={`post/${id}`}>
                                <div className="blog-pic" >
                                    <img src={`https://picsum.photos/800/550?random=${counter}`} alt="" />
                                </div>
                                <h3>{title}</h3>
                                <p>Read More Here</p>
                            </Link>
                        )
                    })
                }
            </div >
            {/* <div className="blogs-container">
                {
                    posts?.slice(indexOfFirstPost, indexOfLastPost)?.map((item) => {
                        const { id, title } = item;
                        counter++;
                        return (
                            <Link className="blog-box route-link" key={id} to={`post/${counter}`}>
                                <div className="blog-pic" >
                                    <img src={`https://picsum.photos/800/550?random=${counter}`} alt="" />
                                </div>
                                <h3>{title.slice(0, 20) + '...'}</h3>
                                <p>Read More Here...</p>
                            </Link>
                        )
                    })
                }
            </div > */}
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