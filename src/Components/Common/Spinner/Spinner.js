import Spinner from "react-bootstrap/Spinner";
import { Component } from "react";
//ClassBase component
class Spinner extends Component {
  render() {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
}
// function Spinner() {
//   return (
//     <Spinner animation="border" role="status">
//       <span className="visually-hidden">Loading...</span>
//     </Spinner>
//   );
// }

export default Spinner;
