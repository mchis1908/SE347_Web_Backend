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
    GetBaoCaoDTThangbyDay: async (req, res) => {
        const { day } = req.params;
        try {
            const BC = await BaoCaoDTThangModel.findOne({ THOIGIAN: day }, req.body);
            if (!BC) {
                return res.status(404).json({ message: 'Không tìm thấy báo cáo' });
            }
            res.send(BC);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    GetBaoCaoDTThangbyYear: async (req, res) => {
        const { year } = req.params;
        try {
            const BC = await BaoCaoDTThangModel.find({ THOIGIAN: { $regex: `${year}$` } }, req.body);
            if (!BC) {
                return res.status(404).json({ message: 'Không tìm thấy báo cáo' });
            }
            res.send(BC);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    UpdateBaoCaoDTThang: async (req, res) => {
        const { tg } = req.params;
        try {
            const SP = await BaoCaoDTThangModel.findOneAndUpdate({ THOIGIAN: tg }, req.body);
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

module.exports = BaoCaoDTThang