import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userSignIn } from "../../api/Auth";
function Auth() {
  //whether i am coming from login route or signup
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname.split("/")[1] === "login";
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const updateFormData = (e) => {
    const id = e.target.id;

    if (id === "password") {
      setPassword(e.target.value);
    } else if (id === "userId") {
      setUserId(e.target.value);
    }
  };
  const onLogin = async (e) => {
    e.preventDefault();
    const data = { userId, password };
    try {
      const signInResponce = await userSignIn(data);
      console.log(signInResponce);
      const statusCode = signInResponce.status;

      if (statusCode === 400) {
        const responseBody = await signInResponce.json();
        console.log(responseBody);
        //i am doing this bcz i dont have proper responce
        const tokenId = 12345;
        const email = "himansusahu11";
        const userTypes = "ADMIN";
        const name = "Himansu";
        // const { name, userId, email, userStatus, accessToken, userTypes } =
        //   responseBody;

        // localStorage.setItem("name", name);
        // localStorage.setItem("userId", userId);
        // localStorage.setItem("email", email);
        // localStorage.setItem("userStatus", userStatus);
        // localStorage.setItem("userTypes", userTypes);
        // localStorage.setItem("token", accessToken);
        localStorage.setItem("token", tokenId);
        localStorage.setItem("email", email);
        localStorage.setItem("name", name);
        localStorage.setItem("userTypes", userTypes);
        // window.location.href = "/";
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-dark vh-100 d-flex justify-content-center align-items-center">
      <div style={{ width: "50rem" }} className="card p-5">
        <h4>Log In</h4>
        <form onSubmit={onLogin}>
          <div className="input-group">
            <input
              onChange={updateFormData}
              value={userId}
              className="form-control m-1"
              id="userId"
              type="text"
              placeholder="userId"
            />
          </div>
          <div className="input-group">
            <input
              onChange={updateFormData}
              value={password}
              className="form-control m-1"
              id="password"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="input-group">
            <input
              className="btn btn-info form-control m-1"
              type="submit"
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
