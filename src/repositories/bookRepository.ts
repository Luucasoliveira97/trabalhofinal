import { Pool } from 'pg';
import database from '../config/database';
import { typeBook } from '../models/userModel';

export class BookRepository {
  private database: Pool;

  constructor() {
    this.database = database;
  }

  async addBook(nome: string, descricao: string, preco: string, autor: string): Promise<typeBook> {
    const queryText = `INSERT INTO bookstation (nome, descricao, preco, autor) VALUES ($1, $2, $3, $4) RETURNING *`;
    const { rows } = await this.database.query(queryText, [nome, descricao, preco, autor]);
    return rows[0];
  }

  async getAllBooks(): Promise<typeBook[]> {
    const { rows } = await this.database.query('SELECT id,nome,descricao,preco,autor FROM bookstation');
    return rows;
  }

  async deleteBook(id: number): Promise<typeBook> {
    const queryText = 'DELETE FROM bookstation WHERE id = $1 RETURNING *';
    const { rows } = await this.database.query(queryText, [id]);
    return rows[0];
  }

  async updateBook(id: number,nome: string,descricao: string,preco: string,autor: string): Promise<typeBook> {
    const queryText = `UPDATE bookstation SET nome = $1, descricao = $2, preco = $3, autor = $4 WHERE id = $5 RETURNING *`;
    const { rows } = await this.database.query(queryText, [nome, descricao, preco, autor, id]);
    return rows[0];
  }
}
