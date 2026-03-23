"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const OWNER_NUMBER = "919654248879"; // replace with real number

export default function ReservePage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "2",
    date: "",
    time: "",
    notes: "",
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
    if (!form.guests || Number(form.guests) < 1) nextErrors.guests = "Guests must be at least 1";
    if (!form.date) nextErrors.date = "Date is required";
    if (!form.time) nextErrors.time = "Time is required";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    const message = [
      "Table reservation request:",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Guests: ${form.guests}`,
      `Date: ${form.date}`,
      `Time: ${form.time}`,
      form.notes ? `Notes: ${form.notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/${OWNER_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto flex max-w-5xl flex-col gap-6 px-4 pb-14 pt-6 sm:px-6">
        <div className="grid gap-6 rounded-[28px] bg-white p-6 shadow-soft md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h1 className="display text-4xl font-extrabold text-brown">
              Reserve a table
            </h1>
            <p className="text-brown/70">
              Book your cozy corner. We’ll confirm instantly over WhatsApp.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
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
              <Label htmlFor="guests">Number of guests</Label>
              <Input
                id="guests"
                name="guests"
                type="number"
                min={1}
                value={form.guests}
                onChange={handleChange}
                className="rounded-full bg-amber-50"
              />
              {errors.guests ? (
                <p className="text-xs font-medium text-red-600">{errors.guests}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                className="rounded-full bg-amber-50"
              />
              {errors.date ? <p className="text-xs font-medium text-red-600">{errors.date}</p> : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                name="time"
                type="time"
                value={form.time}
                onChange={handleChange}
                className="rounded-full bg-amber-50"
              />
              {errors.time ? <p className="text-xs font-medium text-red-600">{errors.time}</p> : null}
            </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Special request</Label>
              <textarea
                id="notes"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Allergies, celebrations, seating preference..."
                className="h-28 w-full rounded-2xl border border-brown/15 bg-amber-50 p-3 text-sm text-brown outline-none ring-0 focus:border-brown focus:shadow-soft"
              />
            </div>
            <Button
              className="w-full rounded-full bg-orange text-brown shadow-chip hover:bg-orange/90"
              onClick={handleSend}
              disabled={!form.name || !form.phone || !form.date || !form.time}
            >
              Reserve on WhatsApp
            </Button>
          </div>
          <div className="relative hidden overflow-hidden rounded-[24px] bg-brown shadow-soft md:block">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&q=80&auto=format&fit=crop"
              alt="Cafe interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/15 p-4 text-amber-50 backdrop-blur">
              <p className="display text-xl font-extrabold">Cozy booths & bar seating</p>
              <p className="text-sm text-amber-100/80">
                Tell us your vibe and we’ll prep your table with warm lighting.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
