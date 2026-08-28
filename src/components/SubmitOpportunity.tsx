import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export function SubmitOpportunity() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section
        id="submit"
        className="mx-auto max-w-3xl px-5 py-20 sm:px-8"
      >
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-8 text-center">
          <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-400" />

          <h2 className="mt-4 font-display text-2xl font-semibold text-white">
            Opportunity Submitted
          </h2>

          <p className="mt-2 text-sm text-ink-300">
            Thank you! We’ll review the opportunity before adding it to
            Mission Khoj.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="submit"
      className="mx-auto max-w-4xl px-5 py-20 sm:px-8"
    >
      <div className="mb-8">
        <p className="eyebrow">Help Us Grow</p>

        <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
          Submit an Opportunity
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-300 sm:text-base">
          Know about a scholarship, competition, research program, course, or
          other opportunity that students should know about? Submit it below.
        </p>
      </div>

      <form
        action="https://formspree.io/f/mvkooyry"
        method="POST"
        onSubmit={() => setSubmitted(true)}
        className="space-y-5 rounded-2xl border border-white/[0.06] bg-ink-850/60 p-5 sm:p-7"
      >
        {/* Name + Email */}
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Your Name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <Field
            label="Your Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Opportunity */}
        <Field
          label="Opportunity Name"
          name="opportunity_name"
          placeholder="e.g. Breakthrough Junior Challenge"
          required
        />

        {/* Organization */}
        <Field
          label="Organization"
          name="organization"
          placeholder="Organization running the opportunity"
          required
        />

        {/* Website + Deadline */}
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Official Website"
            name="source_url"
            type="url"
            placeholder="https://example.com"
            required
          />

          <Field
            label="Deadline"
            name="deadline"
            placeholder="e.g. September 15, 2026 / Rolling"
            required
          />
        </div>

        {/* Eligibility + Location */}
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Eligibility"
            name="eligibility"
            placeholder="e.g. Students ages 13–18"
            required
          />

          <Field
            label="Location"
            name="country"
            placeholder="e.g. Online / Global"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="mb-1.5 block text-sm font-medium text-ink-100"
          >
            Category
          </label>

          <select
            id="category"
            name="category"
            required
            defaultValue=""
            className="w-full rounded-xl border border-white/[0.08] bg-ink-900 px-3 py-2.5 text-sm text-white outline-none transition focus:border-gold-500/50"
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="scholarships">Scholarship</option>
            <option value="competitions">Competition</option>
            <option value="research">Research</option>
            <option value="learning">Learning</option>
            <option value="international">International</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Funding */}
        <div>
          <label
            htmlFor="funding"
            className="mb-1.5 block text-sm font-medium text-ink-100"
          >
            Funding
          </label>

          <select
            id="funding"
            name="funding"
            required
            defaultValue=""
            className="w-full rounded-xl border border-white/[0.08] bg-ink-900 px-3 py-2.5 text-sm text-white outline-none transition focus:border-gold-500/50"
          >
            <option value="" disabled>
              Select funding type
            </option>
            <option value="Free">Free</option>
            <option value="Fully Funded">Fully Funded</option>
            <option value="Partially Funded">Partially Funded</option>
            <option value="Paid">Paid</option>
            <option value="Stipend">Stipend</option>
            <option value="Self-Funded">Self-Funded</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="mb-1.5 block text-sm font-medium text-ink-100"
          >
            Description
          </label>

          <textarea
            id="description"
            name="description"
            rows={5}
            required
            placeholder="Briefly describe the opportunity..."
            className="w-full resize-none rounded-xl border border-white/[0.08] bg-ink-900 px-3 py-2.5 text-sm text-white placeholder:text-ink-500 outline-none transition focus:border-gold-500/50"
          />
        </div>

        {/* Additional Information */}
        <div>
          <label
            htmlFor="additional_info"
            className="mb-1.5 block text-sm font-medium text-ink-100"
          >
            Additional Information
          </label>

          <textarea
            id="additional_info"
            name="additional_info"
            rows={3}
            placeholder="Anything else we should know?"
            className="w-full resize-none rounded-xl border border-white/[0.08] bg-ink-900 px-3 py-2.5 text-sm text-white placeholder:text-ink-500 outline-none transition focus:border-gold-500/50"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-gold-400"
        >
          <Send className="h-4 w-4" />
          Submit Opportunity
        </button>

        <p className="text-center text-xs text-ink-500">
          Submissions are reviewed before appearing on Mission Khoj.
        </p>
      </form>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-ink-100"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/[0.08] bg-ink-900 px-3 py-2.5 text-sm text-white placeholder:text-ink-500 outline-none transition focus:border-gold-500/50"
      />
    </div>
  );
}
