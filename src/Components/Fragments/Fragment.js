import React from "react";

function Fragment() {
  return <Table />;
}

function TableData() {
  return (
    //use this
    // <React.Fragment>
    //   <td>Eat</td>
    //   <td>Learn</td>
    //   <td>Code</td>
    // </React.Fragment>
    //we can do like this also this is a shortCut
    <>
      <td>Eat</td>
      <td>Learn</td>
      <td>Code</td>
    </>
    
    //this is wrong

    // <div>
    //   <td>Eat</td>
    //   <td>Learn</td>
    //   <td>Code</td>
    // </div>
  );
}

function Table() {
  return (
    <table>
      <tr>
        <TableData />
      </tr>
    </table>
  );
}
export default Fragment;

/*
The main difference between the two is that 
"Fragment" clears out all extra divs from a DOM tree while "Div" adds a div to the DOM tree.
*/
