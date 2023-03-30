import fs from "fs/promises";

export default async function wordsFetch() {
  const content = await fs.readFile("./backend/data/words_dictionary.json");
  const payload = JSON.parse(content.toString());
  const data = payload.words;

  const dataArray = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].length >= 3 && data[i].length <= 7) {
      dataArray.push(data[i]);
    }
  }

  return dataArray;
}
