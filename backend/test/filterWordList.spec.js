import { describe, expect, it } from "@jest/globals";
import filterWordList from "../src/controllers/filterWordList";
const mockWordList = {
  words: ["tre", "ett", "katt", "mats", "svart", "kaffe", "enbart", "grannko"],
};

describe("filterWordList()", () => {
  it("Returns an array with correct word length and no duplicate letters", async () => {
    const result = await filterWordList(mockWordList, 3, false);
    expect(result).toStrictEqual(["tre"]);
  });

  it("Returns an array with correct word length and with duplicate letters", async () => {
    const result = await filterWordList(mockWordList, 7, true);
    expect(result).toStrictEqual(["grannko"]);
  });

  it("Returns an array with correct word length and with duplicate letters", async () => {
    const result = await filterWordList(mockWordList, 5, true);
    expect(result).toStrictEqual(["svart", "kaffe"]);
  });
});
