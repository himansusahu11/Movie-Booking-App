import { useNavigate } from "react-router-dom";
import Bookings from "../Pages/Bookings/Bookings";
import { useEffect, useState } from "react";
import UnAuthenticated from "../Pages/UnAuthenticated/UnAuthenticated";
import UnAuthorised from "../Pages/UnAuthorised/UnAuthorised";
import { isUserLoggedIn } from "../utils/isLoggedInOrNot";

function AuthHoc(props) {
  console.log(props.allowedRoles);
  const navigate = useNavigate();

  const loggedInUserType = localStorage.getItem("userTypes");

  const [loadingContent, setLoadingContent] = useState(false);

  const isLoggedIn = isUserLoggedIn();
  //checking Authorisition
  const isAuthorised = props.allowedRoles.includes(loggedInUserType);

  //   useEffect(() => {
  //     if (!isLoggedIn) {
  //     //   navigate("/login");

  //     } else {
  //       setLoadingContent(true);
  //     }
  //   }, []);

  if (!isLoggedIn) {
    return <UnAuthenticated />;
  }

  if (!isAuthorised) {
    return <UnAuthorised />;
  }

  return <div>{props.children}</div>;
}

export default AuthHoc;
