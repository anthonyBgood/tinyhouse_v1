import { MongoClient } from "mongodb";
import { Database } from "../lib/types"

import { user, userPassword, cluster } from "./coonectionInfo"

const url = `mongodb+srv://${user}:${userPassword}@${cluster}.isvgdde.mongodb.net/?retryWrites=true&w=majority`;


export const connectDatabase = async(): Promise<Database> => {
    
    const client = await MongoClient.connect(url);
    const db = client.db("main");

    return{
        listings: db.collection("test_listings")
    };

};
