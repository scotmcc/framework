import dotenv from 'dotenv';

dotenv.config();

import WebServer from './libraries/web-server';
import Database from './libraries/database';

Database.start();
WebServer.start();
