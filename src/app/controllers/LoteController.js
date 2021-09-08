const { Lote } = require('../models');

class LoteController {
  async index(req, res) {
    try {
      const lotes = await Lote.findAll();

      return res.json(lotes);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const lote = await Lote.findByPk(req.params.id);

      return res.json(lote);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
         
      console.log('entrou no store do lote:')
      console.log(req.body)
        const lote = await Lote.create(req.body);
      
      console.log('SALVOU:')  

      return res.json(lote);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const lote = await Lote.findByPk(req.params.id);

      await lote.update(req.body);

      return res.json({ lote });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const lote = await Lote.findByPk(req.params.id);
      

      await lote.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new LoteController();