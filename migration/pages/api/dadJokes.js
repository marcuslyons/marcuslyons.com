export default async function handler(req, res) {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
  const data = await response.json()

  data
    ? res.status(200).json(data)
    : res.status(404).json({ error: "content not found" })
}
