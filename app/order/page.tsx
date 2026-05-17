"use client";

import { useState } from "react";

export default function Order() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
const form = event.currentTarget;
    setStatus("Sending...");

    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      companyWebsite: formData.get("companyWebsite"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      quantity: formData.get("quantity"),
      productType: formData.get("productType"),
      logo: formData.get("logo"),
      neededBy: formData.get("neededBy"),
      notes: formData.get("notes"),
    };

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus("Inquiry sent. We will follow up soon.");
form.reset();    } else {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="bg-zinc-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Order Inquiry
          </p>

          <h1 className="text-5xl font-black tracking-tight md:text-6xl">
            Tell us what you want to create.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300">
            Submit the details below and we will follow up with next steps,
            production timing, employee information needed, and an invoice for
            your custom order.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm"
          >
            <div>
              <label className="block text-sm font-semibold">Name</label>
              <input
                className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Company</label>
              <input
                className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
                type="text"
                name="company"
                placeholder="Company name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">
                Company Website
              </label>
              <input
                className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
                type="text"
                name="companyWebsite"
                placeholder="https://yourcompany.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Email</label>
              <input
                className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
                type="email"
                name="email"
                placeholder="you@company.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Phone</label>
              <input
                className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
                type="tel"
                name="phone"
                placeholder="Best phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">
                Estimated Quantity
              </label>
             <input
  className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
  type="number"
  name="quantity"
  min="20"
  defaultValue="20"
  placeholder="Minimum order: 20"
/>
            </div>

            <div>
              <label className="block text-sm font-semibold">
                Product Type
              </label>
              <select
                className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
                name="productType"
              >
                <option>Covers only, using our own A5 journals</option>
                <option>Cover + A5 journal, fully assembled</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold">
                Add company logo?
              </label>
              <select
                className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
                name="logo"
              >
                <option>Yes</option>
                <option>No</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold">
                Needed By Date
              </label>
              <input
                className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3"
                type="date"
                name="neededBy"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">
                Notes or Special Requests
              </label>
              <textarea
                className="mt-2 min-h-36 w-full rounded-xl border border-zinc-300 px-4 py-3"
                name="notes"
                placeholder="Tell us about the team, event, timing, or special order details."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-zinc-950 px-8 py-4 font-semibold text-white transition hover:bg-zinc-800"
            >
              Submit Inquiry
            </button>

            {status && (
              <p className="text-center text-sm font-semibold text-zinc-700">
                {status}
              </p>
            )}
          </form>

          <div>
            <h2 className="text-3xl font-black">
              What happens after you submit?
            </h2>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl bg-zinc-100 p-6">
                <h3 className="font-bold">1. We review your request</h3>
                <p className="mt-2 text-zinc-600">
                  We confirm quantity, product format, branding, deadline, and
                  whether you need covers only or completed journals.
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-100 p-6">
                <h3 className="font-bold">
                  2. We gather the team information
                </h3>
                <p className="mt-2 text-zinc-600">
                  We will need a list of the team members receiving books,
                  including names, email addresses, company details, and any
                  LinkedIn or professional profile information you want included.
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-100 p-6">
                <h3 className="font-bold">
                  3. Team members complete the assessment
                </h3>
                <p className="mt-2 text-zinc-600">
                  Each team member will be emailed an 8-minute personality
                  “assessment” so the book can be customized around who they
                  are, how they are wired, and the strengths they bring to the
                  team.
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-100 p-6">
                <h3 className="font-bold">4. We send an invoice</h3>
                <p className="mt-2 text-zinc-600">
                  Once the order details are confirmed, we will send a secure
                  invoice before production begins.
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-950 p-6 text-white">
                <h3 className="font-bold">Holiday reminder</h3>
                <p className="mt-2 text-zinc-300">
                  Custom team orders should be placed several weeks in advance
                  to allow for assessment completion, content creation,
                  proofing, printing, assembly, and shipping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}