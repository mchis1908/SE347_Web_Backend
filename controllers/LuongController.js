const LuongModel = require('../models/Luong')

const Luong = {
    DangKyLuong: async (req, res) => {
        const Luong = new LuongModel(req.body)
        try {
            await Luong.save()
            res.status(200).json(Luong)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    GetLuong: async (req, res) => {
        const NV = await LuongModel.find({});
        try {
            res.status(200).json(NV)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    GetLuongbyThoiGian: async (req, res) => {
        const { tg } = req.params;
        try {
            const BC = await LuongModel.find({ THOIGIAN: { $regex: `${tg}$` } }, req.body);
            if (BC.length === 0) {
                return res.status(404).json({ message: 'Không tìm thấy lịch' });
            }
            res.send(BC);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    UpdateLuong: async (req, res) => {
        const { tg } = req.params;
        try {
            const BC = await LuongModel.findOneAndUpdate({ THOIGIAN: { $regex: `${tg}$` } }, req.body);
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

module.exports = Luong