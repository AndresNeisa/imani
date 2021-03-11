import axios from 'axios';

const KEY = "AIzaSyCw-aBzuiqPcy87fKNWX2h__AD3s6hNCow";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/playlistItems',
    params: {
        part: 'snippet',
        playlistId: 'PL9FvRJVQDugror91DbCCJFlLiPUelm3V5',
        maxResults: 50,
        key: KEY
    }
})