import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://65.1.40.113:8989'
});

export default instance;
