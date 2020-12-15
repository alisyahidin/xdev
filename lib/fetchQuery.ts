const fetchQuery = (query: string) =>
  fetch(
    process.env.NEXT_PUBLIC_API_URI,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    }
  ).then(res => res.json())

export default fetchQuery