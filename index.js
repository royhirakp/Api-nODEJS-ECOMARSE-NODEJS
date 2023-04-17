console.log(555)

const port = 4000;
const app = require('./app')

app.listen(port,()=>console.log('server running at '+port))