import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoblackLoomyl from '../assets/logo_black_loomyl.png';
import loginReg from '../assets/loginreg.png';
import Inputbox from '../components/Inputbox';
import '../styles/Login.css';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="signin-container">
      <div className="wrapper">
        <form>
          <div className="wrap-logo-title">
            <img src={logoblackLoomyl} alt="logo" className="logo" />
            <h1 className="title-log">Hello, Momzie!</h1>
          </div>
          <span className="desc">Enter to continue and explore your pregnancy phase.</span>
          <Inputbox type="email" placeholder="Email" icon="bx bxs-envelope" value={email} onChange={handleEmailChange} />
          <Inputbox type="password" placeholder="Password" icon="bx bxs-lock-alt" value={password} onChange={handlePasswordChange} />
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <div className="wrap-btn">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
          <div className="register-link">
            <p>
              Dont have an account? <Link to="/register">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
      <div className="wrapper-img">
        <img className="img-log" src={loginReg} alt="Loomyl" />
      </div>
    </div>
  );
}

export default Signin;
