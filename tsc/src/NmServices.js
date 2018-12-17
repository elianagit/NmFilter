"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NmServices {
    constructor(request, response) {
        this.request = request;
        this.response = response;
    }
    getNmFields() {
        try {
            let result = [];
            this.nmFilter(this.request.body, result);
            this.response.json(result);
        }
        catch (ex) {
            console.error("Exception in NmServices.getNmFields: ", ex.message);
            this.response.json({ error: ex });
        }
    }
    nmFilter(object, result) {
        if (object.hasOwnProperty('Nm'))
            result.push(object.Nm);
        for (var i = 0; i < Object.keys(object).length; i++) {
            if (typeof object[Object.keys(object)[i]] == "object") {
                this.nmFilter(object[Object.keys(object)[i]], result);
            }
        }
    }
}
exports.NmServices = NmServices;
//# sourceMappingURL=NmServices.js.map