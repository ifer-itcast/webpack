module.exports = function(app) {
    app.get('/api/user', (req, res) => {
        res.send({
            user: 'ifer',
            age: 18
        });
    });
};