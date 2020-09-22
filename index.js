var express = require("express");
var axios = require("axios");
var ejs = require("ejs");
var bodyParser = require("body-parser");

gen_irn = require('./gen_irn.json') 

var jj = require('./Authentication4');

// SchUseStrongCryptoconst gen_irn = require('./') 

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var data



app.get("/s", function (req, res) {

  res.send("Hello world!");
      // jj = toString(jj)
    // jj = JSON.stringify(jj)
    // jj = JSON.parse(jj)
    console.log(jj.data.Password);
});

app.get("/", (req, res) => {
  res.render("ce", {
    data: data,
  });
});

app.post("/", (req, res) => {

    const {UserName, Password, AppKey, ForceRefreshAccessToken} = jj.data

    var data = JSON.stringify({
        data: {
            UserName: String(UserName),
            Password: String(Password),
            AppKey: String(AppKey),
            ForceRefreshAccessToken: true
        }
    })
   
    var config = {
        method: "post",
        url: "https://einv-apisandbox.nic.in/eivital/v1.03/auth",
        headers: {
        client_id: "AACCK09TXP70H4Y",
        client_secret: "6L0Zzn42HhVvBPDdr8Xl",
        "Content-Type": "application/json",
        },
        data: data,
    };

    axios(config)
        .then(function (response) {
        console.log(response.data);
        res.render('test', {
            data: response.data.Data
        })
        })
        .catch(function (error) {
        console.log(error);
        });
        
});

app.get('/long', (req, res) => {
  res.render('long_form', {
    
  })
})

              

app.listen(1000);
