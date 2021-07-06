const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json()) 

app.get("/",(req, res)=>{
  res.sendfile(__dirname+"/index.html");
})



app.post('/addMovie' , (req, res) =>{

  const car = {
    type:"Fiat",
     model:"500",
      color:"white"
  };

     let SeriesName = req.body.series;
    let  SeriesYear = req.body.year;


let  SeriesObject = {
     Series : SeriesName ,
     Year: SeriesYear,
  };


  res.json({
     
      SeriesObject, 
      car , 


  })
})


app.listen(port, () => {
  console.log("Ola its me apha ku" +port)
})