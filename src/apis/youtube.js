import axios from 'axios';

const KEY = "AIzaSyCw-aBzuiqPcy87fKNWX2h__AD3s6hNCow";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/playlistItems',
    params: {
        part: 'snippet',
        playlistId: 'PL9FvRJVQDugpg6XRrT9dAXer1SqSq_M2m',
        maxResults: 50,
        key: KEY
    }
})