import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('server is ready')
// })

//Get a list of 5 Cities 
app.get('/cities', (req, res) => {
    const cities = [
        {
            id: 1,
            city: 'Ballia',
            state: 'Uttar Pradesh',
            country: 'India'
        },
        {
            id: 2,
            city: 'Delhi',
            state: 'Delhi',
            country: 'India'
        },
        {
            id: 3,
            city: 'Haldwani',
            state: 'Uttrakhand',
            country: 'India'
        },
        {
            id: 4,
            city: 'Chapra',
            state: 'Bihar',
            country: 'India'
        },
        {
            id: 5,
            city: 'Chandigarh',
            state: 'Punjab',
            country: 'India'
        },
    ]
    res.send(cities)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
})