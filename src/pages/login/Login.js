import { React, useEffect, useState } from 'react'
import isEmpty from "validator/lib/isEmpty"
import "./Login.css"
import useAuth from '../../hooks/useAuth';
import axiosClient from '../../api/axiosClient';
import { Link, useNavigate, useLocation } from 'react-router-dom';


function Login() {
  const LOGIN_URL = "/users/login";
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { setAuth, persist, setPersist } = useAuth();
  
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [validationMsg, setValidationMsg] = useState('')

  const onChangeUsername = (e) => {
    const user = e.target.value
    setUser(user)
  }
  const onChangePassword = (e) => {
    const pwd = e.target.value
    setPwd(pwd)
  }

  const validateAll = () => {
    const msg = {}
    if (isEmpty(user)) {
      msg.user = "Không được bỏ trống ô này"
    }
    if (isEmpty(pwd)) {
      msg.pwd = "Không được bỏ trống ô này"
    }
    setValidationMsg(msg)
    if (Object.keys(msg).length > 0) return false
    return true
  }

  const togglePersist = () => {
    setPersist(prev => !prev)
  }
  useEffect(() => {
    localStorage.setItem("persist", persist);

  }, [persist]);

  const onSubmitLogin = async () => {
    const isValid = validateAll();
    if (!isValid) return
    try {
      const response = await axiosClient.post(LOGIN_URL, JSON.stringify(
        { username: user, password: pwd }
      ), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      console.log(response)
      const accessToken = response?.data?.data?.jwtToken
      const roles = [1984];

      if (response?.data?.success) {
        setAuth({ user, pwd, roles, accessToken })
        navigate(from, { replace: true });
      }

      // setAuth({ user, pwd, roles, accessToken });
      // // navigate("/cua-hang")
      // navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        alert('No Server Response');
      } else if (err.response?.status === 400) {
        alert('Missing Username or Password');
      } else if (err.response?.status === 401) {
        alert('Unauthorized');
      } else {
        alert('Login Failed');
      }
    }

  }
  return (
    <div className='form-login absolute z-20'>
      <div className='box-login '>
        <div className='col d-flex justify-content-center mb-3'><img src={require("../../assets/images/logo/fmp.png")} alt="" />
        </div>
        <h3 className='font-bold'>ĐĂNG NHẬP</h3>
        <form>
          <div className="form-group mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Tên đăng nhập hoặc số điện thoại"
              name='username'
              id='username'
              autoComplete='username'
              onChange={onChangeUsername}
            />
            <p className='error-validate'>{validationMsg.user}</p>
          </div>
          <div className="form-group mt-4">

            <input
              type="password"
              className="form-control"
              id="password"
              autoComplete='current-password'
              placeholder="Mật khẩu"
              onChange={onChangePassword} />

            <p className='error-validate'>{validationMsg.pwd}</p>
          </div>
          <div className='mt-3'>
            <a href='/' className='none-decoration'>Quên mật khẩu ?</a>
          </div>
          <button
            type="button"
            className="btn btn-login  btn-success mt-3"
            onClick={onSubmitLogin}
          >Đăng nhập kênh người bán</button>

          <div className='mt-3'>
            <p >Chưa có tài khoản HOA3D ? <a href='/dang-ky' className='none-decoration'>Tạo tài khoản</a></p>
          </div>
          {/* <div className='persistCheck'>
            <input type="checkbox"

              id="persist"
              onChange={togglePersist}
              checked={persist} />
            <label > nhớ tôi </label>
          </div> */}
        </form>
      </div>
    </div>
  )
}

export default Login