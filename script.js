// var app = express()
// var cors = require('cors')
// app.use(cors())

$(function getCountries() {

    $.ajax({
        url: 'http://localhost:8000/country',
        success: function (country, statuts, response) {
            console.log(country);
        }
    });
})
getCountries()