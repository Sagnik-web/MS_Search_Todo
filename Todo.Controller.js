const TODO = require("./Todo.Model")



exports.getAllTodo =async(req,res)=>{
    const todo = await TODO.find()
    res.status(200).json({
        success:true,
        todo
    })
}