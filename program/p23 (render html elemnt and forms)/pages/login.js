export default function login(){
    return `
    <form action='/submit' method='post'>
        <input type='text' placeholder='Enter user name' /> <br/><br/>
        <input type='password' placeholder='Enter user password' /> <br/><br/>
        <button>Login</button>
    </form>
    `
}
