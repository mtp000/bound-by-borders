

export default function Desert({ send }) {
  return (
    <div>
        <h1>Desert</h1>
        <p> You&#39;ve been traveling for weeks. You&#39;ve reached the desert of Mexico. Water and food is running low. The hot, dry heat is making it hard to continue.</p>
        <button onClick={() => send({type: "CONTINUE"})}>Power through</button>
        <button onClick={() => send({ type: "RESTART" })}>Rethinking illegal immigration</button>
    </div>
  )
}
