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

const getCurrentUser = async (setCurrentUser, id) => {
    try {
        const config = {
            headers: {
                authorization: sessionStorage.getItem('accessToken')
            }
        };
        const result = await axios.get(`/getUser/${id}`, config)
        setCurrentUser(result);
    } catch (error) {

    }
}

export { getAllPosts, getCurrentUser };