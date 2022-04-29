import axios from 'axios';

const caller = axios.create({
    baseURL: 'https://retoolapi.dev/1Y0gpL/data'
})

export default caller;