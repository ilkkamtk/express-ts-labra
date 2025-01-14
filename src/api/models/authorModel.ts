import db from '../../database/db';
import {Author} from '../../types/LocalTypes';

const getAllAuthors = (): Author[] => {
  return db.prepare('SELECT * FROM authors').all() as Author[];
};

const getAuthor = (id: number | bigint): Author => {
  const result = db
    .prepare('SELECT * FROM authors WHERE id = ?')
    .get(id) as Author;
  if (!result) {
    throw new Error('Author not found');
  }
  return result;
};

const createAuthor = (author: Omit<Author, 'id'>): Author => {
  const stmt = db
    .prepare('INSERT INTO authors (name, email) VALUES (?, ?)')
    .run(author.name, author.email);
  if (!stmt.lastInsertRowid) {
    throw new Error('Failed to insert author');
  }
  return getAuthor(stmt.lastInsertRowid);
};

export {getAllAuthors, getAuthor, createAuthor};
