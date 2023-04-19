const SanPhamModel = require('../models/SanPham')

const SanPham = {
    DangKySanPham: async (req, res) => {
        const SanPham = new SanPhamModel(req.body)
        if (req.file) {
            SanPham.HINHANH = req.file.path;
          }
        try {
            await SanPham.save()
            res.status(200).json(SanPham)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    GetaProduct: async (req, res) => {
        const { maHD } = req.params;
        const data = await SanPhamModel.find({ MAHOADON: maHD })
        res.send(data)
    },
    GetSanPham: async (req, res) => {
        const SP = await SanPhamModel.find({});
        try {
            res.status(200).json(SP)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    UpdateSanPham: async (req, res) => {
        try {
            const SP = await SanPhamModel.findByIdAndUpdate(req.params.id, req.body);
            await SP.save();
            res.send(SP);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    UpdateSanPhambyMaHD: async (req, res) => {
        const { maHD } = req.params;
        try {
            const SP = await SanPhamModel.updateMany({ MAHOADON: maHD }, req.body);
            await SP.save();
            res.send(SP);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    DeleteSanPham: async (req, res) => {
        try {
            const SP = await SanPhamModel.findByIdAndDelete(req.params.id, req.body);
            if (!SP) res.status(404).send("Không tìm thấy dữ liệu");
            res.status(200).send();
        } catch (error) {
            res.status(500).send(error);
        }
    },
    SearchSanPham: async (req, res) => {
        const data = await SanPhamModel.find({
            "$or": [
                { TENSP: { $regex: req.params.key, $options: 'i' } }
            ]
        })
        res.send(data)
    }
}

module.exports = SanPham