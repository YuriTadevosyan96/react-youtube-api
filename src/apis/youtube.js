import axios from "axios";

const KEY = "AIzaSyD8SXIigOACuDcdccbFWRLYfEQqyoUfVe8";

export default axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
    },
});
