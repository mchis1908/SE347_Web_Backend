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
    UpdateLuong: async (req, res) => {
        try {
            const NV = await LuongModel.findByIdAndUpdate(req.params.id, req.body);
            await NV.save();
            res.send(NV);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    DeleteLuong: async (req, res) => {
        try {
            const NV = await LuongModel.findByIdAndDelete(req.params.id, req.body);
            if (!NV) res.status(404).send("Không tìm thấy dữ liệu");
            res.status(200).send();
        } catch (error) {
            res.status(500).send(error);
        }
    },
    SearchLuong: async (req, res) => {
        const data = await LuongModel.find({
            "$or": [
                { THOIGIAN: { $regex: req.params.key, $options: 'i' } }
            ]
        })
        res.send(data)
    }
}

module.exports = Luong