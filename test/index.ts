import { Builder } from "selenium-webdriver";
jest.mock("selenium-webdriver");

test("test", () => {
  const builder = new Builder();
  expect(1).toBe(1);
})
