

export default function FailedOjective({ send }) {
  return (
    <div>
        <h1>Failed Objective</h1>
        <p> You have failed the game objective. Restart to try again. </p>
        <button onClick={() => send({type: "RESTART"})}>Restart</button>    
    </div>
  )
}
