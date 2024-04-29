import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { login } from "../Login/loginSlicer";
//import { toast } from "react-toastify";
import './LoginStyle.css'
import { toast } from "react-toastify";

export const LoginPage = () => {

  const {  } = useSelector(state => state.logins);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const {username, password, onInputChange, onResetForm} = useForm({ username: '', password: '' });

  const handleLogin = () => {
    if (!username) return  toast.warning('Please enter a valid username');
    
    const lastPath = localStorage.getItem('lastPath') || '/';
    dispatch(login( username ));
    navigate(lastPath, { replace: true });
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100" >
    <div className="container-login2 login-container p-4">
      <h1 className="text-center mb-4">Login</h1>
      <form>
        <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="User Name"
              name="username"
              value={username}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
