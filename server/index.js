const express = require('express');
const db = require('./config/db')
const cors = require('cors');

const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/get", (req, res) => {
  try {
    db.query("SELECT * FROM TOURS", (err, result) => {
      if (err) {
        res.status(500).json({
          status: 'failed',
          msg: err
        })
      }
      else {
        res.status(200).json({
          status: 'success',
          msg: result
        })
      }
    })
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      msg: error
    })
  }

})

app.get("/api/get/:id", (req, res) => {
  try {
    db.query("SELECT * FROM TOURS WHERE TOURSID = ?", req.params.id, (err, result) => {
      if (err) {
        res.status(500).json({
          status: 'failed',
          msg: err
        })
      }
      else {
        res.status(200).json({
          status: 'success',
          msg: result
        })
      }
    })
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      msg: error
    })
  }

})

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
})