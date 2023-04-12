export default async function GetWord({ settings }) {
  const word = await fetch("/api/secret", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ settings }),
  });
  const payload = await word.json();
  const data = payload.word;

  return { data };
}
