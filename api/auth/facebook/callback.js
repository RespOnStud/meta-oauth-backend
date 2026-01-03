export default async function handler(req, res) {
  const { code, error, error_description } = req.query;

  if (error) {
    return res.redirect(
      `https://facefindr-gems.lovable.app/?oauth_error=${encodeURIComponent(
        error_description || error
      )}`
    );
  }

  if (!code) {
    return res.redirect(
      `https://facefindr-gems.lovable.app/?oauth_error=missing_code`
    );
  }

  // REVIEW-SAFE:

  return res.redirect(
    `https://facefindr-gems.lovable.app/?connected=facebook`
  );
}
