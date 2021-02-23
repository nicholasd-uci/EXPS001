// this lets us run our server without having to reopen and restart

// step 1
const express = require('express')
const path = require('path')

// step 2 - call express like a function
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


//                     `req/res, port, & localhost`
// 
// res: res stands for "response"
// req: req stands for "request"
// port: Connects free source-code to web browser -> e.g. "port(3000)"
// localhost:3000- Default port that runs on your computer  


// ** this would go before app.listen(3000) ** //

// You need to write each function() seperately. you will use .get === is an http verb
// you need to have a pattern inside of ()
// app.get('/test', (req, res) => {
    // this will only fire in the terminal - if the URL reads "/test"
//     console.log('')
// })

// app.get('./test', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// app.get('/test', (req, res) => {
//     res.json({'name: John Doe'})
// })

// you would keep coding out each ('/...', ())
// app.get('/something', (req, res) => {
//     console.log('Hi')
// })


