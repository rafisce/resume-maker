import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import { Form } from "react-bootstrap";
import MessageBox from "../components/MessageBox";
import { useNavigate } from "react-router-dom";

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [matching, setMatching] = useState(true);
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      dispatch(register(fname, lname, email, password));
    } else {
      setMatching(false);
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate("/signin");
    }
  }, [matching, navigate, userInfo]);
  return (
    <div style={{ padding: "10rem" }}>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <Form className="log-form" onSubmit={submitHandler}>
        {!matching ? (
          <MessageBox variant="danger">סיסמאות לא תואמות</MessageBox>
        ) : null}
        <label htmlFor="firstname">שם פרטי</label>
        <input
          required
          type="text"
          placeholder="הכנס שם פרטי"
          id="firstname"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastname">שם משפחה</label>
        <input
          required
          type="text"
          placeholder="הכנס שם משפחה"
          id="lastname"
          onChange={(e) => setLastName(e.target.value)}
        />
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
          onChange={(e) => setPassword(e.target.value) + setMatching(true)}
        />

        <label htmlFor="password">אישור סיסמה</label>
        <input
          required
          type="password"
          placeholder="אשר סיסמה"
          id="passwordConfirm"
          onChange={(e) =>
            setPasswordConfirm(e.target.value) + setMatching(true)
          }
        />

        <button type="submit">הירשם</button>
      </Form>
    </div>
  );
};

export default RegisterScreen;
