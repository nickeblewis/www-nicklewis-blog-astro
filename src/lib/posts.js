import { getReadingTime } from './readingtime.js';

async function load() {
  const fetchedPosts = import.meta.globEager('../pages/posts/*.md');

  // const nonDraftPosts = posts.filter((post) => !post.frontmatter.draft);
  
  const getPost = async (key) => {
    const url = key.replace('../pages/', '/').replace('.md', '/');
    const awaitedPost = await fetchedPosts[key].default();
    const item = { ...awaitedPost.frontmatter, url, key };
    const [numberOfWords, readingTime] = getReadingTime(
      awaitedPost.metadata.html
    );
    item.numberOfWords = numberOfWords;
    item.readingTime = readingTime;
console.log(item.draft)
    return item;
  };

  const mappedPosts = Object.keys(fetchedPosts).map((key) => {
    const awaitedPost = getPost(key);
    return awaitedPost;
  });

  const results = await Promise.all(mappedPosts);  
  return results;
}

let _posts;

export async function getAllPosts() {
  _posts = _posts || load();

  return await _posts;
}