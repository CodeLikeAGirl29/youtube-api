import axios from "axios";

const KEY = "AIzaSyCj1uqh2QhdGUX1_cwPXzLoqd1jdv75o6M";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY,
	},
});
