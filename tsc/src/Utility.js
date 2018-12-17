"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const ServerConsts_1 = require("../consts/ServerConsts");
const NmServices_1 = require("./NmServices");
const bodyParser = require('body-parser');
class Utility {
    constructor() {
    }
    runApplication() {
        try {
            let app = express();
            app.use(bodyParser.json());
            app.use((req, res, next) => {
                res.setHeader('Access-Control-Allow-Origin', "*");
                res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
                res.header('Access-Control-Allow-Headers', "*");
                res.header('Access-Control-Allow-Credentials', true);
                if (req.method === 'OPTIONS') {
                    res.end();
                    return;
                }
                next();
            });
            app.post('/get_nm_fields', (req, res) => {
                new NmServices_1.NmServices(req, res).getNmFields();
            });
            app.listen(ServerConsts_1.ServerConsts.LISTENNING_PORT);
        }
        catch (ex) {
            console.error("Exception in Utility.runApplication, ex: ", ex);
            throw ex;
        }
    }
}
exports.Utility = Utility;
//# sourceMappingURL=Utility.js.map