const KhachHangModel = require('../models/KhachHang')

const KhachHang = {
    DangKyKhachHang: async (req, res) => {
        const KhachHang = new KhachHangModel(req.body)
        try {
            await KhachHang.save()
            res.status(200).json(KhachHang)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    GetKhachHang: async (req, res) => {
        const KH = await KhachHangModel.find({});
        try {
            res.status(200).json(KH)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    UpdateKhachHang: async (req, res) => {
        try {
            const KH = await KhachHangModel.findByIdAndUpdate(req.params.id, req.body);
            await KH.save();
            res.send(KH);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    DeleteKhachHang: async (req, res) => {
        try {
            const KH = await KhachHangModel.findByIdAndDelete(req.params.id, req.body);
            if (!KH) res.status(404).send("Không tìm thấy dữ liệu");
            res.status(200).send();
        } catch (error) {
            res.status(500).send(error);
        }
    },
    SearchKhachHang: async (req, res) => {
        const data = await KhachHangModel.find({
            "$or": [
                { HOTEN: { $regex: req.params.key, $options: 'i' } }
            ]
        })
        res.send(data)
    }
}

module.exports = KhachHang