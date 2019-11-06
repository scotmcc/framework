import express from 'express';
import ews from 'express-ws';

export default {

  start: () => {
    const app = express();
    const ws = ews(app);

    app.use(function(req, res, next) {
      console.log('middleware');
      req.testing = 'testing';
      return next();
    });

    app.get('/', function(req, res, next) {
      console.log('get route', req.testing);
      res.end();
    });

    app.ws('/', function(ws, req) {
      ws.on('message', function(msg) {
        console.log(msg);
      });
      console.log('socket', req.testing);
    });

    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}!`);
      console.log('Press CTRL+C to close application.');
    });

  }
}
