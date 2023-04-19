const NhanVienModel = require('../models/NhanVien')

const NhanVien = {
    DangKyNhanVien: async (req, res) => {
        const NhanVien = new NhanVienModel(req.body)
        try {
            await NhanVien.save()
            res.status(200).json(NhanVien)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    GetNhanVien: async (req, res) => {
        const NV = await NhanVienModel.find({});
        try {
            res.status(200).json(NV)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    UpdateNhanVien: async (req, res) => {
        try {
            const NV = await NhanVienModel.findByIdAndUpdate(req.params.id, req.body);
            await NV.save();
            res.send(NV);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    DeleteNhanVien: async (req, res) => {
        try {
            const NV = await NhanVienModel.findByIdAndDelete(req.params.id, req.body);
            if (!NV) res.status(404).send("Không tìm thấy dữ liệu");
            res.status(200).send();
        } catch (error) {
            res.status(500).send(error);
        }
    },
    SearchNhanVien: async (req, res) => {
        const data = await NhanVienModel.find({
            "$or": [
                { HOTEN: { $regex: req.params.key, $options: 'i' } }
            ]
        })
        res.send(data)
    }
}

module.exports = NhanVien