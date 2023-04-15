import { describe, expect, it } from "@jest/globals";
import guessingGame from "../src/controllers/guessingGame";
/* 
  Test strategi
    Kontrollera att funktionen fungerar, dvs:
     -Kontrollera så att input hamnar i rätt ordning efter att den har blivit till en array
     -Kontrollera så att funktionen returnerar det den ska (duh), det går att göra i ett test men
     bryter istället ner det till flera tester.
    
*/

describe("guessingGame()", () => {
  const guess = "Fkffe";
  const answer = "Kaffe";

  //Test to see if the string transforms into an array
  it("Checks if string is an array with lowercase letters in the correct order", () => {
    const result = guessingGame(guess, answer);
    expect(result[0].letter).toBe("f");
    expect(result[1].letter).toBe("k");
    expect(result[2].letter).toBe("f");
    expect(result[3].letter).toBe("f");
    expect(result[4].letter).toBe("e");
  });

  //Test to check the index of the guessed word compared to the correct word
  it("Checks if the letters are in the right position", () => {
    const result = guessingGame(guess, answer);
    expect(result[0].result).toBe("Incorrect");
    expect(result[1].result).toBe("Misplaced");
    expect(result[2].result).toBe("Correct");
    expect(result[3].result).toBe("Correct");
    expect(result[4].result).toBe("Correct");
  });

  //Test to check if a misplaced character is already in use in the correct position
  it("Check if a misplaced letter is already in use somewhere else", () => {
    const result = guessingGame("eeeee", answer);
    expect(result[0].letter).toBe("e");
    expect(result[1].letter).toBe("e");
    expect(result[2].letter).toBe("e");
    expect(result[3].letter).toBe("e");
    expect(result[4].letter).toBe("e");
  });

  //Test to check if the functions returns correct for all letters if the right word is guessed
  it("Return correct for all letters", () => {
    const result = guessingGame("kaffe", answer);
    expect(result[0].result).toBe("Correct");
    expect(result[1].result).toBe("Correct");
    expect(result[2].result).toBe("Correct");
    expect(result[3].result).toBe("Correct");
    expect(result[4].result).toBe("Correct");
  });

  //Test to check if it correctly labels the letters as misplaced
  it("Returns misplaced for all letters", () => {
    const result = guessingGame("ffeak", answer);
    expect(result[0].result).toBe("Misplaced");
    expect(result[1].result).toBe("Misplaced");
    expect(result[2].result).toBe("Misplaced");
    expect(result[3].result).toBe("Misplaced");
    expect(result[4].result).toBe("Misplaced");
  });
});
