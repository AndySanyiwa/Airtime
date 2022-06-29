const credentials = {
    apiKey: '8fa7db98d64e585bf133cd239f8e888b92888e4ab14f350093df739d334c0a65',
    username: 'muchbeerx'
}

const AfricasTalking = require('africastalking')(credentials)

const airtime = AfricasTalking.AIRTIME

const options = {
    recipients: [{
        phoneNumber: document.getElementById('num').value,
        currencyCode: document.getElementById('currency').value,
        amount: document.getElementById('amount').value
    }]
};

const sendCode() {
    airtime.send(options)
        .then( response => {
            console.log(response);
        })
        .catch( error => {
            console.log(error);
        });
} 
