// import { useState, memo, useCallback } from "react";

// const expensiveFunction = (count) => {
//   // artificial delay (expensive computation)
//   for (let i = 0; i < 1000000000; i++) {}
//   return count * 3;
// };

// function Example() {
//   // ...

//   const incrementCount = () => setCount(count + 1);

//   const myCount = expensiveFunction(count);
//   return (
//     <div>
//       {/* ... */}
//       <h3>Count x 3: {myCount}</h3>
//       <hr />
//       <ChildComponent count={count} onClick={incrementCount} />
//     </div>
//   );
// }

// const ChildComponent = React.memo(function ChildComponent({ count, onClick }) {
//   // ...
// });

// const ChildComponent = memo((props) => {
//   console.log("child component is rendering");
//   return (
//     <div>
//       <h2>This is a child component.</h2>
//       <h4>Count: {props.count}</h4>
//       <button onClick={props.onIncrement}>Increment Counter</button>
//     </div>
//   );
// });

// function Example() {
//   const [input, setInput] = useState("");
//   const [count, setCount] = useState(0);
//   const incrementCount = useCallback(() => setCount(count + 1), [count]);

//   console.log("example component is rendring");
//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={() => setCount(count + 1)}>Increment counter</button>
//       <h3>Input text: {input}</h3>
//       <h3>Count: {count}</h3>
//       <hr />
//       <ChildComponent onIncrement={incrementCount} count={count} />
//     </div>
//   );
// }

// export default Example;

// const myCount = React.useMemo(() => {
//   return expensiveFunction(count);
// }, [count]);
