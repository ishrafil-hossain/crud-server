const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


// middle ware 
app.use(cors())
app.use(express.json())

const users = [
    { id: 1, name: 'Nazrul', email: 'nazrul@gmail.com' },
    { id: 2, name: 'Sakib', email: 'sakib@gmail.com' },
    { id: 3, name: 'Arif', email: 'arif@gmail.com' }
]


app.get('/', (req, res) => {
    res.send('hello this is first server!!!')

})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
    // console.log(req.body)
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})