import { Component, useState } from "react";
import Button from "react-bootstrap/esm/Button";

//class component
class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }

  //ComponentDidMount:- how we can make an API call in classBase component

  componentDidMount() {
    //Make an API call
    //once you have the result: change the isLoading state to false
    // this.setState({
    //   isLoading: false,
    // });
    console.log("Component mounted");
  }

  componentWillUnmount() {
    //we can do cleanUp type of a thing
    console.log("component is about to be un mounted");
  }

  onInputChange = (e) => {
    this.setState({ searchValue: e.target.value.toLowerCase() });
    // we want to do somthing every time a searchValue is changed
  };
  render() {
    return (
      <div>
        <input
          value={this.state.searchValue}
          onChange={this.onInputChange}
          type="text"
          placeholder="movieName"
        />
        <Button
          onClick={() => this.props.onSearchResults(this.state.searchValue)}
          variant="dark"
          className="m-4"
        >
          Search Results
        </Button>
      </div>
    );
  }
}

// function SearchInput(props) {
//   const [searchValue, setSearchValue] = useState("");

//   function onInputChange(e) {
//     setSearchValue(e.target.value.toLowerCase());
//     // we want to do somthing every time a searchValue is changed
//   }
//   return (
//     <div>
//       <input
//         value={searchValue}
//         onChange={onInputChange}
//         type="text"
//         placeholder="movieName"
//       />
//       <Button
//         onClick={() => props.onSearchResults(searchValue)}
//         variant="dark"
//         className="m-4"
//       >
//         Search Results
//       </Button>
//     </div>
//   );
// }
export default SearchInput;
