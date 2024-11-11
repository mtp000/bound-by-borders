import React from 'react'

export default function Ineligible({ visaType, send }) {

    // Determine rejection message based on visaType
    let message;

    switch (visaType) {
      case 'DIVERSITY':
        message = 'Due to high levels of immigration from your country to the United States, the country is not eligible for the Diversity Visa Program. We encourage you to explore other available visa options.';
        break;
      case 'FIANCE':
        message = 'You do not qualify for a fiancé visa because you and your U.S. citizen partner have not met in person within the last two years, or you do not meet other specific eligibility criteria. Please explore other visa options.';
        break;
      case 'FAMILY':
        message = 'You do not qualify for a family-sponsored visa because you do not have an eligible family member who is a U.S. citizen or lawful permanent resident, or you may not meet the specific relationship requirements. Please review the criteria for other visa options.';
        break;
      default:
        message = 'You are currently ineligible for any visa type. Please check your options.';
        break;
    }


  return (
    <>
        <h1>Ineligible</h1>
        <p>{message}</p> {/* Display the message based on the visaType */}
        <button onClick={() => send({type: "CHOOSE_OTHER_VISA"})}>Choose another visa</button>
       
    </>
  )
}
