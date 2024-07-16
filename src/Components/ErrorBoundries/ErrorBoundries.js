import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorFallback/ErrorFallback";
const user = {
  name: "Himansu sahu",
  //   personalID: {
  //     email: "himansu@gmail.com",
  //   },
};
const logError = (err) => {
  console.error(err);
};
function Main() {
  return (
    <ErrorBoundary onError={logError} FallbackComponent={ErrorFallback}>
      <UserProfile user={user} />
    </ErrorBoundary>
  );
}

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.personalID.email}</p>
    </div>
  );
};
export default Main;
