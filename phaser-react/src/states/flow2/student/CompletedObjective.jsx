import React from 'react'

export default function CompletedObjective({ send }) {
  return (
    <>
      <h1>Completed Objective</h1>
      <p>
        Congratulations on successfuly making it to the US! <br/><br/>
        As a student visa holder in the U.S., you are permitted to:
        <ul>
          <li>Study at an accredited U.S. institution</li>
          <li>Work part-time on campus (up to 20 hours per week during the semester, full-time during breaks)</li>  
          <li>Travel in and out of the U.S. with proper documentation</li>
        </ul> 

        What Student Visa Holders Are Not Allowed to Do:
        <ul>
          <li>Work off-campus</li>
          <li>Stay in the U.S. after the visa expires without proper extension or applying for work authorization</li>
        </ul>
      </p>
    </>
  )
}
