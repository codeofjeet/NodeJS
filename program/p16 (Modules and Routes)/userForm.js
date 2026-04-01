function userForm(req, resp){
    resp.write(`
         <form action='/submit' method='post'>
        <input type='text' placeholder="Enter user name" name='name' /><br/><br/>
        <input type='password' placeholder="Enter password" name='password' /><br/><br/>
        <button>Submit</button>
        </form>
        `)
}

module.exports=userForm;