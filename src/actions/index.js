import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROUTE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=ABRABARABBA9066'

export function fetchPosts() {
    const request = axios.get(`${ROUTE_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

