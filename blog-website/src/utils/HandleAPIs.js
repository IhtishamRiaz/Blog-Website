import axios from "axios";

const URL = "http://localhost:8080";

const getAllPosts = (setBlogsList) => {
    axios
        .get(`${URL}/getPosts`)
        .then(({ data }) => {
            setBlogsList(data);
        })
        .catch((error) => {
            console.log(error.message);
        })
}

const getCurrentUser = async (setCurrentUser) => {
    try {
        const uderId = localStorage.getItem('currentUser');
        const config = {
            headers: {
                authorization: localStorage.getItem('accessToken')
            }
        };
        const result = await axios.get(`${URL}/getUser/${uderId}`, config);
        setCurrentUser(result.data);
    } catch (error) {
    }
}

export { getAllPosts, getCurrentUser };