const http = require('http');

http.createServer( (req, res) => {

    /*console.log(req);
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // para enviar un estado de respuesta especifico, defecto 200
    res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write( 'id; Nombre\n' );
    res.write( '1; William\n' );
    res.write( '2; Lari\n' );
    res.write( '3; Rocio\n' );
    res.write( '4; Pame\n' );*/
    res.write( 'Hola mundo' );
    res.end();
}).listen(8080);

console.log('Escuchando en el puerto ', 8080)