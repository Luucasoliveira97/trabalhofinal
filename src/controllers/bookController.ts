import { Request, Response } from 'express';
import { BookService } from '../services/bookService';

const bookService = new BookService();

export const getbook = async (req: Request, res: Response) => {
  try {
    const books = await bookService.getbook();
    res.status(200).json(books);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const register = async (req: Request, res: Response) => {
  const { nome, descricao, preco, autor } = req.body;
  try {
    const book = await bookService.register(nome, descricao, preco, autor);
    res.status(201).json(book);
  } catch (err:any) {
    if(err.message === 'nome invalido'){
      res.status(400).json({ error: err.message });
    }else{
      res.status(500).json({ error: err.message });
    }
  }
};

export const deletebook = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await bookService.deletebook(Number(id));
    res.status(204).send();
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const updatebook = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { nome, descricao, preco, autor } = req.body;
  try {
    const updatedBook = await bookService.updatebook(Number(id), nome, descricao, preco, autor);
    res.json(updatedBook);
  } catch (err:any) {
    if(err.message === 'nome invalido'){
      res.status(400).json({ error: err.message });
    }else{
      res.status(500).json({ error: err.message });
    }
  }
};
