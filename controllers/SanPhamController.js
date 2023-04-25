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
    GetSanPhambyMaKyGui: async (req, res) => {
        const { maHD } = req.params;
        const data = await SanPhamModel.find({ MAHOADONKG: maHD })
        res.send(data)
    },
    GetSanPhambyMaBanHang: async (req, res) => {
        const { maHD } = req.params;
        const data = await SanPhamModel.find({ MAHOADONBH: maHD })
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
    GetSanPhambyMaSanPham: async (req, res) => {
        const { maSP } = req.params;
        const data = await SanPhamModel.findOne({ MASANPHAM: maSP })
        res.send(data)
    },
    UpdateSanPham: async (req, res) => {
        const { maSP } = req.params;
        try {
            const SP = await SanPhamModel.findOneAndUpdate({ MASANPHAM: maSP }, req.body);
            await SP.save();
            res.send(SP);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    UpdateSanPhambyMaHDKG: async (req, res) => {
        const { maHD } = req.params;
        try {
            const SP = await SanPhamModel.updateMany({ MAHOADONKG: maHD }, req.body);
            await SP.save();
            res.send(SP);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    DeleteSanPhambymaHD: async (req, res) => {
        const {maHD} = req.params;
        try {
          const sanPham = await SanPhamModel.deleteMany({ MAHOADON: maHD });
          if (!sanPham) {
            return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
          }
          return res.status(200).json({ message: 'Xóa sản phẩm thành công' });
        } catch (err) {
          console.error(err.message);
          return res.status(500).json({ message: 'Lỗi server' });
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