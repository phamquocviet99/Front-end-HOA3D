import { React, useState } from 'react'
import isEmpty from "validator/lib/isEmpty"
import "./Login.css"


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validationMsg, setValidationMsg] = useState('')

  const onChangeUsername = (e) => {
    const username = e.target.value
    setUsername(username)
  }
  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }

  const validateAll = () => {
    const msg = {}
    if (isEmpty(username)) {
      msg.username = "Không được bỏ trống ô này"
    }
    if (isEmpty(password)) {
      msg.password = "Không được bỏ trống ô này"
    }
    setValidationMsg(msg)
    if (Object.keys(msg).length > 0) return false
    return true
  }
  const onSubmitLogin = () => {
    const isValid = validateAll();
    if (!isValid) return

    //call API

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
            <p className='error-validate'>{validationMsg.username}</p>
          </div>
          <div className="form-group mt-4">

            <input
              type="password"
              className="form-control"
              id="password"
              autoComplete='current-password'
              placeholder="Mật khẩu"
              onChange={onChangePassword} />

            <p className='error-validate'>{validationMsg.password}</p>
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
            <p >Chưa có tài khoản HOA3D ? <a href='/' className='none-decoration'>Tạo tài khoản</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login