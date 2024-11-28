import "./Login.css";

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
          <button>Kayıt Ol</button>
          <button>Giriş Yap</button>
        </div>
      </form>
    </div>
  );
}
