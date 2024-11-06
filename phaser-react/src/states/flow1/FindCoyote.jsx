

export default function FindCoyote({ send }) {
    return (
      <div>
        Find coyote.
        <button onClick={() => send({ type: "CONTINUE" })}>Ask a friend of a friend.</button>
        <button onClick={() => send({ type: "CONTINUE" })}>Go to street corner where coyotes are known to operate.</button>
        <button onClick={() => send({ type: "RESTART" })}>Rethinking illegal immigration.</button>
      </div>
    )
  }