// create base url for fetch data or post data
import axios from 'axios'
const axiosIns = axios.create({
    baseURL: 'http://202.91.14.2:8810/smartpos/api',
})
export default axiosIns