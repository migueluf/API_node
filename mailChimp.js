const listId = "ed42401cba";
const mailchimp = require("@mailchimp/mailchimp_marketing")
//const airTable = require("https://api.airtable.com/v0/appLJitp7wcaqDCQP/Teste%20mail%20chimp")

mailchimp.setConfig({
    apiKey: "db1f10bda09abcc01eac7e62f98ce68a-us21",
    server: "us21"
});




// receber usuário novo do AirTable
const express = require("express")

const app = express()
//const port = 9000
const port = 3000

app.get("/mailchimp/send", (req, res) => {
    const name = req.query.name;
    const email = req.query.email;
    console.log(email)

    sendMailChimp(name,email)
    res.send("Conecção feita")

    
    
})



//Cadastro de contato no mailchimp
async function sendMailChimp(name, email){

    const subscribingUserAirTable = {
        firstName: name,        
        email: email
      };

      console.log(subscribingUserAirTable.email);
 
   
    
} 

app.listen(port, () => console.log('API rodando na porta 3000'));
