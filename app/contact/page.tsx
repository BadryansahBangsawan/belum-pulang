"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/section-wrapper";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const OWNER_NUMBER = "919654248879"; // replace with your real WhatsApp number

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSend = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.phone.trim()) {
      nextErrors.phone = "Phone is required";
    } else if (!/^[0-9+\-\s]{8,15}$/.test(form.phone.trim())) {
      nextErrors.phone = "Enter a valid phone number";
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email";
    }
    if (!form.message.trim()) nextErrors.message = "Message is required";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    const lines = [
      "Hello Belum Pulang!",
      form.subject ? `Subject: ${form.subject}` : null,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      "",
      "Message:",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/${OWNER_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pb-14 pt-6 sm:px-6">
        <SectionWrapper>
          <div className="rounded-[28px] bg-white p-6 shadow-soft">
            <h1 className="display text-4xl font-extrabold text-brown">
              Visit us or say hello
            </h1>
            <p className="mt-2 text-brown/70">
              We love hosting coffee dates, birthdays, and study jams.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Address</Label>
                <p className="rounded-2xl bg-amber-50 p-3 text-brown">
                  Belum Pulang, RCJQ+JC4, Jl. Mapala Raya, Tidung, Kec.
                  Rappocini, Kota Makassar, Sulawesi Selatan
                </p>
              </div>
              <div className="space-y-2">
                <Label>Call us</Label>
                <p className="rounded-2xl bg-amber-50 p-3 text-brown">
                  Belum dicantumkan di Google Maps
                </p>
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <p className="rounded-2xl bg-amber-50 p-3 text-brown">
                  hello@bakehousecafe.com
                </p>
              </div>
              <div className="space-y-2">
                <Label>Opening hours</Label>
                <p className="rounded-2xl bg-amber-50 p-3 text-brown">
                  Cek Google Maps untuk jam terbaru
                </p>
              </div>
            </div>

            <form
              className="mt-6 grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="rounded-full bg-amber-50"
              />
              {errors.name ? <p className="text-xs font-medium text-red-600">{errors.name}</p> : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="98765 43210"
                className="rounded-full bg-amber-50"
              />
              {errors.phone ? (
                <p className="text-xs font-medium text-red-600">{errors.phone}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email (optional)</Label>
              <Input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="rounded-full bg-amber-50"
              />
              {errors.email ? (
                <p className="text-xs font-medium text-red-600">{errors.email}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Catering, event booking, feedback..."
                  className="rounded-full bg-amber-50"
                />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                onChange={handleChange}
                placeholder="Share your query or event details..."
                className="h-32 w-full rounded-2xl border border-brown/15 bg-amber-50 p-3 text-sm text-brown outline-none focus:border-brown focus:shadow-soft"
              />
              {errors.message ? (
                <p className="text-xs font-medium text-red-600">{errors.message}</p>
              ) : null}
            </div>
            <div className="sm:col-span-2">
              <Button
                type="submit"
                className="w-full rounded-full bg-[#0038FF] text-white shadow-chip hover:bg-[#0038FF]/90"
                disabled={!form.name || !form.phone || !form.message}
              >
                Send on WhatsApp
              </Button>
            </div>
            </form>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
