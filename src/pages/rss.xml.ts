import rss from '@astrojs/rss';
import { getCollection, CollectionEntry } from 'astro:content';
import { formatBlogPosts } from '../js/util';
const postImportResult = await getCollection('blog'); //import.meta.glob('./blog/**/*.md', { eager: true });
const posts: CollectionEntry<'blog'>[] =
  formatBlogPosts(postImportResult);

export const get = () =>
  rss({
    stylesheet: '/rss/styles.xsl',
    title: "Kolos's Blog",
    description: 'A humble Astronaut’s guide to the stars',
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: `/blog/${post.slug}`,
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      customData: `<author>Kolos Kaposzta</author>`,
    })),
  });
