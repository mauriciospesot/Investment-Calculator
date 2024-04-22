import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Table from "./components/Table.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(event) {
    setUserInput((prevUserInput) => {
      console.log(prevUserInput);
      return {
        ...prevUserInput,
        [event.target.name]: +event.target.value,
      };
    });
  }

  return (
    <>
      <Header />
      <Form input={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero</p>
      )}
      {inputIsValid && <Table input={userInput} />}
    </>
  );
}

export default App;
