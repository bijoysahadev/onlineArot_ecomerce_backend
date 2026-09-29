const  passewordRegex =(password)=> {
  
    


if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
  return true
}

}
module.exports=passewordRegex