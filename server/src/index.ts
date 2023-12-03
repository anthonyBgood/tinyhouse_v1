import express from 'express';
import bodyParser from "body-parser";

import {listings} from "./listings";


const app = express();
const port = 9000


// parsing to interprate get requests
app.use(express.json());//  bodyParser.json());


// routes
// web app
app.get("/", (_req, res) => res.send("Hello World"));

// listings page
app.get("/listings",(_req,res) =>{
    return res.send(listings);
});

// delete a lsiting
app.post("/delete-listing", (req, res) => {
    const id: string = req.body.id;

  
    for (let i = 0; i < listings.length; i++) {
      if (listings[i].id === id) {
        return res.send(listings.splice(i, 1)[0]);
      }
    }
  
    return res.send(`failed to deleted listing: (${id})`);
  });


app.listen(port);

console.log(`[app]: http://localhost:${port}`);


