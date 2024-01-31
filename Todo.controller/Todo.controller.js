const TodoModel = require('../Todo.model/Todo.model');

// יצירת משימה (create)
async function create(newTask) { 
return await TodoModel.create(newTask)
console.log(newTask);
}
//קבלת כל המשימות (read)
async function read() {
    return await TodoModel.find({})   
 }

//עידכון משימה (update)
async function update({id,data}) {
    return await TodoModel.findByIdAndUpdate({_id:id},{$set:data})
 }

//מחיקת משימה (delete)
async function del(id) { 
return await TodoModel.findByIdAndDelete({_id:id})
}

//מחיקת כל המשימות 
async function deletAll() { 
return await TodoModel.deleteMany()
}

//עידכון כל המשימות לבוצע או לא בוצע
async function updateAll(bool) { 
return await TodoModel.updateMany({},{$set:{isDone:bool}})
}


module.exports = { create, read,update,del,deletAll,updateAll };