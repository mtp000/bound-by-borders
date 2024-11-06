

export default function FailedOjective({ send }) {
  return (
    <div>
        <h1> You have failed the game objective. Restart to try again. </h1>
        <button onClick={() => send({type: "RESTART"})}>Restart</button>    
    </div>
  )
}
