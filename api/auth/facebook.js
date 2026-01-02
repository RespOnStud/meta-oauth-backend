export default function handler(req, res) {
  const clientId = process.env.META_APP_ID;
  const redirectUri = process.env.META_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return res.status(500).json({
      error: "Missing META_APP_ID or META_REDIRECT_URI"
    });
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "ads_read"
  });

  const facebookOAuthUrl =
    `https://www.facebook.com/v18.0/dialog/oauth?${params.toString()}`;

  res.redirect(facebookOAuthUrl);
}
