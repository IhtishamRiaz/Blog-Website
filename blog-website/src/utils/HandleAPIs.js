import axios from "axios";

const URL = "http://localhost:8080";
const config = {
    headers: {
        authorization: localStorage.getItem('accessToken')
    }
};
// Get All Posts
const getAllPosts = async (setBlogsList) => {
    axios
        .get(`${URL}/getPosts`)
        .then(({ data }) => {
            setBlogsList(data);
            console.log('blogs called');
        })
        .catch((error) => {
        })
}

// Delete Post
const deletePost = async (id) => {
    try {
        await axios.delete(`${URL}/deletePost/${id}`, config);
    } catch (error) {

    }
}

// Get All Users
const getCurrentUser = async (setCurrentUser) => {
    try {
        const uderId = localStorage.getItem('currentUser');
        const result = await axios.get(`${URL}/getUser/${uderId}`, config);
        setCurrentUser(result.data);
    } catch (error) {
    }
}

// Add Comment
const addComment = async (commentData) => {
    try {
        await axios.post(`${URL}/addComment`, commentData, config)
    } catch (error) {
    }
}

// Get All Comments
const getAllComments = (setAllComments) => {
    axios
        .get(`${URL}/getComments`)
        .then(({ data }) => {
            setAllComments(data);
        })
}

// Delete Comment
const deleteComment = async (commentId) => {
    try {
        await axios.delete(`${URL}/delComment/${commentId}`, config);
    } catch (error) {
    }
}
// Update Comment
const updateComment = async (commentData, idToEdit) => {
    try {
        await axios.patch(`${URL}/updateComment/${idToEdit}`, commentData, config)
    } catch (error) {
    }
}


export { getAllPosts, getCurrentUser, getAllComments, deleteComment, updateComment, addComment, deletePost };