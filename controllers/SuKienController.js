const SuKienModel = require('../models/SuKien')

const SuKien = {
    DangKySuKien: async (req, res) => {
        const SuKien = new SuKienModel(req.body)
        if (req.file) {
            SuKien.HINHANH = req.file.path;
          }
        try {
            await SuKien.save()
            res.status(200).json(SuKien)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    GetSuKienByThoiGian: async (req, res) => {
        const { thoigian } = req.params;
        const data = await SuKienModel.find({ _id: thoigian })
        res.send(data)
    },
    GetAllSuKien: async (req, res) => {
        const SK = await SuKienModel.find({});
        try {
            res.status(200).json(SK)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    GetSuKienById: async (req, res) => {
        const { maSK } = req.params;
        const data = await SuKienModel.findOne({ _id: maSK })
        res.send(data)
    },
    UpdateSuKien: async (req, res) => {
        const { maSK } = req.params;
        try {
            const SP = await SuKienModel.findOneAndUpdate({ _id: maSK }, req.body);
            await SP.save();
            res.send(SP);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    DeleteSuKien: async (req, res) => {
        const {maSK} = req.params;
        try {
          const SK = await SuKienModel.findOneAndDelete({ _id: maSK });
          if (!SK) {
            return res.status(404).json({ message: 'Không tìm thấy sự kiện' });
          }
          return res.status(200).json({ message: 'Xóa sự kiện thành công' });
        } catch (err) {
          console.error(err.message);
          return res.status(500).json({ message: 'Lỗi server' });
        }
    },
}

module.exports = SuKien