const BaoCaoDTThangModel = require('../models/BaoCaoDTThang')

const BaoCaoDTThang = {
    DangKyBaoCaoDTThang: async (req, res) => {
        const BaoCaoDTThang = new BaoCaoDTThangModel(req.body)
        try {
            await BaoCaoDTThang.save()
            res.status(200).json(BaoCaoDTThang)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    GetBaoCaoDTThang: async (req, res) => {
        const NV = await BaoCaoDTThangModel.find({});
        try {
            res.status(200).json(NV)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    UpdateBaoCaoDTThang: async (req, res) => {
        try {
            const NV = await BaoCaoDTThangModel.findByIdAndUpdate(req.params.id, req.body);
            await NV.save();
            res.send(NV);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = BaoCaoDTThang