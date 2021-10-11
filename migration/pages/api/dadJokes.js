export default async function handler(req, res) {
  const { data } = await fetch("https://icanhazdadjoke.com/")

  data
    ? res.status(200).json(data)
    : res.status(404).json({ error: "content not found" })
}
