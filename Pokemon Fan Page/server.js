const express = require('express');
const sql = require('mssql');
const app = express();

// Middleware and other server setup

const config = {
    user: 'MyChessUser',
    password: '1234 ',
    server: '(localdb)\\mssqllocaldb',
    database: 'mywebsite',
};

const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

app.get('/users', async (req, res) => {
    try {
        const pool = await poolConnect;
        const result = await pool.request().query('SELECT * FROM Users');
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});