function webServerConnect() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1', {
            headers: {
                'Cache-Control': 'no-cache'
            }
        })
        .then(function (response) {
            return response.json()
        });
}

async function getJSONData() {
    const result = await webServerConnect();
    console.log(result);
    // console.log('작업 종료');
}

getJSONData();