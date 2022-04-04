import axios from 'axios';
import { API_ROOT } from '../config/environment';

const apiURL = `${ API_ROOT }/api`;
const getResume = async () => {

    try {
        const { data }  = await axios({
            url: `${ apiURL }/resume-download`,
            method: 'GET',
            responseType: 'blob'
        });
        return Promise.resolve(data);
    } catch (err) {
        return Promise.reject(err);
    }

};

const getResource = async fileKey => {
    try {
        const { data }  = await axios({
            url: `${ apiURL }/download-resource`,
            method: 'GET',
            params: { fileKey },
            responseType: 'blob'
        });
        return Promise.resolve(data);
    } catch (err) {
        return Promise.reject(err);
    }
};

const downloadResource = (fileUrl, fileName='') => {
    if (!fileUrl) {
        return;
    }

    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', `karly-${fileName}.pdf`);

    document.body.appendChild(link);
    link.click();
};

export {
    getResume,
    downloadResource,
    getResource
};