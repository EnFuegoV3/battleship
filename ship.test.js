import { test, expect } from "vitest";
import { carrier1, carrier2 } from "./main";


test('hit on carrier 2', () => {
    expect(carrier1.hit(carrier2)).toBe(carrier2.health === 4);
})