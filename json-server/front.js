//전체조회
fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(data => console.log('list', data))
    .catch(err => console.log(err))
//단건조회
fetch('http://localhost:3000/posts/1') //  '/'를 기준으로 조회하고자하는 대상의 정보를 입력하고조회, 여기서는 1이라는값을 넘겨줌
    .then(res => res.json())
    .then(data => console.log('info', data))
    .catch(err => console.log(err))

//new terminal을 열고 D:\Dev\webWorkspace\json-server>node front.js

//등록
// fetch('http://localhost:3000/posts', {
//         method: 'post',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify({
//             userId: 2,
//             id: 4,
//             title: 'Have A Nice Day',
//             body: 'suscipit recusandae consequuntur expedita et cum\n' +
//                 'reprehenderit molestiae ut ut quas totam\n' +
//                 'nostrum rerum est autem sunt rem eveniet architecto'
//         })
//     })
//     .then(res => res.json())
//     .then(result => console.log('insert', result));

    //http://localhost:3000/posts/4 를 하면 추가된게 나온다..

//수정 : 단건조회와 등록이 결합되어있다.
fetch('http://localhost:3000/posts/4', { //수정할 대상의 정보id(4)를 경로에 적어주고,
        method: 'put', //post가 아니라 put
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ //body에 들어가는건 수정할 대상
            userId: 3,
            title: 'Hello, World',
            body: 'suscipit recusandae consequuntur expedita et cum\n' +
                'reprehenderit molestiae ut ut quas totam\n' +
                'nostrum rerum est autem sunt rem eveniet architecto'
        })
    })
    .then(res => res.json())
    .then(result => console.log('insert', result));
    //http://localhost:3000/posts/4 해보면 바뀌어있다

//삭제
fetch('http://localhost:3000/posts/4',{
    method : 'delete'
})
.then(res => res.json())
.then(result => console.log('delete',result));

  //http://localhost:3000/posts/4 해보면 삭제