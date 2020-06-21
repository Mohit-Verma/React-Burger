import Axios from 'axios';

export const serverInstance = Axios.create({
    baseURL: 'https://react-my-burger-f87af.firebaseio.com/'
});