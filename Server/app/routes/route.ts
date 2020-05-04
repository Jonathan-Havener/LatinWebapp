module.exports = (app) => {
    const userControlls = require ('../controllers/userController.ts')
    
    app.get('/', (req,res)=> {
        res.header('Access-Control-Allow-Origin', '*');
        res.send({"message": "You've reached the entry point"})
    })
    app.get('/getUsers', userControlls.getUsers)
    app.post('/findUserByUsername', userControlls.findUserByUsername)
    app.post('/createUser', userControlls.createUser)
}