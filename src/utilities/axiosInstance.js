const axiosLoadPDF = (url, type)=>{
    const axios = require('axios');
    return axios(
        {
            url: url,
            responseType: type,
        }
    )    
}

export default axiosLoadPDF;