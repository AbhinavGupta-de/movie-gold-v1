import axios from 'axios';

export default axios.create({
	baseURL: 'https://ee6e-223-178-210-201.ngrok-free.app',
	headers: {
		'ngrok-skip-browser-warning': 'true',
	},
});
