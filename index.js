var express = require('express');
var app = express();
var path = require('path');

app.set('port', process.env.PORT || 3000); // Usar el puerto 3000 por defecto o un puerto especificado en el entorno

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), () => {
    console.log(`Aplicacion corriendo en el puerto ${app.get('port')}`);
});