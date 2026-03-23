"use client";

import { MenuItem } from "@/lib/menu-data";
import { useCartStore } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Props = {
  item: MenuItem;
};

export function ProductCard({ item }: Props) {
  const addItem = useCartStore((s) => s.addItem);
  const increaseQty = useCartStore((s) => s.increaseQty);
  const decreaseQty = useCartStore((s) => s.decreaseQty);
  const quantity =
    useCartStore((s) => s.items.find((i) => i.id === item.id)?.quantity) || 0;

  return (
    <div className="flex flex-col gap-3 rounded-3xl bg-white p-4 shadow-soft transition hover:-translate-y-1 sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="display text-lg font-bold text-brown sm:text-xl">{item.name}</h3>
          {item.description ? (
            <p className="text-sm text-brown/70">{item.description}</p>
          ) : null}
        </div>
        {item.badge ? (
          <Badge className="rounded-full bg-yellow text-amber-50 shadow-chip">
            {item.badge}
          </Badge>
        ) : null}
      </div>
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <div className="display text-2xl font-extrabold text-brown">
          ₹{item.price}
        </div>
        {quantity > 0 ? (
          <div className="flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 shadow-chip">
            <button
              className="grid h-8 w-8 place-items-center rounded-full bg-white text-brown shadow-soft"
              onClick={() => decreaseQty(item.id)}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="min-w-[24px] text-center font-semibold text-brown">
              {quantity}
            </span>
            <button
              className="grid h-8 w-8 place-items-center rounded-full bg-brown text-amber-100 shadow-soft"
              onClick={() => increaseQty(item.id)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        ) : (
          <Button
            className="w-full rounded-full bg-orange text-brown shadow-chip hover:bg-orange/90 sm:w-auto"
            onClick={() =>
              addItem({
                id: item.id,
                name: item.name,
                price: item.price,
                category: item.category,
              })
            }
          >
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
}
