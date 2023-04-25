const BaoCaoHDNgayModel = require('../models/BaoCaoHDNgay')

const BaoCaoHDNgay = {
    DangKyBaoCaoHDNgay: async (req, res) => {
        const BaoCaoHDNgay = new BaoCaoHDNgayModel(req.body)
        try {
            await BaoCaoHDNgay.save()
            res.status(200).json(BaoCaoHDNgay)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    GetBaoCaoHDNgay: async (req, res) => {
        const NV = await BaoCaoHDNgayModel.find({});
        try {
            res.status(200).json(NV)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    UpdateBaoCaoHDNgay: async (req, res) => {
        try {
            const NV = await BaoCaoHDNgayModel.findByIdAndUpdate(req.params.id, req.body);
            await NV.save();
            res.send(NV);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = BaoCaoHDNgay