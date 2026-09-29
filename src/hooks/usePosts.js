import { useState, useEffect, useCallback } from "react";
import { fetchPosts } from "../services/postsService";

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  const refetch = useCallback(() => {
    setLoading(true);
    setError(null);
    setReloadKey((k) => k + 1);
  }, []);

  useEffect(() => {
    let mounted = true;

    fetchPosts()
      .then((data) => {
        if (mounted) {
          setPosts(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err.message || "حدث خطأ غير متوقع أثناء جلب المقالات.");
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [reloadKey]);

  return { posts, loading, error, refetch };
}

export default usePosts;
