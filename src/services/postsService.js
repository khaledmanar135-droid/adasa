import fallbackPosts from "../Component/data/posts";

export async function fetchPosts() {
  await new Promise((r) => setTimeout(r, 300));

  try {
    const res = await fetch("/data/posts.json");
    if (!res.ok) {
      throw new Error(`فشل تحميل المقالات: ${res.status}`);
    }
    const data = await res.json();
    return Array.isArray(data) ? data : data.posts || fallbackPosts;
  } catch (err) {
    if (Array.isArray(fallbackPosts) && fallbackPosts.length > 0) {
      return fallbackPosts;
    }
    throw new Error(err.message || "حدث خطأ أثناء جلب المقالات", {
      cause: err,
    });
  }
}

export async function fetchPostById(id) {
  const posts = await fetchPosts();
  const post = posts.find((p) => String(p.id) === String(id));

  if (!post) {
    throw new Error(`لم يتم العثور على المقال رقم ${id}`);
  }

  return post;
}
