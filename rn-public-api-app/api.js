const BASE = "https://jsonplaceholder.typicode.com";

export async function fetchPosts() {
  const res = await fetch(`${BASE}/posts`);
  if (!res.ok) throw new Error("Erro ao buscar posts");
  return res.json();
}

export async function fetchPost(id) {
  const res = await fetch(`${BASE}/posts/${id}`);
  if (!res.ok) throw new Error("Erro ao buscar post");
  return res.json();
}

export async function fetchUser(userId) {
  const res = await fetch(`${BASE}/users/${userId}`);
  if (!res.ok) throw new Error("Erro ao buscar usuário");
  return res.json();
}
