const BaoCaoSPNhanBanModel = require('../models/BaoCaoSPNhanBan')

const BaoCaoSPNhanBan = {
    DangKyBaoCaoSPNhanBan: async (req, res) => {
        const BaoCaoSPNhanBan = new BaoCaoSPNhanBanModel(req.body)
        try {
            await BaoCaoSPNhanBan.save()
            res.status(200).json(BaoCaoSPNhanBan)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    GetBaoCaoSPNhanBan: async (req, res) => {
        const NV = await BaoCaoSPNhanBanModel.find({});
        try {
            res.status(200).json(NV)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    UpdateBaoCaoSPNhanBan: async (req, res) => {
        try {
            const NV = await BaoCaoSPNhanBanModel.findByIdAndUpdate(req.params.id, req.body);
            await NV.save();
            res.send(NV);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = BaoCaoSPNhanBan