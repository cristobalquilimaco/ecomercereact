
import useAuthentication from '../hooks/UseAuthentication'



const Login = () => {

const { loginUser } = useAuthentication()


const handleLogin = e => {
e.preventDefault()
const email = e.target.email.value
const password = e.target.password.value

const data = {email, password};
loginUser(data)


}


  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <div>
      <label htmlFor="email">Email</label>
      <input type="email" id='email' />
      </div>

      <div>
      <label htmlFor="password">Password</label>
      <input type="password" id='password' />
      </div>
      <button>Login In</button>
    </form>
  )
}

export default Login