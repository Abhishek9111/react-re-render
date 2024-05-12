import { useState } from "react";

function App() {
  const [name, updateName] = useState("Abhishek");
  function handleButtonClick() {
    updateName(Math.random());
  }
  return (
    <>
      <button onClick={handleButtonClick}>Click here</button>
      <Header title={name} />
      <Header title="My name is raman" />
    </>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;

// minimizing the rerenders for childerns of app

// import { useState } from "react";
// function App() {
//   return (
//     <>
//       <HeaderWithButton />
//       <Header title="My name is raman" />
//     </>
//   );
// }

// function HeaderWithButton() {
//   const [name, updateName] = useState("Abhishek");
//   function handleButtonClick() {
//     updateName(Math.random());
//   }
//   return (
//     <div>
//       <button onClick={handleButtonClick}>Click here</button>
//       <Header title={name} />
//     </div>
//   );
// }

// function Header({ title }) {
//   return <div>{title}</div>;
// }

// export default App;4

// memo

// import React, { memo } from "react";
// import { useState } from "react";

// function App() {
//   const [name, updateName] = useState("Abhishek");
//   function handleButtonClick() {
//     updateName(Math.random());
//   }
//   return (
//     <>
//       <button onClick={handleButtonClick}>Click here</button>
//       <Header title={name} />
//       <Header title="My name is raman" />
//       <Header title="My name is raman" /> <Header title="My name is raman" />
//       <Header title="My name is raman" />
//     </>
//   );
// }

// const Header = memo(function ({ title }) {
//   return <div>{title}</div>;
// });

// export default App;
// import { useState } from "react";
// import { memo } from "react";

// function App() {
//   const [firstTitle, setFirstTitle] = useState("my name is harkirat");

//   function changeTitle() {
//     setFirstTitle("My name is " + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={changeTitle}>Click me to change the title</button>
//       <Header title={firstTitle} />
//       <br />
//       <Header title="My name is raman" />
//       <Header title="My name is raman" />
//       <Header title="My name is raman" />
//       <Header title="My name is raman" />
//     </div>
//   );
// }

// const Header = memo(function ({ title }) {
//   return <div>{title}</div>;
// });

// export default App;

// KEYS

// import { useState } from "react";

// function App() {
//   const [name, updateName] = useState("Abhishek");
//   function handleButtonClick() {
//     updateName(Math.random());
//   }
//   return (
//     <>
//       <button onClick={handleButtonClick}>Click here</button>
//       <Header title={name} />
//       <Header title="My name is raman" />
//     </>
//   );
// }

// function Header({ title }) {
//   return <div>{title}</div>;
// }

// export default App;
