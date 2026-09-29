
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const mongoose = require('mongoose');

const mongodbConfig= ()=> {
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vlxcwao.mongodb.net/test?appName=Cluster0`)
  .then(() => console.log('Connected!'));

}
module.exports=mongodbConfig