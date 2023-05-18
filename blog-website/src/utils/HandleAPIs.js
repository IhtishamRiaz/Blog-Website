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

export { getAllPosts };