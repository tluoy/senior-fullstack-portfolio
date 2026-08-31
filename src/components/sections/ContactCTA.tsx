import Button from '../ui/Button'

function ContactCTA() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-12">
        <h2
          id="contact-heading"
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Let's build something meaningful.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          Whether you're looking for a senior engineer, technical
          leadership, or someone who can turn complex requirements
          into scalable software, let's start a conversation.
        </p>

        <div className="mt-8 flex justify-center">
          <Button to="/contact">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA