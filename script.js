var cors = require('cors')
app.use(cors())


function getCountries() {
    
$.ajax({
    url: 'http://localhost:8000/country',
    success: function(data, statuts, response) {
        console.log(data);
    }
});

console.log('#3');
    
}