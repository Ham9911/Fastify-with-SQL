const db = require("../services/dataServices");
const addDataModel = (id, name, age) => {
  const sqlInsert = "insert into table1 (id,name,age) values (?,?,?);";
  db.query(sqlInsert, [id, name, age], (err, result) => {
    console.log(err);
    console.log(result);
  });
};
const delModel=(id)=>{
  console.log(id);
  const sqlDel = `delete from table1 where id=${id}`;
  db.query(sqlDel,(err,result)=>{
      console.log(err);
      console.log(result);
  })
}
const editDataModel=(editObj,updId)=>{
  let sqlquery="update table1 set ";
  let sqlqueryUpd="";
  Object.keys(editObj).map((i)=>{
  if(editObj[i])
  sqlqueryUpd+= i +" = "+`'${editObj[i]}'`+" "
  })
  sqlquery+= sqlqueryUpd + "where id = "+ updId; 
  console.log("sql"+sqlquery)
  db.query(sqlquery,(err,result)=>{
      console.log(err);
      console.log(result);
  })


}


const fetchALLModel = () => {
  new Promise(function (resolve, reject) {
    const sqlFetch = "select * from table1";
    db.query(sqlFetch, (err, result) => {
      console.log("fetch Model");
      console.log(err);
      console.log(result);
      resolve(result);
    });
  });
};
module.exports = { addDataModel, fetchALLModel,delModel,editDataModel };
