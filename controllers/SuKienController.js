const SuKienModel = require('../models/SuKien')
const moment = require('moment');

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
        try {
            const data = await SuKienModel.find({
                THOIGIANBATDAU: { $lte: thoigian },
                THOIGIANKETTHUC: { $gte: thoigian },
            }).sort({ THOIGIANBATDAU: 1 });
            res.send(data);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    GetSuKienChuaDienRa: async (req, res) => {
        try {
            const currentDate = moment().format('YYYY-MM-DD');
            const data = await SuKienModel.find({
              $or: [
                { THOIGIANKETTHUC: { $gte: currentDate } }, // Mục chưa kết thúc
                { THOIGIANKETTHUC: { $exists: false } },    // Mục không có ngày kết thúc
              ],
            }).sort({ THOIGIANBATDAU: 1 });
            res.send(data);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    GetAllSuKien: async (req, res) => {
        const SK = await SuKienModel.find({}).sort({ THOIGIANBATDAU: 1 });
        try {
            res.status(200).json(SK)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    UpdateSuKien: async (req, res) => {
        const { maSK } = req.params;
        try {
            const suKien = await SuKienModel.findById(maSK);
            if (!suKien) {
            return res.status(404).send({ message: 'SuKien not found' });
            }
            suKien.set(req.body);
            if (req.file) {
            suKien.HINHANH = req.file.path;
            }
            await suKien.save();
            res.send(suKien);
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