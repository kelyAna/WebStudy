const express = require('express')

class AppController {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    /*
        O método middlewares será utilizado para realizar registros na nossa aplicação.
        No caso, os registros serão feitos através de json.
    */
    middlewares() {
        this.express.use(express.json());
    }

    /*
        O método routes permite escrever as rotas da nossa aplicação.
    */
    routes() {
        this.express.use(
            require('.routes')
        );
    }

}

module.exports = new AppController().express;