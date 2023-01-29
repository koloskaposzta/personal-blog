export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('hu-EU', {
    timeZone: 'CET',
  });
}

export function formatBlogPosts(
  posts,
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
  } = {}
) {
  const filtered = posts.reduce((acc, post) => {
    const { date, draft } = post.data;
    if (filterOutDrafts && draft) return acc;
    if (filterOutFuturePosts && new Date(date) > new Date()) return acc;
    acc.push(post);

    return acc;
  }, []);

  if (sortByDate) {
    filtered.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  } else {
    filtered.sort(() => Math.random() - 0.5);
  }

  if (!isNaN(limit)) {
    return filtered.slice(0, limit);
  }
  return filtered;
}
