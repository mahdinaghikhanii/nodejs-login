const http = require('http');

const url = require('url');


let database = {
    users: [
        {id : 1 , username : 'mahdi' , email : "mahdi@gmail.com" ,password : "123456"},
        {id : 2 , username : 'ali' , email : "alii@gmail.com" ,password : "123456"},
        {id : 3 , username : 'amin' , email : "amin@gmail.com" ,password : "123456"},
    ]
}

const server  = http.createServer((req ,res) => {

    res.setHeader('Access-Control-Allow-Orgin', '*')
    const urlParams = url.parse(req.url , true);
    if(urlParams.pathname == '/api/users'){
        const mainUser = database.users.filter((user) => user.username.toLowerCase() === urlParams.query.username.toLocaleLowerCase());
        if(mainUser.length){
            res.write(JSON.stringify(mainUser[0]));
            res.end();
        }else{
            res.write("not found");
            res.end();
        }
    }
}); 


server.listen(3000);