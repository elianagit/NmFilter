import * as express from 'express'
import { ServerConsts } from '../consts/ServerConsts';
import { NmServices } from './NmServices';

const bodyParser = require('body-parser')

export class Utility {

    constructor() {

    }

    public runApplication() {

        try {
            let app = express()
            app.use(bodyParser.json())

            app.use((req, res, next) => {
                res.setHeader('Access-Control-Allow-Origin', "*")
                res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
                res.header('Access-Control-Allow-Headers', "*")
                res.header('Access-Control-Allow-Credentials', true)

                if (req.method === 'OPTIONS') {
                    res.end()
                    return
                }
                next();
            })

            app.post('/get_nm_fields', (req, res) => {
                new NmServices(req, res).getNmFields()
            })

            app.listen(ServerConsts.LISTENNING_PORT)
        }
        catch (ex) {
            console.error("Exception in Utility.runApplication, ex: ", ex)
            throw ex
        }
    }
}