import { userList } from "../model/usermodel.js";

export function handleUser(req, res){
    const userData = userList()
     res.render('users', {users:userData});
}