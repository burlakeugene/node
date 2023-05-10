import db from '../db/index';

class Controller {
  async create(req: any, res: any) {
    const { name } = req.body;

    const result = await db.query(
      `INSERT INTO users (name) values ($1) RETURNING *`,
      [name]
    );

    res.status(200).json(result.rows[0]);
  }
  async get(req: any, res: any) {
    const result = await db.query('SELECT * from users');
    res.status(200).json(result.rows);
  }
}

export default new Controller();
