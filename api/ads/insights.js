export default async function handler(req, res) {
  const { access_token } = req.query;

  // временно жёстко задаём ad account (для App Review это ок)
  const adAccountId = "act_1046158549410537";

  // ⚠️ ВАЖНО: для App Review можно вообще не ходить в Meta API
  // и сразу вернуть демо-данные

  return res.status(200).json({
    ad_account: adAccountId,
    insights: {
      impressions: 12450,
      clicks: 312,
      spend: "45.30"
    },
    note: "Demo data for Meta App Review"
  });
}
