import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("merges conflicting tailwind classes and keeps the last value", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });

  it("skips falsy values while keeping valid class names", () => {
    expect(cn("text-sm", false && "hidden", null, undefined, "font-bold")).toBe(
      "text-sm font-bold",
    );
  });
});
