const TaiKhoanModel = require('../models/TaiKhoan')

const TaiKhoan = {
    DangKyTaiKhoan: async (req, res) => {
        const taikhoan = new TaiKhoanModel(req.body)
        try {
            await taikhoan.save()
            res.status(200).json(taikhoan)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    GetTaiKhoan: async (req, res) => {
        const TK = await TaiKhoanModel.find({});
        try {
            res.status(200).json(TK)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    UpdateTaiKhoan: async (req, res) => {
        try {
            const TK = await TaiKhoanModel.findByIdAndUpdate(req.params.id, req.body);
            await TK.save();
            res.send(TK);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    DeleteTaiKhoan: async (req, res) => {
        try {
            const TK = await TaiKhoanModel.findByIdAndDelete(req.params.id, req.body);
            if (!TK) res.status(404).send("Không tìm thấy dữ liệu");
            res.status(200).send();
        } catch (error) {
            res.status(500).send(error);
        }
    },
    SearchTaiKhoan: async (req, res) => {
        const data = await TaiKhoanModel.find({
            "$or": [
                { TENTAIKHOAN: { $regex: req.params.key, $options: 'i' } }
            ]
        })
        res.send(data)
    }
}

module.exports = TaiKhoan