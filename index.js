const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
app.set('view engine','ejs');

app.listen(4000);



app.get('/cover_page',function(req,res){
     res.sendFile(__dirname + '/pages/cover_page.html');
});

app.get('/mainpage',function(req,res){
     res.sendFile(__dirname + '/pages/mainpage.html');
});

app.get('/info_gas',function(req,res){
     res.sendFile(__dirname + '/pages/info_gas.html');
});

app.get('/info_nuclear',function(req,res){
     res.sendFile(__dirname + '/pages/info_nuclear.html');
});

app.get('/info_hydro',function(req,res){
     res.sendFile(__dirname + '/pages/info_hydro.html');
});

app.get('/efficiency_hydro',function(req,res){
     res.sendFile(__dirname + '/pages/efficiency_hydro.html');
});

app.post('/efficiency_hydro',urlencodedParser,function(req,res){

      const flow = 1;
      const g = 9.81;
      const p = 1000;

      let efficiency = (req.body.power)/((flow)*(p)*(g)*(req.body.height)/1000);
      res.render('efficiency_hydro',{eff:efficiency});
});

app.get('/info_thermal',function(req,res){
     res.sendFile(__dirname + '/pages/info_thermal.html');
});

app.get('/efficiency_thermal',function(req,res){
     res.sendFile(__dirname + '/pages/efficiency_thermal.html');
});

app.post('/efficiency_thermal',urlencodedParser,function(req,res){

      const p = 1;
      let efficiency = (req.body.power*p)/(req.body.heat*p);
      res.render('efficiency_thermal',{eff:efficiency});
});

app.get('/efficiency_gas',function(req,res){
     res.sendFile(__dirname + '/pages/efficiency_gas.html');
});

app.post('/efficiency_gas',urlencodedParser,function(req,res){

      let efficiency = 1-(req.body.t4-req.body.t3)/(req.body.t2-req.body.t1);
      res.render('efficiency_gas',{eff:efficiency});
});

app.get('/efficiency_nuclear',function(req,res){
     res.sendFile(__dirname + '/pages/efficiency_nuclear.html');
});

app.post('/efficiency_nuclear',urlencodedParser,function(req,res){

  const p = 1;
  let efficiency = (req.body.power*p)/(req.body.heat*p);
  res.render('efficiency_nuclear',{eff:efficiency});
});
