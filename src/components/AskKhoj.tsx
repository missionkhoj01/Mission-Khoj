import { useState, type FormEvent, type ReactNode } from 'react';
import { Send, CheckCircle2, ShieldAlert, AlertCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvkooyry';

const grades = ['Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', 'Undergraduate', 'Other'];
const interestOptions = ['STEM', 'Mathematics', 'Computer Science', 'AI', 'Research', 'Business', 'Economics', 'Writing', 'Social Impact', 'Arts', 'Other'];
const deadlinePrefs = ['As soon as possible', 'Within 1 month', 'Within 3 months', 'No preference'];
const countries = ['India', 'Pakistan', 'Bangladesh', 'Kenya', 'Nigeria', 'United States', 'United Kingdom', 'Other'];

interface AskForm {
  name: string;
  email: string;
  grade: string;
  country: string;
  interests: string[];
  lookingFor: string;
  deadlinePref: string;
  additional: string;
}

const empty: AskForm = {
  name: '', email: '', grade: '', country: '', interests: [], lookingFor: '', deadlinePref: '', additional: '',
};

export function AskKhoj() {
  const [form, setForm] = useState<AskForm>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      // FormData avoids a JSON preflight and matches Formspree's browser AJAX pattern.
      const body = new FormData();
      body.append('name', form.name || 'Not provided');
      body.append('email', form.email);
      body.append('grade', form.grade || 'Not provided');
      body.append('country', form.country || 'Not provided');
      body.append('interests', form.interests.length ? form.interests.join(', ') : 'Not provided');
      body.append('lookingFor', form.lookingFor || 'Not provided');
      body.append('deadlinePreference', form.deadlinePref || 'Not provided');
      body.append('additionalInformation', form.additional || 'Not provided');
      body.append('_subject', 'New Ask Khoj request');
      body.append('_source', 'Mission Khoj website');

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body,
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        const message = Array.isArray(data?.errors)
          ? data.errors.map((item: { message?: string }) => item.message).filter(Boolean).join(' ')
          : '';
        throw new Error(message || `Formspree could not receive the request (HTTP ${response.status}).`);
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const toggleInterest = (v: string) =>
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(v) ? f.interests.filter((i) => i !== v) : [...f.interests, v],
    }));

  if (submitted) {
    return (
      <section id="ask" className="scroll-mt-20 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <Reveal>
            <div className="rounded-2xl border border-gold-500/20 bg-gold-500/[0.04] p-10 text-center sm:p-14">
              <CheckCircle2 className="mx-auto h-12 w-12 text-gold-400" strokeWidth={1.2} />
              <h2 className="mt-6 font-display text-2xl font-semibold text-white sm:text-3xl">
                Your request has been received.
              </h2>
              <p className="mt-3 text-base text-ink-200">
                The Khoj team will review it and get back to you.
              </p>
              <button
                onClick={() => { setForm(empty); setSubmitted(false); setError(''); }}
                className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm text-ink-100 transition-colors hover:border-gold-500/40 hover:text-gold-300"
              >
                Submit another request
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="ask" className="scroll-mt-20 border-t border-white/[0.05] py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="eyebrow">Ask Mission Khoj</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Can’t Find What You’re Looking For?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink-300">
            Tell us what opportunity you’re looking for, and our team can help you search for
            relevant options.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <form
            id="ask-khoj-form"
            action={FORMSPREE_ENDPOINT}
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/[0.07] bg-ink-850/60 p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name (optional)">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className={inputCls}
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email" required>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className={inputCls}
                  placeholder="you@example.com"
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Class / Grade">
                <Select name="grade" value={form.grade} onChange={(v) => setForm((f) => ({ ...f, grade: v }))} options={['', ...grades]} />
              </Field>
              <Field label="Country">
                <Select name="country" value={form.country} onChange={(v) => setForm((f) => ({ ...f, country: v }))} options={['', ...countries]} />
              </Field>
            </div>

            <Field label="Interests">
              <div className="flex flex-wrap gap-2">
                {interestOptions.map((it) => (
                  <button
                    type="button"
                    key={it}
                    onClick={() => toggleInterest(it)}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                      form.interests.includes(it)
                        ? 'border-gold-500/40 bg-gold-500/15 text-gold-200'
                        : 'border-white/10 text-ink-300 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {it}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="What are you looking for?">
              <textarea
                name="lookingFor"
                value={form.lookingFor}
                onChange={(e) => setForm((f) => ({ ...f, lookingFor: e.target.value }))}
                rows={3}
                className={inputCls}
                placeholder="e.g. A fully funded summer research program in biology for Grade 11 students"
              />
            </Field>

            <Field label="Deadline preference">
              <Select name="deadlinePreference" value={form.deadlinePref} onChange={(v) => setForm((f) => ({ ...f, deadlinePref: v }))} options={['', ...deadlinePrefs]} />
            </Field>

            <Field label="Additional information">
              <textarea
                name="additionalInformation"
                value={form.additional}
                onChange={(e) => setForm((f) => ({ ...f, additional: e.target.value }))}
                rows={2}
                className={inputCls}
                placeholder="Anything else that might help us search"
              />
            </Field>

            <div className="flex items-start gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-gold-400/70" />
              <p className="text-xs text-ink-400">
                Please don’t submit sensitive personal information.
              </p>
            </div>

            {error && (
              <div role="alert" className="flex items-start gap-2 rounded-lg border border-red-400/20 bg-red-400/[0.05] p-3 text-sm text-red-200">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <Button type="submit" size="lg" className="w-full" disabled={submitting}>
              <Send className="h-4 w-4" />
              {submitting ? 'Sending…' : 'Send Request'}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

const inputCls =
  'w-full rounded-lg border border-white/[0.08] bg-ink-800/60 px-3.5 py-2.5 text-sm text-white placeholder:text-ink-400 transition-colors focus:border-gold-500/40 focus:outline-none focus:ring-1 focus:ring-gold-500/25';

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm text-ink-200">
        {label} {required && <span className="text-gold-400/70">*</span>}
      </span>
      {children}
    </label>
  );
}

function Select({ name, value, onChange, options }: { name: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <select
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={inputCls}
    >
      {options.map((o) => (
        <option key={o} value={o} className="bg-ink-800">
          {o || 'Select...'}
        </option>
      ))}
    </select>
  );
}
