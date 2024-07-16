import { useRef, useState } from "react";

// export default function RefCounter() {
//   let ref = useRef(0);
//   console.log("Com rendered");
//   function handleClick() {
//     console.log(ref.current);
//     console.log(ref);
//     ref.current = ref.current + 1;
//     alert("you clicked : " + ref.current + " times ");
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default function Stopwatch() {
//   const [startTime, setStartTime] = useState(null);
//   const [now, setNow] = useState(null);

//   const intervalRef = useRef(null);

//   function handleStart() {
//     // Start counting.
//     setStartTime(Date.now());
//     setNow(Date.now());

//     intervalRef.current = setInterval(() => {
//       // Update the current time every 10ms.
//       setNow(Date.now());
//     }, 10);
//   }
//   function handleStop() {
//     clearInterval(intervalRef.current);
//   }
//   let secondsPassed = 0;
//   if (startTime != null && now != null) {
//     secondsPassed = (now - startTime) / 1000;
//   }

//   return (
//     <>
//       <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
//       <button onClick={handleStart}>Start</button>

//       <button onClick={handleStop}>Stop</button>
//     </>
//   );
// }

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return <button onClick={handleClick}>You clicked {count} times</button>;
// }

// export default function Counter() {
//   let countRef = useRef(0);

//   function handleClick() {
//     // This doesn't re-render the component!
//     countRef.current = countRef.current + 1;
//   }

//   return (
//     <button onClick={handleClick}>You clicked {countRef.current} times</button>
//   );
// }

// export default function Form() {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     console.log(inputRef.current);
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleClick}> Focus the input </button>
//     </div>
//   );
// }

export default function CatFriends() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <nav>
        <button onClick={handleScrollToFirstCat}>Tom</button>
        <button onClick={handleScrollToSecondCat}>Maru</button>
        <button onClick={handleScrollToThirdCat}>Jellylorum</button>
      </nav>
      <div>
        <ul>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"
              ref={firstCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
