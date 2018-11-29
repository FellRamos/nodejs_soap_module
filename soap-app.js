var soap = require('soap');


const url = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?wsdl'
const headers = {
  'Content-Type': 'text/xml;charset=UTF-8',
  //'soapAction': 'not needed (fields are empty in the wsdl file)'
}


var args = {sCountryISOCode: 'PT'}; 

soap.createClient(url, function(err, client) {
  client.CountryName(args, function(err, result) {
    console.log(result); // The result will be only the field we ask for (In json format)
  })
})


