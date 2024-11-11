import React from 'react'

export default function Fluent({ canAffordUni, fluentInEnglish, send }) {
  // Define the qualification check function here
  const isQualified = canAffordUni && fluentInEnglish;

  // Event handler to trigger the transition to the next state
  const handleContinue = () => {
    if (isQualified) {
      console.log("Qualified, sending CONTINUE"); // Debug log
      send({type: "CONTINUE"});
    } else {
      console.log("Not qualified, CONTINUE not sent"); // Debug log
    }
  };

     // Determine the message based on the qualification criteria
     let message;
     if (isQualified) {
       message = "Congratulations! You meet all requirements for the student visa application.";
     } else if (fluentInEnglish) {
       message = "Congratulations! You are fluent in English but need more financial resources for university.";
     } else {
       message = "You need to meet both financial and English proficiency requirements.";
     }
  
  return (
    <>
        <h1>Fluent</h1>
        <p>{message}</p>

        <button onClick={() => send({type: "EARN_MONEY"})}>Get a job</button>

        {/** add function handle enabling button based on guard conditions */}
        <button onClick={handleContinue} disabled={!isQualified}>Continue</button>

        <button onClick={() => send({ type: "RESTART" })}>Considering the illegal route</button>
    </>
  )
}
