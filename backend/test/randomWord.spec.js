import { describe, expect, it } from "@jest/globals";
import randomWord from "../src/controllers/randomWord";

describe("randomWord()", () => {
  it("Returns an object containing a word from the array", () => {
    const result = randomWord(["Katt"]);
    expect(result.word).toBe("Katt");
  });

  it("Returns an error message if no matching word is found", () => {
    const result = randomWord([]);
    expect(result).toBe(
      "Error! No matching words, try again with different variables"
    );
  });
});
