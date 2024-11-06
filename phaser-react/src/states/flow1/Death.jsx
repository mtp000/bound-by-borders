

export default function Death({ send }) {
  return (
    <div>
        <h1>It's been a lonng journey through the desert. You ran out of water. You have died from heat exhaustion.</h1>
        <button onClick={() => send({type: "CONTINUE"})}>Continue</button>
    </div>
  )
}
