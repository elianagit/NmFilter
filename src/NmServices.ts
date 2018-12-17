import * as express from 'express'

export class NmServices {

    private request: express.IncomingMessage
    private response: express.ServerResponse


    constructor(request: express.IncomingMessage,
        response: express.ServerResponse) {

        this.request = request
        this.response = response
    }

    public getNmFields() {

        try {
            let result = []
            this.nmFilter(this.request.body, result)
            this.response.json(result)
        }
        catch (ex) {
            console.error("Exception in NmServices.getNmFields: ", ex.message)
            this.response.json({ error: ex })
        }
    }

    private nmFilter(object, result) {
        if (object.hasOwnProperty('Nm'))
            result.push(object.Nm);

        for (var i = 0; i < Object.keys(object).length; i++) {
            if (typeof object[Object.keys(object)[i]] == "object") {
                this.nmFilter(object[Object.keys(object)[i]], result);
            }
        }
    }
}