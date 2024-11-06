

export default function FindCoyote({ send }) {
    return (
      <div>
        <h1> Illegal Immigration </h1>
        <p> The terrain from Costa Rica to the US is dangerous. You need a coyote to guide you through the rainforests, deserts, and rivers and avoid the cartel operational zones. </p>
        
        <button onClick={() => send({ type: "CONTINUE" })}>Ask a friend of a friend.</button>
        <button onClick={() => send({ type: "CONTINUE" })}>Go to street corner where coyotes are known to operate.</button>
        <button onClick={() => send({ type: "RESTART" })}>Rethinking illegal immigration.</button>
      </div>
    )
  }