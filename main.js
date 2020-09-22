var axios = require('axios');
var data = JSON.stringify({"data":{"UserName":"AACCK_6999B","Password":"fWB8qAMytQfyEZ+e8gmyLV/Dg6yYDwQJIoxNnZ/t0BxnpKZerc8QUYOKrVhkgFmntNe91zsR586AcIsUZrupuWElUUtGZfc3jALhdzWgIBadCEEG6YOu2el3YQsNO07P5nWbnlQczXEbjTjIqtkWS9+0ZUYf2tBBC+sMrIEoTQPR1I6YlDLeLgt+b5A2RG8766ncd8lGkj9n1pNxpHOVffzPjc7SZjVq92UkIgLCgxGxdGYx78HZJxdw6LcRMN505Hw7Ki7WkUJgaUPexaHMgqp8Fs46fzo/2JgNIi48kRj0YKu3TryVP/mdp6cc+YR115nDHjUb3PCO/JgVhSBMMg==","AppKey":"RPPwWpKMho7+2URZ65u+tTJV91CS5rf9K3ZbvF27/fuHPbdwT1X59Lia5RtxSIgjxWUq/HnXQdEkMjabRCn6tOTeeXctIePXEWyLMtRQBAKbQMfjB4jnNylcukXCDGxQaVv4c8uuspuq8nxUW7QgIsWrQoA8iLjAc2wiF8rKxP1UjHA1WRKBQKbHGc7+y3uQNU7ZDbZhRHMODafvGMlvhfXRNfGsnvG3pZiEz0x7BMLLIuDphjaBi4Y6vwi5hsZBrokSE7Dpm7eCZ6kWxPrifOCENF6FqoPIjXzKiI9v//viJTYu8SoEtpf064nS8/I52PAqmcIoUjC51I8Eqwfr2A==","ForceRefreshAccessToken":true}});

var config = {
  method: 'post',
  url: 'https://einv-apisandbox.nic.in/eivital/v1.03/auth',
  headers: { 
    'client_id': 'AACCK09TXP70H4Y', 
    'client_secret': '6L0Zzn42HhVvBPDdr8Xl', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});




app.post("/", (req, res) => {

    const {UserName, Password, AppKey, ForceRefreshAccessToken} = req.body;
    const {UserName, Password, AppKey, ForceRefreshAccessToken} = req.body;


    var data = JSON.stringify({
        data: {
            UserName: String(UserName),
            Password: String(Password),
            AppKey: String(AppKey),
            ForceRefreshAccessToken: true
        }
    })


    // console.log("**********************"+ UserName);
  

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



app.get('/gen_irn', (req, res) => {
  
   res.render('gen_irn', {
            data: gen_irn
        })
})