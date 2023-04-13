export default async function GetWord(wordLength, duplicate) {
  const res = await fetch(
    `/api/secret?wordLength=${wordLength}&duplicate=${duplicate}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  return data;
}
