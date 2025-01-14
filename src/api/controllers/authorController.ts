import {NextFunction, Request, Response} from 'express';
import {Author} from '../../types/LocalTypes';
import CustomError from '../../classes/CustomError';
import {getAllAuthors} from '../models/authorModel';

const authorsGet = (
  req: Request,
  res: Response<Author[]>,
  next: NextFunction,
) => {
  try {
    const authors = getAllAuthors();
    res.send(authors);
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
    return;
  }
};

export {authorsGet};
