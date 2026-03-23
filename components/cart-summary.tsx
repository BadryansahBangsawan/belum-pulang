"use client";

import { useMemo, useState } from "react";
import { ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const OWNER_NUMBER = "919654248879"; // replace with real owner number when ready

export function CartSummary({ className }: { className?: string }) {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const increaseQty = useCartStore((s) => s.increaseQty);
  const decreaseQty = useCartStore((s) => s.decreaseQty);
  const removeItem = useCartStore((s) => s.removeItem);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [mode, setMode] = useState("pickup");

  const { count, total } = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    return { count, total };
  }, [items]);

  const handleSend = () => {
    if (!name || !phone || items.length === 0) return;
    const lines = items
      .map((item) => `${item.quantity}x ${item.name} – ₹${item.price * item.quantity}`)
      .join("\n");
    const message = [
      `Hello Bakehouse Café!`,
      `Order mode: ${mode === "pickup" ? "Pickup" : "Dine-in"}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      `Items:`,
      lines,
      `Total: ₹${total}`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${OWNER_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <>
      <div className={cn("space-y-3", className)}>
        <div className="flex flex-col gap-3 rounded-2xl bg-brown px-4 py-3 text-amber-100 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:rounded-full">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <ShoppingBag className="size-4" />
            <span>
              {count} item{count === 1 ? "" : "s"} • ₹{total}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              className="rounded-full bg-yellow text-amber-50 hover:bg-yellow/90"
              onClick={() => setOpen(true)}
              disabled={items.length === 0}
            >
              Send Order on WhatsApp
            </Button>
            {items.length > 0 ? (
              <button
                className="rounded-full px-3 py-1 text-xs text-amber-100/80 hover:text-white"
                onClick={clearCart}
              >
                Clear
              </button>
            ) : null}
          </div>
        </div>

        {items.length > 0 ? (
          <div className="space-y-3 rounded-2xl bg-white p-3 shadow-soft">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-3 rounded-xl bg-amber-50 px-3 py-2 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="w-full">
                  <p className="font-semibold text-brown">{item.name}</p>
                  <p className="text-xs text-brown/60">
                    ₹{item.price} • {item.category}
                  </p>
                </div>
                <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
                  <div className="flex items-center gap-2 rounded-full bg-white px-2 py-1 shadow-chip sm:ml-auto">
                    <button
                      className="grid h-7 w-7 place-items-center rounded-full bg-brown text-amber-100"
                      onClick={() => decreaseQty(item.id)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="min-w-[20px] text-center text-sm font-semibold text-brown">
                      {item.quantity}
                    </span>
                    <button
                      className="grid h-7 w-7 place-items-center rounded-full bg-brown text-amber-100"
                      onClick={() => increaseQty(item.id)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-sm font-semibold text-brown">
                    ₹{item.price * item.quantity}
                  </div>
                  <button
                    className="text-brown/50 hover:text-brown"
                    aria-label="Remove item"
                    onClick={() => removeItem(item.id)}
                  >
                    <X className="size-4" />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between rounded-xl bg-amber-100 px-3 py-2 font-semibold text-brown">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        ) : null}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-3xl border-none bg-white p-6 shadow-soft">
          <DialogHeader>
            <DialogTitle className="display text-2xl text-brown">
              Send order on WhatsApp
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                placeholder="Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                placeholder="98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email (optional)</Label>
              <Input
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Mode</Label>
              <div className="flex gap-2">
                {["pickup", "dine-in"].map((opt) => (
                  <button
                    key={opt}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-semibold shadow-chip",
                      mode === opt
                        ? "bg-brown text-amber-100"
                        : "bg-amber-50 text-brown hover:bg-amber-100"
                    )}
                    onClick={() => setMode(opt)}
                  >
                    {opt === "pickup" ? "Pickup" : "Dine-in"}
                  </button>
                ))}
              </div>
            </div>
            <Button
              className="w-full rounded-full bg-orange text-brown shadow-chip hover:bg-orange/90"
              onClick={handleSend}
              disabled={!name || !phone || items.length === 0}
            >
              Open WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
