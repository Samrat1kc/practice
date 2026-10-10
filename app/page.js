const steps = [
  {
    number: "01",
    title: "Make it yours",
    description: "Replace this page with the idea you want to bring to life."
  },
  {
    number: "02",
    title: "Build in small steps",
    description: "Create a route, add a component, and see your changes instantly."
  },
  {
    number: "03",
    title: "Keep exploring",
    description: "Try something new. This project is ready for your next experiment."
  }
];

export default function Home() {
  return (
    <main className="page-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Practice Studio home">
          <span className="brand-mark" aria-hidden="true">P</span>
          <span>Practice Studio</span>
        </a>
        <span className="status"><span className="status-dot" /> Your space to create</span>
      </nav>

      <section className="hero">
        <p className="eyebrow">A LITTLE ROOM TO EXPLORE</p>
        <h1>Good things start<br />with <span>a first draft.</span></h1>
        <p className="intro">
          Your Next.js project is ready. Bring an idea, follow your curiosity,
          and turn a few lines of code into something you love.
        </p>
        <a className="button" href="#getting-started">
          Take a look <span aria-hidden="true">↓</span>
        </a>
        <div className="hero-art" aria-hidden="true">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-sun" />
          <span className="art-spark spark-one"></span>
          <span className="art-spark spark-two">✳</span>
        </div>
      </section>

      <section className="getting-started" id="getting-started">
        <div className="section-heading">
          <p className="eyebrow">THE NEXT PART IS YOURS</p>
          <h2>Start wherever you are.</h2>
        </div>
        <div className="steps">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>Made for trying things out.</span>
        <span>Built with Next.js</span>
      </footer>
    </main>
  );
}
