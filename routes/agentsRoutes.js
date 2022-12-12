const agentController=require('../controllers/agentController');
const postagentOps = {
    // schema: {
    //   response: {
    //     201: item,
    //   },
    // },
    handler: agentController.addAgent,
  };
const agentRoutes=(fastify,option,done)=>{
    fastify.post("/addagent",postagentOps);


done();
}

module.exports=agentRoutes;