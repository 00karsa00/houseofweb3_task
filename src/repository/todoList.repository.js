import todoList from "../models/todoList.js";


export const insertTodoRep = (item) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await todoList.create(item);
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

export const getAllTodoRep = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let filter = {}
            filter.userId = data.userId 
            filter.isDelete = false;      
            let result = await todoList.find(filter);
            console.log(result)
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

export const getTodoRep = (item) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await todoList.findOne(item);
            console.log(result)
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

export const updateStatusRep = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await todoList.updateOne(data.filter,data.updateData);
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

