'use strict'

class EperController {
    * eper(req, res){
        res.send('eper')
    }

    * hello(req, res){
        yield res.sendView('hello', { name: 'Marci' });
    }
}

module.exports = EperController
