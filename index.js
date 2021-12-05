const http = require("http");
const url = require('url');




http.createServer((req, res) => {
    
 let myPath = url.parse(req.url, true).pathname;

  if(myPath === '/age'){

    const student = url.parse(req.url , true).query;

    let myDate = (student.date)
   
    let myMonth = (student.month)
    
    let myYear = (student.year)
  
    let myName = (student.name)
    
    let myBirth = new Date(`${myMonth}/${myDate}/${myYear}`);

    let month_diff = Date.now() - myBirth.getTime();

    let format = new Date(month_diff);

    let newYear = format.getUTCFullYear();

    let finalValue = Math.abs(newYear - 1970);

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end(`<p>hello ${myName}</p> 
    <p>You are currently ${finalValue} years old</p> 
    `);
   
    res.end();
  }else{
      console.log('Url is not valid');
  }

    

}).listen(8080, () => 
console.log('Server is running')
)

