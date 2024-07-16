import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

function UnAuthenticated() {
  const navigate = useNavigate();
  const onLoginRedirect = () => {
    navigate("/login");
  };
  return (
    <div className="bg-dark vh-100 flex-column d-flex justify-content-center align-items-center text-light">
      <h4>You must be logged in to access this route</h4>

      <Button className="p-3" onClick={onLoginRedirect} variant="light">
        Go to Login page
      </Button>
    </div>
  );
}

export default UnAuthenticated;
