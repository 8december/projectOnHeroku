// var axios = require('axios');
// var data = JSON.stringify({"data":{"UserName":"AACCK_6999B","Password":"RAIyaLQtb81Af6b8IEFWJJjBhSeZYJe1CwNlS2PBQi2zRAzl5/XTygHfPGs2BeHAso4BbA4B7f19S941iqjnHzWOkbNoJnRY9gWtiCoRazJV8vYNgM5ObuOb66Aq3nUpHxeZlfbu9v6N3+BXjx74vDQMdslRjjWlS6C018aviwBZgcjA+55qXhBPOnlf1/dZOPTgHbkO8rLg3fxTHKN0q3I2WPpjDFPZsHOO6c1N58uzlGm0X4H+sNstc4Tnn8axAVO15iYkZg+jS3PqDy9jwQAdOvNGyz9EqYGjo6zJ1Y5vV46MywwOEIJFrrdYo/Wiv6oGF1uW+2z0oWsERg6xPA==","AppKey":"hLrAS23RSw9Un+I+0kvfTsW75E1qCJBeOmebu/SExojHlGBvJOWMtMF9rCyP9Z+th++juP/Vua1V44onAoF+0dggm+S+nEubtvoUFZgzUEZ44ZewNGe2H6DAcODPWY24s7qFpF6le0Zhvf8/qZlBzpyuqtVmlRHDoofTxeNaKN4Iz46EKM8ARLFP0M0IWf/zRwU8pIkP7p6gPvEoJiE9BY3pctK9TjiDKCpig3tQ2il1eQ55ep28Mxlb8pffO1yz6jfP+Zbblhjt8wZB/mFhQ2z/7PReVJErptyjzA4Je3o5lTEfI+jU1NnCjXbYSxRxx0/CMeBNZT/E90STn8DAtQ==","ForceRefreshAccessToken":true}});

// var config = {
//   method: 'post',
//   url: 'https://einv-apisandbox.nic.in/eivital/v1.03/auth',
//   headers: { 
//     'client_id': 'AACCK09TXP70H4Y', 
//     'client_secret': '6L0Zzn42HhVvBPDdr8Xl', 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

const rsa = require('node-rsa');
const key = new rsa({ b: 1024 })
let sec = "thow";

var enc = key.encrypt(sec, 'base64');
console.log(enc);

let dec = key.decrypt(enc, 'utf8');
console.log(dec);