const Login = () => {
  return (
    <div class="container login-form">
      <h4 class="form-header">Login</h4>
      <form>
        <div class="input-field">
          <label htmlFor="username">Username</label>
          <input type="text" />
        </div>
        <div class="input-field">
          <label htmlFor="Password">Password</label>
          <input type="Password" />
        </div>
        <button class="btn login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
