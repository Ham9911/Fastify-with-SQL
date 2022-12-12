const db=require("../services/dataServices")
const addAgent = (req, res) => {
    let { agent_code, agent_name, working_area,commission,phone_no,country } = req.body;
    console.log(agent_code, agent_name, working_area,commission,phone_no,country);
    const sqlInsert = "insert into agents (agent_code, agent_name, working_area,commission,phone_no,country) values (?,?,?,?,?,?);";
    db.query(sqlInsert, [agent_code, agent_name, working_area,commission,phone_no,country], (err, result) => {
      console.log(err);
      console.log(result);
      res.send("data Inserted");
    });
  };

  module.exports={addAgent}