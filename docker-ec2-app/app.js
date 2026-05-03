const http = require('http');

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Docker App</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #1e3c72, #2a5298);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
        }
        .container {
            background: rgba(0,0,0,0.4);
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }
        h1 {
            font-size: 40px;
            margin-bottom: 10px;
        }
        p {
            font-size: 18px;
            opacity: 0.9;
        }
        .tag {
            margin-top: 20px;
            padding: 10px 20px;
            background: #00c6ff;
            color: black;
            border-radius: 20px;
            display: inline-block;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Dockerized Web App</h1>
        <p>Successfully deployed using Docker and AWS EC2</p>
        <div class="tag">Project by Rujul</div>
    </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});