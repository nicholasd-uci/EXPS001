// step 1
const express = require('express')
const path = require('path')

// step 2 - call 'express' like a function
const app = express()

app.get('/food', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/food.html'))
})

app.get('/games', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/games.html'))
})

app.get('/movies', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/movies.html'))
})

app.get('/songs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/songs.html'))
})

app.post('/something', (req, res) => {
    res.send('POST')
})

// step 3 - listen
app.listen(3000)
