import "./Login.css";
import Register from "./Register";
import { Link } from "react-router-dom";

export default function Login() {
  const onSubmit = () => {};

  return (
    <div className="login-component">
      <h2 className="">Login</h2>
      <form onSubmit={onSubmit} className="form">
        <div>
          <label>E-Posta:</label>
          <input type="text" placeholder="" />
        </div>
        <div>
          <label>Şifre:</label>
          <input type="password" placeholder="" />
        </div>
        <div>
          <Link to="/register" element={<Register />}>
            Kayıt Ol
          </Link>
          <Link to="/login" element={<Login />}>
            Giriş Yap
          </Link>
        </div>
      </form>
    </div>
  );
}
