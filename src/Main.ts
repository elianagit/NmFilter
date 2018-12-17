import { Utility } from "./Utility";

// import * as express from 'express'
class Main {

    public static main(): number {

        console.log("Entered main.")
        let utility = new Utility()
        utility.runApplication()
        return 0
    }
}

Main.main();