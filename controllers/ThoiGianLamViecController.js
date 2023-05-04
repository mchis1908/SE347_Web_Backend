const ThoiGianLamViecModel = require('../models/ThoiGianLamViec')

const ThoiGianLamViec = {
    DangKyThoiGianLamViec: async (req, res) => {
        const ThoiGianLamViec = new ThoiGianLamViecModel(req.body)
        try {
            await ThoiGianLamViec.save()
            res.status(200).json(ThoiGianLamViec)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    GetThoiGianLamViec: async (req, res) => {
        const NV = await ThoiGianLamViecModel.find({});
        try {
            res.status(200).json(NV)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    GetThoiGianLamViecbyThoiGian: async (req, res) => {
        const { tg } = req.params;
        try {
            const BC = await ThoiGianLamViecModel.find({ THOIGIAN: { $regex: `${tg}$` } }, req.body);
            if (BC.length === 0) {
                return res.status(404).json({ message: 'Không tìm thấy lịch' });
            }
            res.send(BC);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    UpdateThoiGianLamViec: async (req, res) => {
        const { tg } = req.params;
        try {
            const BC = await ThoiGianLamViecModel.findOneAndUpdate({ THOIGIAN: { $regex: `${tg}$` } }, req.body);
            await BC.save();
            // if (BC.length === 0) {
            //     return res.status(404).json({ message: 'Không tìm thấy lịch' });
            // }
            res.send(BC);
        } catch (error) {
            res.status(500).send(error);
        }
    },
}

module.exports = ThoiGianLamViec