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

export function getPrograms(callback) {
    const url = publicURL + '/program/programs.json';
    getData(url, callback);
}

export function getWorks(callback) {
    const url = publicURL + '/work/works.json';
    getData(url, callback);
}

export function getPapers(callback) {
    const url = publicURL + '/paper/papers.json';
    getData(url, callback);
}
