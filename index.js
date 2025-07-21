export async function fetch(request) {
  // Proxy the Datadog status API response
  const response = await fetch('https://status.datadoghq.eu/api/v2/status.json');

  // Get the response body text
  const data = await response.text();

  // Return response with CORS headers added
  return new Response(data, {
    status: response.status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
