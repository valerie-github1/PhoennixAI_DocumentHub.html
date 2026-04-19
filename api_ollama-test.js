export default async function handler(req, res) {
  try {
    const base = process.env.OLLAMA_BASE_URL;
    const secret = process.env.OLLAMA_SECRET;

    if (!base) return res.status(500).json({ error: "Missing OLLAMA_BASE_URL" });
    if (!secret) return res.status(500).json({ error: "Missing OLLAMA_SECRET" });

    const r = await fetch(`${base}/api/tags`, {
      headers: { "x-ollama-secret": secret },
    });

    const text = await r.text();
    res.status(r.status);
    res.setHeader("content-type", r.headers.get("content-type") || "text/plain");
    return res.send(text);
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
}