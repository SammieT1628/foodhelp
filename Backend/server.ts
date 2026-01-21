import  express = require("express");
import connectDB from './db'
const cors = require('cors');
require('dotenv').config()

const port = process.env.PORT || 4000
const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.get('/message', (req: any, res: any) => {
    res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
    console.log(`Server is running on port 8000.`);
  }); 