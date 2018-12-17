"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utility_1 = require("./Utility");
// import * as express from 'express'
class Main {
    static main() {
        console.log("Entered main.");
        let utility = new Utility_1.Utility();
        utility.runApplication();
        return 0;
    }
}
Main.main();
//# sourceMappingURL=Main.js.map