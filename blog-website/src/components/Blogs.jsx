import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { blogs } from '../context/BlogsProvider';
import { Tab, Tabs, TextField } from '@mui/material';
import AlternatePic from '../images/NoPostAvailable.gif';
import { getAllPosts } from '../utils/HandleAPIs';


const Blogs = () => {
    const { blogsList } = useContext(blogs);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);
    const [tabValue, setTabValue] = useState(0);
    const [currentBlogList, setCurrentBlogList] = useState();
    const [querry, setQuerry] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
        setCurrentBlogList(blogsList);
    }, [blogsList])

    let indexOfLastPost = postsPerPage * currentPage;
    let indexOfFirstPost = indexOfLastPost - postsPerPage;

    const handlePaginationClick = (event, page) => {
        setCurrentPage(page);
    }
    const handleTabChange = (event, val) => {
        setTabValue(val);
    }
    const categoryList = ['all', 'travel', 'cricket', 'development', 'artificial intelligence'];
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

    const searchedList = currentBlogList?.filter(item => {
        return item.title.toLowerCase().includes(querry.toLowerCase())
    })

    let totalPages = searchedList?.length;

    useEffect(() => {
        if (searchedList?.length === 0) {
            setIsEmpty(true);
        }
        else {
            setIsEmpty(false);
        }
    }, [searchedList])


    return (
        <>
            <div className="blog-controls">
                <div className="blog-tabs">
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab label='All' style={{ fontWeight: '600' }}></Tab>
                        <Tab label='Travel' style={{ fontWeight: '600' }}></Tab>
                        <Tab label='Cricket' style={{ fontWeight: '600' }}></Tab>
                        <Tab label='Development' style={{ fontWeight: '600' }}></Tab>
                        <Tab label='Artificial Intelligence' style={{ fontWeight: '600' }}></Tab>
                    </Tabs>
                </div>

                <div className="blog-search">
                    <TextField
                        type='search'
                        value={querry}
                        onChange={(e) => setQuerry(e.target.value)}
                        label="Search Blogs"
                        variant="outlined"
                    />
                </div>
            </div>
            <div className="blogs-container">
                {
                    searchedList?.slice(indexOfFirstPost, indexOfLastPost)?.map((item) => {
                        const { _id, title, postImage } = item;
                        const url = process.env.REACT_APP_IMAGES_URL
                        return (
                            <Link className="blog-box route-link" key={_id} to={`post/${_id}`}>
                                <div className="blog-pic" >
                                    <img src={`${url}${postImage}`} alt="" />
                                </div>
                                <h3>{title}</h3>
                                <p>Read More Here</p>
                            </Link>
                        )
                    })
                }
                {
                    isEmpty &&
                    <div className="alternative-pic">
                        <img src={AlternatePic} alt="" />
                    </div>
                }
            </div >

            <Pagination
                count={Math.ceil(totalPages / postsPerPage)}
                variant="outlined"
                shape="rounded"
                color='primary'
                className="pagination-btns"
                onChange={handlePaginationClick}
                style={{ marginBottom: '3.125rem' }}
            />
        </>
    )
}

export default Blogs;