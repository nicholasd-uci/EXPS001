// step 1
const express = require('express')
const { join } = require('path')

// step 2 - call 'express' like a function
const app = express()

app.get('/food', (req, res) => {
    res.sendFile(join(__dirname, 'public/foods.html'))
})

app.get('/games', (req, res) => {
    res.sendFile(join(__dirname, 'public/games.html'))
})

app.get('/movies', (req, res) => {
    res.sendFile(join(__dirname, 'public/movies.html'))
})

app.get('/songs', (req, res) => {
    res.sendFile(join(__dirname, 'public/songs.html'))
})

app.post('/newContent', (req, res) => {
    res.send('POSTED')
})

// step 3 - listen
app.listen(3000)
