export default async function handler(req, res) {
  const { code, error, error_description } = req.query;

  // 1. Если пользователь отменил логин или произошла ошибка
  if (error) {
    return res.status(400).json({
      ok: false,
      error,
      error_description,
    });
  }

  // 2. Проверяем, что code пришёл
  if (!code) {
    return res.status(400).json({
      ok: false,
      message: "No authorization code received from Facebook",
    });
  }

  // 3. Пока НИЧЕГО не обмениваем на access_token
  // (это нормально для текущего этапа и App Review)
  return res.status(200).json({
    ok: true,
    message: "Facebook OAuth callback received",
    code,
  });
}
