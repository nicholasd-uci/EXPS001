// THIS IS THE BEST WAY TO WRITE SERVER //
// install npm init -y ==== package.json
// install npm i express === lock-.json
// this is an express server //

// step 1
const express = require('express')

// step 2 - call express like a function
const app = express()

// You need to write each function() seperately. you will use .get === is an http verb
// you need to have a pattern inside of ()
app.get('/test', (req, res) => {
    // this will only fire in the terminal - if the URL reads "/test"
    console.log('')
})

app.get('./test', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


// app.get('/test', (req, res) => {
//     res.json({'name: John Doe'})
// })

// you would keep coding out each ('/...', ())
// app.get('/something', (req, res) => {
//     console.log('Hi')
// })


// step 3 - listen
app.listen(3000)


