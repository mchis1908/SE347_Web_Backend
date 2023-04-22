const ThamSoModel = require("../models/ThamSo");

const ThamSo = {
    DangKyThamSo: async (req, res) => {
        const ThamSo = new ThamSoModel(req.body)
        try {
            await ThamSo.save()
            res.status(200).json(ThamSo)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    get_ThamSo_bytents: async (req, res) => {
        const { ts } = req.params;
            const data = await ThamSoModel.find({ TENTHAMSO: ts })
            res.send(data)
    },
  update_ThamSo: async (req, res) => {
    const { ts } = req.params;
        try {
            const SP = await ThamSoModel.findOneAndUpdate({ TENTHAMSO: ts }, req.body);
            await SP.save();
            res.send(SP);
        } catch (error) {
            res.status(500).send(error);
        }
  }
}

module.exports = ThamSo;
