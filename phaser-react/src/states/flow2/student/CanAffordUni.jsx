import React from 'react'

export default function CanAffordUni({ canAffordUni, fluentInEnglish, send }) {

  // Define the qualification check function here
  const isQualified = canAffordUni && fluentInEnglish;

  // Event handler to trigger the transition to the next state
  const handleContinue = () => {
    if (isQualified) {
      send({type: "LEARN_ENGLISH"});
    }
  };

  return (
    <div>
      <h1>Can Afford Uni</h1>
      <h3>Can Afford Uni: {canAffordUni ? "Yes" : "No"}</h3>
      <h3>Fluent in English: {fluentInEnglish ? "Yes" : "No"}</h3>

        <button onClick={() => send({type: "LEARN_ENGLISH"})}>Learn English</button>
        {/* add function handle enabling button based on guard conditions*/}
        <button onClick={handleContinue} disabled={!isQualified}>Continue</button>
        
    </div>
  );
}

