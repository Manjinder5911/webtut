const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          .container{
              border: 2px solid rgb(48, 43, 117);
              background-color:burlywood;
              padding: 20px 35px;
              margin: 20px auto;
              width: 666px;
              text-align: justify;
              font-size: 110%;
          }
          a{
              text-decoration: none;
              color: black;
          }
          a:visited{
              background-color: yellow;
  
          }
          a:active{
              background-color: rgb(20, 20, 121);
          }
          a:hover{
              color: green;
          }
          .btn:hover{
              background-color:rgb(28, 121, 138);
          }
          .btn{
              background-color: rgb(77, 190, 224);
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 15px;
              border-radius: 4px;
  
          }
      </style>
  </head>
  <body>
      <div id="cont1" class="container">
          <h1>This is my heading</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur sit beatae nulla esse voluptas quia, magnam dicta molestiae est omnis accusamus aliquam fuga nobis ullam asperiores! Ab repellat doloremque, accusamus earum asperiores laboriosam odio nam cumque, reprehenderit maiores nostrum? Obcaecati.</p>
          <a href="https://facebook.com" class="btn">Read more</a>
          <button class="btn">Contact us</button>
      </div>
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});