import { useState } from 'react';
import { Link } from 'react-router-dom';
import loginReg from '../assets/loginreg.png';
import Inputbox from '../components/Inputbox';
import '../styles/Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div className="signin-container">
        <div className="wrapper-img">
          <img className="img-reg" src={loginReg} alt="Loomyl" />
        </div>
        <div className="wrapper">
          <form>
            <h1 className="title-create">Create Account</h1>
            <span className="desc">Follow the instructions to make it easier to register and you will be able to explore mom journey.</span>
            <Inputbox type="username" placeholder="Username" icon="bx bxs-user" value={username} onChange={handleUsernameChange} />
            <Inputbox type="email" placeholder="Email" icon="bx bxs-envelope" value={email} onChange={handleEmailChange} />
            <Inputbox type="password" placeholder="Password" icon="bx bxs-lock-alt" value={password} onChange={handlePasswordChange} />
            <button type="submit" className="btn">
              Create Account
            </button>

            <div className="register-link">
              <p>
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
