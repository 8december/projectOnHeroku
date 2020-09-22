var client = new RestClient("https://einv-apisandbox.nic.in/eivital/v1.03/auth");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddHeader("client_id", "AACCK09TXP70H4Y");
request.AddHeader("client_secret", "6L0Zzn42HhVvBPDdr8Xl");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{\r\n \"data\":  {\r\n  \r\n          \"UserName\": \"AACCK_6999B\",\r\n          \"Password\":\r\n            \"RAIyaLQtb81Af6b8IEFWJJjBhSeZYJe1CwNlS2PBQi2zRAzl5/XTygHfPGs2BeHAso4BbA4B7f19S941iqjnHzWOkbNoJnRY9gWtiCoRazJV8vYNgM5ObuOb66Aq3nUpHxeZlfbu9v6N3+BXjx74vDQMdslRjjWlS6C018aviwBZgcjA+55qXhBPOnlf1/dZOPTgHbkO8rLg3fxTHKN0q3I2WPpjDFPZsHOO6c1N58uzlGm0X4H+sNstc4Tnn8axAVO15iYkZg+jS3PqDy9jwQAdOvNGyz9EqYGjo6zJ1Y5vV46MywwOEIJFrrdYo/Wiv6oGF1uW+2z0oWsERg6xPA==\",\r\n          \"AppKey\":\r\n            \"hLrAS23RSw9Un+I+0kvfTsW75E1qCJBeOmebu/SExojHlGBvJOWMtMF9rCyP9Z+th++juP/Vua1V44onAoF+0dggm+S+nEubtvoUFZgzUEZ44ZewNGe2H6DAcODPWY24s7qFpF6le0Zhvf8/qZlBzpyuqtVmlRHDoofTxeNaKN4Iz46EKM8ARLFP0M0IWf/zRwU8pIkP7p6gPvEoJiE9BY3pctK9TjiDKCpig3tQ2il1eQ55ep28Mxlb8pffO1yz6jfP+Zbblhjt8wZB/mFhQ2z/7PReVJErptyjzA4Je3o5lTEfI+jU1NnCjXbYSxRxx0/CMeBNZT/E90STn8DAtQ==\",\r\n          \"ForceRefreshAccessToken\": true\r\n\r\n      }\r\n}",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);



app.get("/", async (req, res) => {
  //req.body = data;
  //   var output

  //   var data = JSON.stringify({
  //       data: {
  //           UserName : String(req.body.UserName),
  //           Password : String(req.body.Password),
  //           AppKey : String(req.body.AppKey),
  //           ForceRefreshAccessToken : Boolean(req.body.ForceRefreshAccessToken),
  //       }
  //   });

  console.log(req.body);

  //   res.render("ce", {
  //     data: data,
  //   });

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
      res.render('ce', {

      })
    })
    .catch(function (error) {
      console.log(error);
    });
});







// *************************


var express = require("express");
var axios = require("axios");
var ejs = require("ejs");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var data

app.get("/s", function (req, res) {
  res.send("Hello world!");
});

app.get("/", (req, res) => {
  res.render("ce", {
    data: data,
  });
});
app.post("/", (req, res) => {

    const {UserName, Password, AppKey, ForceRefreshAccessToken} = req.body;


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
        })
        .catch(function (error) {
        console.log(error);
        });

    res.render('test', {
        data: data
    })
});

app.listen(1000);