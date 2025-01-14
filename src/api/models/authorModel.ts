import db from '../../database/db';
import {Author} from '../../types/LocalTypes';

const getAllAuthors = (): Author[] => {
  return db.prepare('SELECT * FROM authors').all() as Author[];
};

export {getAllAuthors};
