const app =require('./app')
const {PORT} = process.env

app.listen(4000, () => {
  console.log('Server started on port 4000');
});