const TaiKhoanModel = require('../models/TaiKhoan')

const TaiKhoan = {
    DangKyTaiKhoan: async (req, res) => {
        const taikhoan = new TaiKhoanModel(req.body)
        try {
            await taikhoan.save()
            res.status(200).json(taikhoan)
        } catch (error) {
            res.status(501).json(error)
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
    DeleteTaiKhoanbySDT: async (req, res) => {
        const {sdt} = req.params;
        try {
          const SoDienThoai = await TaiKhoanModel.findOneAndDelete({ SDT: sdt });
          if (!SoDienThoai) {
            return res.status(404).json({ message: 'Không tìm thấy tài khoản' });
          }
          return res.status(200).json({ message: 'Xóa tài khoản thành công' });
        } catch (err) {
          console.error(err.message);
          return res.status(500).json({ message: 'Lỗi server' });
        }
    },
    SearchTaiKhoan: async (req, res) => {
        const data = await TaiKhoanModel.find({
            "$or": [
                { TENTAIKHOAN: { $regex: req.params.key, $options: 'i' } }
            ]
        })
        res.send(data)
    },
    SearchTaiKhoanbysk: async (req, res) => {
        const { sk } = req.params;
        try {
          const tk = await TaiKhoanModel.find({
            $or: [
              { TENTAIKHOAN: { $regex: sk, $options: 'i' } },
              { TENNV: { $regex: sk, $options: 'i' } },
            ],
          });
          res.send(tk);
        } catch (error) {
          res.status(500).send(error);
        }
    }
}

module.exports = TaiKhoan