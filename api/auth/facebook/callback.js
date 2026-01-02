export default async function handler(req, res) {
  const { code, error, error_description } = req.query;

  if (error) {
    return res.status(400).json({
      ok: false,
      error,
      error_description,
    });
  }

  if (!code) {
    return res.status(400).json({
      ok: false,
      message: "No code received",
    });
  }

  // ВАЖНО: на этом этапе просто убеждаемся, что code приходит
  return res.status(200).json({
    ok: true,
    message: "Facebook OAuth callback received",
    code,
  });
}
