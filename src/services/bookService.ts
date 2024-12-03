import { BookRepository } from '../repositories/bookRepository';
import {isValidName} from '../helpers/validationHelper';
import { error } from 'console';

export class BookService {
  private bookRepository: BookRepository;

  constructor() {
    this.bookRepository = new BookRepository();
  }

  async getbook() {
    try{
      const response =  await this.bookRepository.getAllBooks();
      return response;
    } catch(err:any){
      throw new Error(err.message || "unknown error");
    }
  }

  async register(nome: string, descricao: string, preco: string, autor: string) {
    if (!isValidName(nome)){
      throw new Error('nome invalido')
    }
    try{
      const response = await this.bookRepository.addBook(nome, descricao, preco, autor);
      return response;
    } catch(err:any){
      throw new Error(err.message || "unknown error");
    }
  }
  
  async deletebook(id: number) {
    try{
      const response = await this.bookRepository.deleteBook(id);
      return response;
    } catch(err:any){
      throw new Error(err.message || "unknown error");
    }
  }

  async updatebook(id: number, nome: string, descricao: string, preco: string, autor: string) {
    if (!isValidName(nome)){
      throw new Error('nome invalido')
    }
    try{
      const response = await this.bookRepository.updateBook(id, nome, descricao, preco, autor); 
      return response;
    } catch (err:any){
      throw new Error(err.message || "unknown error");
    }
  }
}