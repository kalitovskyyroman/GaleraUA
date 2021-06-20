import axios from 'axios';

async function fetchJobs(url, cancelToken, setter) {
    try {
        const response = await axios.get(url, { cancelToken: cancelToken });
        console.log(response.data.jobs);
        setter(response.data.jobs);
    } catch (error) {
        console.log(error);
    }
}

export default fetchJobs;
