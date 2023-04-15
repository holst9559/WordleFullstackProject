import fs from "fs/promises";

export default async function wordsFetch() {
  const payload = await fs.readFile("./data/words_dictionary.json");
  const data = JSON.parse(payload.toString());
  return data;
}
