export default async function handler(req, res) {
  const { code, error, error_description } = req.query;

  // 1. Ошибка или отмена логина
  if (error) {
    return res.redirect(
      `https://facefindr-gems.lovable.app/facebook-connected?status=error&message=${encodeURIComponent(error_description || error)}`
    );
  }

  // 2. Code не пришёл — это ошибка OAuth
  if (!code) {
    return res.redirect(
      `https://facefindr-gems.lovable.app/facebook-connected?status=error&message=No authorization code`
    );
  }

  // 3. REVIEW-SAFE логика:
  // ✔ code получен
  // ❌ токен НЕ обмениваем
  // ❌ данные НЕ дергаем
  // ✔ возвращаем пользователя в UI

  return res.redirect(
    `https://facefindr-gems.lovable.dev.app/facebook-connected?status=success`
  );
}
