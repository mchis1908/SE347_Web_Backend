const KhachHangModel = require('../models/KhachHang')
const moment = require('moment');

const KhachHang = {
    DangKyKhachHang: async (req, res) => {
        const KhachHang = new KhachHangModel(req.body)
        try {
            await KhachHang.save()
            res.status(200).json(KhachHang)
        } catch (error) {
            res.status(502).json(error)
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
    GetKhachHangbySDT: async (req, res) => {
        const { sdt } = req.params;
        const data = await KhachHangModel.find({ SDT: sdt })
        res.send(data)
    },
    UpdateKhachHang: async (req, res) => {
        const { sdt } = req.params;
        try {
            const KH = await KhachHangModel.findOneAndUpdate({ SDT: sdt }, req.body);
            await KH.save();
            res.send(KH);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    DeleteKhachHang: async (req, res) => {
        const { sdt } = req.params;
        try {
            const KH = await KhachHangModel.findOneAndDelete({ SDT: sdt }, req.body);
            await KH.save();
            res.send(KH);
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