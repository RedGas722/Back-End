const getAccessToken = async () => {
    const clientId = process.env.PAYPAL_CLIENT_ID!;
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET!;
    const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  
    const res = await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
      method: "POST",
      headers: {
        "Authorization": `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });
  
    const data = await res.json();
    return data.access_token;
  };

  export default getAccessToken;
  