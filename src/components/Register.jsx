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
          <button>Giriş Yap</button>
          <button>Kayıt Ol</button>
        </div>
      </form>
    </div>
  );
}
