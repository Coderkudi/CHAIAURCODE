import express from 'express';

const app = express();

app.get ('/', (req, res) => {
    res.send("Server is ready");


    // get a list of 5 jokes 
    
});app.get('/api/jokes', (req,res)=> {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'A joke',
            content: 'This is a 2nd joke'
        },
        {
            id: 3,
            title: 'A joke',
            content: 'This is a 3rd joke'
        },
        {
            id: 4,
            title: 'A joke',
            content: 'This is a 4th joke'
        },
        {
            id: 5,
            title: 'A joke',
            content: 'This is a 5th joke'
        },
    ];
    res.send(jokes);
});





const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Server at http://localhost:${port}`);
    
})
