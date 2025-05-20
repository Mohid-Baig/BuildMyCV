import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../Components/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((user) => user.email === email);

    if (!user) {
      setError("No account found with this email");
      return;
    }

    if (user.password !== password) {
      setError("Incorrect password");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    // Redirect to dashboard or home
    navigate("/form");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>
            Welcome to <span className="logo-primary">Build</span>
            <span className="logo-secondary">MyCV</span>
          </h2>
          <p>Sign in to access your resume builder</p>
          {location.state?.registrationSuccess && (
            <div className="auth-success">
              Registration successful! Please log in.
            </div>
          )}
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
            {/* <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link> */}
          </div>

          <button type="submit" className="auth-button">
            Sign In
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="auth-link">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
