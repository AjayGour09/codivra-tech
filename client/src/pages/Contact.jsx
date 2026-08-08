import { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import {
  Mail,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    try {
      await emailjs.send(
        "service_g0w3vxu",
        "template_azqyxlf",
        {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        },
        {
          publicKey: "VcUJ8Qo8goM3VaUgV",
        }
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("error");
    }
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/919644029231",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-32">
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 lg:grid-cols-2">

              {/* LEFT SIDE */}
              <div>
                <p className="text-sm uppercase tracking-widest text-zinc-500">
                  Contact
                </p>

                <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
                  Let's build something
                  <br />
                  great together.
                </h1>

                <p className="mt-6 max-w-lg leading-8 text-zinc-400">
                  Have an idea, project or business requirement?
                  Tell us about it and we'll get back to you.
                </p>

                <div className="mt-10 space-y-5">

                  {/* EMAIL */}
                  <a
                    href="mailto:ajaygour369@gmail.com"
                    className="flex items-center gap-4 transition hover:text-zinc-300"
                  >
                    <div className="rounded-xl border border-zinc-800 p-3">
                      <Mail size={20} />
                    </div>

                    <div>
                      <p className="text-sm text-zinc-500">
                        Email
                      </p>

                      <p className="mt-1">
                        ajaygour369@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* WHATSAPP */}
                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="flex items-center gap-4 text-left transition hover:text-zinc-300"
                  >
                    <div className="rounded-xl border border-zinc-800 p-3">
                      <MessageCircle size={20} />
                    </div>

                    <div>
                      <p className="text-sm text-zinc-500">
                        WhatsApp
                      </p>

                      <p className="mt-1">
                        +91 9644029231
                      </p>

                      <p className="mt-1 text-sm text-zinc-600">
                        Click to chat
                      </p>
                    </div>
                  </button>

                </div>
              </div>

              {/* FORM */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 md:p-10">

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  {/* NAME */}
                  <div>
                    <label className="mb-2 block text-sm text-zinc-400">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      disabled={status === "sending"}
                      className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 outline-none transition placeholder:text-zinc-700 focus:border-zinc-500 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-2 block text-sm text-zinc-400">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      disabled={status === "sending"}
                      className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 outline-none transition placeholder:text-zinc-700 focus:border-zinc-500 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  {/* SERVICE */}
                  <div>
                    <label className="mb-2 block text-sm text-zinc-400">
                      What do you need?
                    </label>

                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      disabled={status === "sending"}
                      className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-zinc-300 outline-none focus:border-zinc-500 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">
                        Select a service
                      </option>

                      <option value="Website Development">
                        Website Development
                      </option>

                      <option value="Web Application">
                        Web Application
                      </option>

                      <option value="UI/UX Design">
                        UI/UX Design
                      </option>

                      <option value="AI Solution">
                        AI Solution
                      </option>

                      <option value="Backend Development">
                        Backend Development
                      </option>

                      <option value="Maintenance & Support">
                        Maintenance & Support
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="mb-2 block text-sm text-zinc-400">
                      Project Details
                    </label>

                    <textarea
                      name="message"
                      required
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      disabled={status === "sending"}
                      className="w-full resize-none rounded-xl border border-zinc-800 bg-black px-4 py-3 outline-none transition placeholder:text-zinc-700 focus:border-zinc-500 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  {/* SUCCESS */}
                  {status === "success" && (
                    <div className="flex items-center gap-3 rounded-xl border border-green-900/50 bg-green-950/30 px-4 py-3 text-sm text-green-400">
                      <CheckCircle size={18} />

                      <span>
                        Your enquiry has been sent successfully!
                      </span>
                    </div>
                  )}

                  {/* ERROR */}
                  {status === "error" && (
                    <div className="flex items-center gap-3 rounded-xl border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-400">
                      <AlertCircle size={18} />

                      <span>
                        Something went wrong. Please try again.
                      </span>
                    </div>
                  )}

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.01] hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {status === "sending" ? (
                      <>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <Send size={17} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs leading-5 text-zinc-600">
                    Your enquiry will be sent directly to the
                    CodivraTech team.
                  </p>

                </form>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;