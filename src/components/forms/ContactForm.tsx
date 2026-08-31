import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("VALID SUBMISSION:", data);

    setIsSubmitted(false);

    await new Promise((resolve) => setTimeout(resolve, 500));

    reset();
    setIsSubmitted(true);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl space-y-6"
        noValidate
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-900"
          >
            Name
          </label>

          <input
            id="name"
            type="text"
            autoComplete="name"
            {...register("name")}
            className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/20"
          />

          {errors.name && (
            <p className="mt-2 text-sm text-red-600" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-900"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/20"
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-600" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-slate-900"
          >
            Subject
          </label>

          <input
            id="subject"
            type="text"
            {...register("subject")}
            className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/20"
          />

          {errors.subject && (
            <p className="mt-2 text-sm text-red-600" role="alert">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-900"
          >
            Message
          </label>

          <textarea
            id="message"
            rows={6}
            {...register("message")}
            className="mt-2 block w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/20"
          />

          {errors.message && (
            <p className="mt-2 text-sm text-red-600" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {isSubmitted && (
        <p
          className="mt-6 rounded-lg bg-slate-100 px-4 py-3 text-sm text-slate-700"
          role="status"
        >
          Thanks for reaching out. Your message has been received.
        </p>
      )}
    </>
  );
}

export default ContactForm;
