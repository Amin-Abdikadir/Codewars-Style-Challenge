import { test, expect } from "vitest";
import { checkMonthLength, isLeapYear } from "./main.js";

test("should return true for months with 31 days", () => {
  expect(checkMonthLength("January")).toBe(true);
  expect(checkMonthLength("Mar")).toBe(true);
  expect(checkMonthLength("July")).toBe(true);
});

test("should return false for months with less than 31 days", () => {
  expect(checkMonthLength("February")).toBe(false);
  expect(checkMonthLength("Apr")).toBe(false);
  expect(checkMonthLength("September")).toBe(false);
});

test("should handle invalid month names", () => {
  expect(checkMonthLength("NotAMonth")).toBe(false);
});

test("should return true for leap years", () => {
  expect(isLeapYear(2000)).toBe(true);
  expect(isLeapYear(2024)).toBe(true);
  expect(isLeapYear(1600)).toBe(true);
});

test("should return false for non-leap years", () => {
  expect(isLeapYear(1900)).toBe(false);
  expect(isLeapYear(2023)).toBe(false);
  expect(isLeapYear(2100)).toBe(false);
});



