var getUser = (id,callback) => {
  var user = {
    id:id,
    name:'Aditya'
  };
  setTimeout(()=>{
    callback(user);
  },3000)
}

getUser(5,(userObj)=>{
  console.log(userObj)
})
