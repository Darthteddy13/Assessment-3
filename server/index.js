const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, postCompliment, getFortune,deleteFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.post(`/api/compliment`,postCompliment);
app.get(`/api/fortune`, getFortune);
app.delete(`api/fortune/:id`, deleteFortune);

app.listen(4000, () => console.log("Server running on 4000"));
