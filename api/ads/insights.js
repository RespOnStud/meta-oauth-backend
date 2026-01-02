// /api/ads/insights.js

export default async function handler(req, res) {
  const accessToken = req.query.access_token;

  if (!accessToken) {
    return res.status(400).json({ error: "Missing access_token" });
  }

  // 1. Получаем рекламные аккаунты
  const accountsResp = await fetch(
    `https://graph.facebook.com/v18.0/me/adaccounts?access_token=${accessToken}`
  );

  const accountsData = await accountsResp.json();

  const adAccountId = accountsData?.data?.[0]?.id;

  if (!adAccountId) {
    return res.status(400).json({ error: "No ad accounts found" });
  }

  // 2. Получаем инсайты
  const insightsResp = await fetch(
    `https://graph.facebook.com/v18.0/${adAccountId}/insights?fields=impressions,clicks,spend&access_token=${accessToken}`
  );

  const insightsData = await insightsResp.json();

  // 3. Возвращаем результат
  res.json({
    ad_account: adAccountId,
    insights: insightsData.data?.[0] || {}
  });
}
