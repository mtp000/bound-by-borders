import React from 'react'

export default function CanAffordUni({ canAffordUni, fluentInEnglish, send }) {

  // Define the qualification check function here
  const isQualified = canAffordUni && fluentInEnglish;

  // Event handler to trigger the transition to the next state
  const handleContinue = () => {
    if (isQualified) {
      send({type: "CONTINUE"});
    }
  };

   // Determine the message based on the qualification criteria
   let message;
   if (isQualified) {
     message = "Congratulations! You meet all requirements for the student visa application.";
   } else if (canAffordUni) {
     message = "Congratulations! You can afford university but need to improve your English.";
   } else {
     message = "You need to meet both financial and English proficiency requirements.";
   }

  return (
    <div>

      <h1>You Can Afford University</h1>
      <p>{message}</p>

        <button onClick={() => send({type: "LEARN_ENGLISH"})}>Learn English</button>
        {/* add function handle enabling button based on guard conditions*/}
        <button onClick={handleContinue} disabled={!isQualified}>Continue</button>

        <button onClick={() => send({ type: "RESTART" })}>Considering the illegal route</button>
        
    </div>
  );
}

