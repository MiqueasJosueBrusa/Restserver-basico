const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT || 2425
        this.usuariosRoutePath = '/api/usuarios';
        
    // Middlewares
        this.middlewares();

    // Lectura y Parseo del body
        

    //rutas de mi app
        this.routes()
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // directorio publico
        this.app.use( express.static('public'));

    }

    routes() {

        this.app.use( this.usuariosRoutePath, require('../routes/user.routes'))

        }

    listen() {
        this.app.listen(this.port, () => {
            console.log('■▣ ▦■ ')
            console.log('■▣ ▦■  ■■■■■■■■ ■■  ■■■■')
            console.log('■▣ ▦■  ■      ■ ■■  ■  ■')
            console.log('■▣■▦■  ■      ■ ■■  ■■■■')
            console.log('■▣ ▦■  ■■■■■■■■ ■■■ ■  ■')
            
            console.log('el servidor local corre en el puerto:', this.port);
        });
    }

}

module.exports = Server;

