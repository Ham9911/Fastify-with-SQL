
const dataController=require('../controllers/dataController');
const {addData,addDataTable2,fetchAllData,delData,editData,join}=require('../controllers/dataController')

    // const postdataOps = {
    //     // schema: {
    //     //   response: {
    //     //     201: item,
    //     //   },
    //     // },
    //     handler: dataController.addData,
    //   };
    //   const postdataOps2 = {
    //     // schema: {
    //     //   response: {
    //     //     201: item,
    //     //   },
    //     // },
    //     handler: dataController.addDataTable2,
    //   };
    //   // const getAlldataOps = {
    //     // schema: {
    //     //   response: {
    //     //     200: {
    //     //         type:"array",
    //     //         items:{
    //     //             type:"object",
    //     //             properties:{
    //     //                 id:{type:"int"},
    //     //                 name:{type:"string"},
    //     //                 age:{type:"int"},

    //     //             }    

    //     //         }
    //     //     }

    //     //   },
    //     // },
    //   //   handler: dataController.fetchAllData,
    //   // };
    //   const deldataOps = {
    //     // schema: {
    //     //   response: {
    //     //     201: item,
    //     //   },
    //     // },
    //     handler: dataController.delData,
    //   };
    //   const editDataOps = {
    //     // schema: {
    //     //   response: {
    //     //     201: item,
    //     //   },
    //     // },
    //     handler: dataController.editData,
    //   };
    //   const joinOps = {
    //     // schema: {
    //     //   response: {
    //     //     201: item,
    //     //   },
    //     // },
    //     handler: dataController.join,
    //   };
    
    
const dataRoutes=(fastify,option,done)=>{
  

    fastify.post("/add",addData);
    fastify.post("/add2",addDataTable2);
    fastify.put("/edit/:id",editData)
    fastify.get("/fetch",fetchAllData);
    fastify.delete("/del/:id",delData);
    fastify.get("/join",join);
   fastify.get("/",(req,res)=>{
    res.send("Welcome to fastify app")
   })

done();

}

module.exports=dataRoutes;