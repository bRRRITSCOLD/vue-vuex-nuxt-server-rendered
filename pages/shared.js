import axios from 'axios'

export async function fetchData ({ store, redirect, isClient }) {
  if (isClient) return
  try {
    const res = await axios.get('https://todos-api-twvmdqicmt.now.sh/todos')
    store.commit('init', res.data)
  } catch (err) {
    redirect('/error')
  }
}
