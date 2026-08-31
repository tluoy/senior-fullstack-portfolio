import ContactForm from "../components/forms/ContactForm"

function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Contact
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Let's start a conversation.
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Whether you have a project in mind, are looking for a senior
          full-stack engineer, or simply want to connect, I'd love to hear
          from you.
        </p>
      </header>

      <div className="mt-12">
        {/* Contact form will go here */}
        <ContactForm />
      </div>
    </main>
  )
}

export default ContactPage