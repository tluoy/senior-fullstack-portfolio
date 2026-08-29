import Button from "../ui/Button";

function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-20"
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
        Senior Full-Stack Developer
      </p>

      <h1
        id="hero-heading"
        className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl"
      >
        Titus A. Luyo
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
        Senior software engineer with 13+ years of experience building
        enterprise-grade, scalable software solutions across enterprise systems,
        fintech, cloud-native platforms, and AI-powered applications.
      </p>

      <div className="flex flex-wrap gap-4">
        <Button to="/projects">View Projects</Button>

        <Button to="/contact" variant="secondary">
          Contact Me
        </Button>
      </div>
    </section>
  );
}

export default Hero;
