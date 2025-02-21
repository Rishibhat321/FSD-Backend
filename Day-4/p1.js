const http= require('http');

const server=http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type": "application/json"});
    if(req.url== '/getdata' && req.method==='GET') 
    {
        const data = {name: 'John Doe', age:30};
        res.end(JSON.stringify(data));
    }

});

server.listen(9000, () => {
    console.log("Server is running at http://localhost:9000/");
});