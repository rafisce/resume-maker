import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../actions/userActions";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";

const SigninScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      navigate(`/dashboard/${userInfo._id}`);
    }
  }, [navigate, userInfo]);

  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <Form className="log-form" onSubmit={submitHandler}>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <label htmlFor="email">אימייל</label>
        <input
          required
          type="text"
          placeholder="הכנס אימייל"
          id="username"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">סיסמה</label>
        <input
          required
          type="password"
          placeholder="הכנס סיסמה"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">התחבר</button>
        <div>
          <span>לקוח חדש?</span>
          <Link to={`/register`}>צור חשבון</Link>
        </div>
      </Form>
    </div>
  );
};

export default SigninScreen;
