const express = require('express')
const app = express()

app.get('/ping', (req, res) => {
    res.status(200);
    res.json({'pong': true});
})

// adding process.env.PORT if a port exists in the heroku environment or whatever environment im running in, otherwise use port 5001
const port = process.env.PORT || 5001
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

