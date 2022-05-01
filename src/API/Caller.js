import axios from 'axios';

const caller = axios.create({
    baseURL: 'http://localhost:3000'
})

export default caller;