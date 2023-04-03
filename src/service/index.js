
export async function applyInvitation (data) {
  const res = await fetch('https://gameapi.genkicats.com:8000/api/v1/users/invitation/apply',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(data)
  })
  return res.json()
}
