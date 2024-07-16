import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

function UnAuthorised() {
  const navigate = useNavigate();
  const onLoginRedirect = () => {
    navigate("/login");
  };
  return (
    <div className="bg-dark vh-100 flex-column d-flex justify-content-center align-items-center text-light">
      <h4>
        OOPS! you don't have enough permissions to access this page, Login with
        required permission
      </h4>

      <Button className="p-3" onClick={onLoginRedirect} variant="light">
        Go to Login page
      </Button>
    </div>
  );
}

export default UnAuthorised;
