import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://31.187.75.117:8989'
});

export default instance;
