export default async function handler(req, res) {
  const { code, error, error_description } = req.query;

  // 1. Ошибка или отмена логина
  if (error) {
    return res.redirect(
      `/app/facebook/error?error=${encodeURIComponent(error_description || error)}`
    );
  }

  // 2. Code не пришёл — это ошибка OAuth
  if (!code) {
    return res.redirect(
      `/app/facebook/error?error=No authorization code received`
    );
  }

  // 3. REVIEW-SAFE логика:
  // ✔ code получен
  // ❌ токен НЕ обмениваем
  // ❌ данные НЕ дергаем
  // ✔ возвращаем пользователя в UI

  return res.redirect(
    `https://facefindr-gems.lovable.dev.app/facebook/connected?status=success`
  );
}
