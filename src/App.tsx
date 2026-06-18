import { useState } from "react";
import { steps } from "./steps";

export default function App() {
  const [i, setI] = useState(0);
  const done = i >= steps.length;

  if (done) {
    return (
      <main className="screen">
        <div className="card finish">
          <h1>Geschafft!</h1>
          <p>Alles Gute zum Geburtstag — genieß den Tag in Lissabon. 🥳</p>
          <button onClick={() => setI(0)}>Nochmal von vorne</button>
        </div>
      </main>
    );
  }

  const step = steps[i];

  return (
    <main className="screen">
      <div className="progress">
        Schritt {i + 1} / {steps.length}
      </div>

      <div className="card">
        <div className="dist">{step.dist}</div>
        <div className="mode">{step.mode}</div>
        <ol className="route">
          {step.items.map((it, n) => (
            <li key={n}>
              <span className="num">{n + 1}</span>
              <span>{it}</span>
            </li>
          ))}
        </ol>
      </div>

      <button className="arrived" onClick={() => setI(i + 1)}>
        Angekommen
      </button>
    </main>
  );
}
