const express = require('express');
const db = require('./config/db')
const cors = require('cors')

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

app.get("/api/gett", (req, res) => {
  try {
    db.query("SELECT * FROM FEATUREDTOURS", (err, result) => {
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

app.get("/api/getextra", (req, res) => {
  try {
    db.query("SELECT * FROM EXTRATOURS", (err, result) => {
      if (err) {
        res.status(500).json({
          status: 'failed',
          msg: err
        })
      } else {
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

app.get("/api/getextra/:id", (req, res) => {
  try {
    db.query("SELECT * FROM EXTRATOURS WHERE EXTRATOURSID = ?", req.params.id, (err, result) => {
      if (err) {
        res.status(500).json({
          status: 'failed',
          msg: err
        })
      } else {
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

app.get("/api/getJobs", (req, res) => {
  try {
    db.query("SELECT * FROM EMPLOYMENT", (error, result) => {
      if (error) {
        res.status(500).json({
          status: 'failed',
          msg: error
        })
      } else {
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

app.get("/api/getFeaturedImage/:id", (req, res) => {
  try {
    db.query("SELECT IMAGES FROM TOURS T, FEATUREDTOURS FT WHERE T.TOURSID = FT.TOURSID AND FT.FeaturedToursID = ?", req.params.id, (err, result) => {
      if (err) {
        res.status(500).json({
          status: 'failed',
          msg: err
        })
      } else {
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

app.post('/api/signup/:email', (req, res) => {
  try {
    db.query("INSERT INTO NEWSLETTER (email) VALUES (?)", req.params.email, (err, result) => {
      if (err) {
        res.status(500).json({
          status: 'failed',
          msg: err
        })
      } else {
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