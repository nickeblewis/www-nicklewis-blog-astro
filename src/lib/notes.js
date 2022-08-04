import { getReadingTime } from './readingtime.js';

async function load() {
  const fetchedNotes = import.meta.globEager('../pages/notes/*.md');

  const getNote = async (key) => {
    const url = key.replace('../pages/', '/').replace('.md', '/');
    const awaitedNote = await fetchedNotes[key].default();
    const item = { ...awaitedNote.frontmatter, url, key };
    const [numberOfWords, readingTime] = getReadingTime(
      awaitedNote.metadata.html
    );
    item.numberOfWords = numberOfWords;
    item.readingTime = readingTime;

    return item;
  };

  const mappedNotes = Object.keys(fetchedNotes).map((key) => {
    const awaitedNote = getNote(key);
    return awaitedNote;
  });

  const results = await Promise.all(mappedNotes);
  return results;
}

let _notes;

export async function getAllNotes() {
  _notes = _notes || load();

  return await _notes;
}
