const db=require("../services/dataServices");
const {addDataModel,fetchALLModel,delModel,editDataModel}=require("../models/dataModel");
//one time sql connection 

const addData = (req, res) => {
  let { id, name, age } = req.body;
    addDataModel(id,name,age)
    res.send("data Inserted");
 
};

const addDataTable2 = (req, res) => {
  let { id, cls , fid,date } = req.body;
  console.log(cls)
  const sqlInsert = "insert into table2 (id,cls,fid,ad_date) values (?,?,?,?);";
  db.query(sqlInsert, [id, cls, fid, date], (err, result) => {
    console.log(err);
    console.log(result);
    res.send("data Inserted");
  });
};

const join=(req,res)=>{
// const sqlJoin="select * from table1 join table2 on table1.id=table2.fid"
const sqlJoin="select name,age,cls,table1.id from table1 join table2 on table1.id=table2.fid"
db.query(sqlJoin,(err,result)=>{
  console.log(err);
  console.log(result);
  res.send(result);
})
}

const delData=(req,res)=>{
let {id}=req.params;
delModel(id);
res.send("record del")
}

const fetchAllData=async (req,res)=>{
  const fetch= await fetchALLModel();
  console.log(fetch)
  console.log("fetch running")
  res.send(fetch);

}


const editData=(req,res)=>{
    let updId=req.params.id;
    let editObj=req.body;
    editDataModel(editObj,updId);
    res.send("updated");
}




module.exports = { addData,fetchAllData,delData,editData,addDataTable2,join };
