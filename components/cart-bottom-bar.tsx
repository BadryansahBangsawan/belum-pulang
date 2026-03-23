"use client";

import { CartDrawer } from "@/components/cart-drawer";
import { useCartStore } from "@/lib/cart-store";
import { useEffect, useMemo } from "react";

export function CartBottomBar() {
  const items = useCartStore((s) => s.items);
  const rehydrate = useCartStore.persist?.rehydrate;
  const { count, total } = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    return { count, total };
  }, [items]);

  useEffect(() => {
    rehydrate?.();
  }, [rehydrate]);

  useEffect(() => {
    if (count > 0) {
      document.body.classList.add("cart-visible");
    } else {
      document.body.classList.remove("cart-visible");
    }

    return () => {
      document.body.classList.remove("cart-visible");
    };
  }, [count]);

  if (count === 0) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center md:hidden">
      <CartDrawer
        triggerClassName="w-[90%] max-w-md justify-between bg-brown text-amber-100 px-5 py-3 text-base hover:-translate-y-0 shadow-soft border-none"
        triggerContent={
          <>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-brown shadow-chip">
                {count}
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold">
                  {count} item{count === 1 ? "" : "s"}
                </span>
                <span className="text-xs text-amber-100/80">₹{total}</span>
              </div>
            </div>
            <span className="font-semibold">View Cart →</span>
          </>
        }
      />
    </div>
  );
}
