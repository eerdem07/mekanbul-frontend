import "./Register.css";

export default function Register() {
  const onSubmit = () => {};

  return (
    <div className="login-component">
      <h2 className="">Register</h2>
      <form onSubmit={onSubmit} className="form">
        <div>
          <label>Ad Soyad:</label>
          <input type="text" placeholder="" />
        </div>
        <div>
          <label>E-Posta:</label>
          <input type="text" placeholder="" />
        </div>
        <div>
          <label>Şifre:</label>
          <input type="password" placeholder="" />
        </div>
        <div>
          <Link to="/login" element={<Login />}>
            Giriş Yap
          </Link>
          <Link to="/register" element={<Register />}>
            Kayıt Ol
          </Link>
        </div>
      </form>
    </div>
  );
}
