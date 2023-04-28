const BaoCaoSPThangModel = require('../models/BaoCaoSPThang')

const BaoCaoSPThang = {
    DangKyBaoCaoSPThang: async (req, res) => {
        const BaoCaoSPThang = new BaoCaoSPThangModel(req.body)
        try {
            await BaoCaoSPThang.save()
            res.status(200).json(BaoCaoSPThang)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    GetBaoCaoSPThangbyMonth: async (req, res) => {
        const { month } = req.params;
        try {
            const BC = await BaoCaoSPThangModel.findOne({ THOIGIAN: month }, req.body);
            if (!BC) {
                return res.status(404).json({ message: 'Không tìm thấy báo cáo' });
            }
            res.send(BC);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    UpdateBaoCaoSPThang: async (req, res) => {
        const { tg } = req.params;
        try {
            const SP = await BaoCaoSPThangModel.findOneAndUpdate({ THOIGIAN: tg }, req.body);
            if (!SP) {
                return res.status(404).json({ message: 'Không tìm thấy báo cáo' });
              }
            await SP.save();
            res.send(SP);
            // return res.status(200).json(SP);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = BaoCaoSPThang