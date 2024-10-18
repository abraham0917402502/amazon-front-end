import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Pages/Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { ClipLoader } from "react-spinners";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Type } from "../Utility/action.type";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  const [Loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  const navigate = useNavigate();

  const navStateData = useLocation();
  // console.log(navStateData);
  // console.log(password,email)
  // console.log(user);
  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    if (e.target.name == "signin") {
      // firebase auth
      setLoading({ ...Loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...Loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...Loading, signIn: false });
        });
    } else {
      setLoading({ ...Loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...Loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...Loading, signUp: false });
        });
    }
  };
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
        <img
          src="https://banner2.cleanpng.com/20190617/uxb/kisspng-logo-amazon-com-vector-graphics-portable-network-g-1713886444854.webp"
          alt=""
        />
      </Link>
      {/* form */}
      <div className={classes.login__container}>
        <h1>Sign In</h1>

        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type=" email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password">password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type=" password"
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signin"
            onClick={authHandler}
            className={classes.login__signInButton}
          >
            {Loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing in you agree to the AMAZON FAKE CLONE condition of use &
          sale. please see our privacy Notice, our cookies and our
          Interest-Based Ads Notice
        </p>
        {/* create account btn */}
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={classes.login__registerButton}
        >
          {Loading.signUp ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
