import axios from 'axios';

export default axios.create({
	baseURL: 'https://1ed9-223-178-210-213.ngrok-free.app',
	headers: {
		'ngrok-skip-browser-warning': 'true',
	},
});
