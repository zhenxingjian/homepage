import reqwest from 'reqwest';

const publicURL = process.env.PUBLIC_URL;

function getData(url, callback) {
    reqwest({
        url: url + '?time=' + (new Date().getTime()),
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        success: callback
    });
}


export function checkUrl(url) {
    if (url.startsWith('http'))
        return url;
    else
        return publicURL + '/' + url;
}

export function getProjects(callback) {
    const url = publicURL + '/project/projects.json';
    getData(url, callback);
}

export function getWorks(callback) {
    const url = publicURL + '/work/works.json';
    getData(url, callback);
}

export function getPublications(callback) {
    const url = publicURL + '/publication/publications.json';
    getData(url, callback);
}

export function getInfo(callback) {
    const url = publicURL + '/info/info.json';
    getData(url, callback);
}
