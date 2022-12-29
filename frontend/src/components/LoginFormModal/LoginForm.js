import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/sessionSlice";

export default function LoginFormPage() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => {
          return <li key={idx}>{error}</li>;
        })}
      </ul>
      <div className="credentials">
        <label>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(event) => setCredential(event.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="pasword"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}
