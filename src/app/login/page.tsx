function Login() {
  return (
    <div className="container mb-5">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-10 col-md-6 col-sm-9 col-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image">
                  <div className="p-5 h-100 d-flex align-items-center">
                    <div className="text-light w-100 text-center">
                      <h6 className="small">Nice to see u again</h6>
                      <h2 className="text-uppercase">Welcome Back</h2>
                      <p className="p-5">Sign in to continue to your account</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Login Account</h1>
                    </div>
                    <form
                      className="user"
                      action=""
                      method="post"
                    >
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="email"
                          name="email"
                          value=""
                          placeholder="Enter Email Address"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="password"
                          name="password"
                          placeholder="Password"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="rememberMe"
                            name="rememberMe"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="rememberMe"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>

                      <input
                        type="submit"
                        id="loginButton"
                        name="submit"
                        value="Login"
                        className="btn btn-primary btn-user btn-block"
                      />
                    </form>
                    <hr />
                    <div className="text-center">
                      <a
                        className="small lead text-reset"
                        href="{{ route('password.request') }}"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

);
}

export default Login;
