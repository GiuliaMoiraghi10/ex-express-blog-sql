console.log('express-blog-api-crud')

// Import
const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
// const port = 5173

// Router
const postsRouter = require('./routers/postsRouter.js')
const characterRouter = require('./routers/characterRouter.js');
const errorsHandler = require('./middlewares/errorsHandler.js')
const notFound = require('./middlewares/notFound.js')

// Middleware
app.use(cors());
app.use(express.static('public'))

//aggiungo "codice" per far funzionare la lettura del body
app.use(express.json())

// Route
app.get('/', (req, res) => {
    res.send('Prima porta')
    //aggiungo console.log per poter visualizzare il body
    console.log(req.body)
})

app.use('/posts', postsRouter);
app.use('/characters', characterRouter);

// gestione errore
app.use(errorsHandler)
app.use(notFound)

app.listen(port, () => {
    console.log(`Server listenig on port ${port}`)
})