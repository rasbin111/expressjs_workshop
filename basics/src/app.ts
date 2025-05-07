import express, { Request, Response, NextFunction } from "express"
import IndexRouter from "./routes/index.js"
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

var app = express()

app.set('views', path.join(__dirname, '../views'));
app.set("view engine", "pug")

app.use('/static', express.static(path.join(__dirname, "../public")))


const myLogger = function (req: Request, res: Response, next: NextFunction){
  console.log("LOGGED")
  next()
}

const requestTime = function(req: Request | any, res: Response, next: NextFunction){
  let timeStamp = Date.now()
  req.requestTime = new Date(timeStamp)
  next()
}


app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
  res.status(400).send(err.message)
})

app.use(myLogger)
app.use(requestTime)

app.use("/", IndexRouter)

// app.get("/", (req, res)=>{
//   let responseText = "Home Page <br/>"
//   console.log(`Requested at: ${req.requestTime}`)
//   res.send(responseText)
// })

app.get("/dashboard", (req, res)=>{
  res.render("index", {
    title: "Dashboard"
  })
})

app.post("/", (req,res)=>{
  res.send("Got a post request")
})

app.put("/user", (req, res)=>{
  res.send("PUT request")
})

app.delete("/user", (req, res)=>{
  res.send("Delete request")
})

app.listen(5000, ()=>{
  console.log("Listening on port 5000")
});
