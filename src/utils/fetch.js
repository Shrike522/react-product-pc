
export default function requestApi (method = "GET", url, body) {

    method = method.toUpperCase();

    if (body && Object.prototype.toString.call(body) === "[object Object]") {
        body = JSON.stringify(body);
    }

    return fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache'
        },
        body
    }).then(res => {

        const { status } = res;

        if (status >= 200 && status < 300) {
            return res.json();
        }

        console.log("error");

    }).catch(err => {
        console.log(err);
    });

};
