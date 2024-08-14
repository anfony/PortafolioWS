var express = require('express');
var app = express();
var path = require('path');

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), () => {
    console.log(`Aplicación corriendo en el puerto ${app.get('port')}`);
});