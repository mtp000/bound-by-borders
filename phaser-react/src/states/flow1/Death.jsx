

export default function Death({ send }) {
  return (
    <div>
        <h1>Death</h1>
          <p>It&#39;s been a long journey through the desert. You ran out of water. You have died from heat exhaustion.</p>
        <button onClick={() => send({type: "CONTINUE"})}>Continue</button>
    </div>
  )
}
