
import useAuthentication from '../hooks/UseAuthentication'
import '../pages/styles/login.css'



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
    <div className='loginpage'>
      <article className='articleLogin'>
<form onSubmit={handleLogin} className='formlogin'>
      <h2 className='titlelogin'>Login</h2>
      <div className='formspaces' >
      <label htmlFor="email">Email</label>
      <input type="email" id='email' />
      <label htmlFor="password">Password</label>
      <input type="password" id='password' />
      </div>


      <button className='bottonlogin'>Login In</button>
    </form>
</article>
    </div>

  )
}

export default Login