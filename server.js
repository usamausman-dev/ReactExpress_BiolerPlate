const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
const path = require('path')
const cors = require("cors");


app.use(express.json())
app.use(cors(["localhost:3000", "localhost:5000"]))

app.use('/', express.static(path.join(__dirname, './client/build')))


app.get('/api/v1//dashboard', (req, res) => {
    res.send('here is your dashboard')
})

app.get('/api/v1//signup', (req, res) => {
    res.send('here is your signup')
})

app.get('/api/v1//login', (req, res) => {
    res.send('here is your login')
})


app.get('/api/v1//profile', (req, res) => {
    res.send('here is your profile')
})


app.post('/api/v1//profile', (req, res) => {
    res.send('profile created')
})
app.put('/api/v1//profile', (req, res) => {
    res.send('profile updated')
})
app.delete('/api/v1//profile', (req, res) => {
    res.send('profile deleted')
})


// app.get("/**", (req, res, next) => {
//     res.redirect("/")
// })


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})