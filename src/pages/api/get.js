export default function handler(req, res) {
  console.log("HELLO FROM GET")
  res.status(200).json({ name: 'John Doe' })
}