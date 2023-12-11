const HoaDonModel = require('../models/HoaDon')

const HoaDon = {
    DangKyHoaDon: async (req, res) => {
        const HoaDon = new HoaDonModel(req.body)
        try {
            await HoaDon.save()
            res.status(200).json(HoaDon)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    GetHoaDon: async (req, res) => {
        const HD = await HoaDonModel.find({});
        try {
            res.status(200).json(HD)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    GetHoaDon_bymahd: async (req, res) => {
        const { maHD } = req.params;
        const data = await HoaDonModel.findOne({ MAHOADON: maHD })
        res.send(data)
    },
    GetHoaDonBanHang_bythoigian: async (req, res) => {
        const { tg } = req.params;
        const data = await HoaDonModel.find({ $and: [{ NGAYTAODON: { $regex: tg, $options: 'i' } }, { LOAI: "Bán hàng" }] });
        if (data.length === 0) {
            return res.status(404).json({ message: 'Không tìm thấy lịch' });
        }
        res.send(data);
    },
    GetHoaDonKyGui_bytrangthai: async (req, res) => {
        const data = await HoaDonModel.find({ TRANGTHAI: "Chưa thanh toán", LOAI:"Ký gửi" })
        res.send(data)
    },
    GetHoaDonByKhachHang: async (req, res) => {
        try {
            const { sdtKhachHang } = req.params;
            const regex = new RegExp(`^${sdtKhachHang}`);
            const data = await HoaDonModel.find({ SDT: { $regex: regex } });
            res.send(data);
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    },
    UpdateHoaDon: async (req, res) => {
        const { maHD } = req.params;
        try {
            const HD = await HoaDonModel.updateMany({ MAHOADON: maHD }, req.body);
            await HD.save();
            res.send(HD);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    DeleteHoaDon: async (req, res) => {
        try {
            const HD = await HoaDonModel.findByIdAndDelete(req.params.id, req.body);
            if (!HD) res.status(404).send("Không tìm thấy dữ liệu");
            res.status(200).send();
        } catch (error) {
            res.status(500).send(error);
        }
    },
    SearchHoaDon: async (req, res) => {
        const { mahd } = req.params;
        try {
          const HD = await HoaDonModel.find({
            $or: [
              { SDT: { $regex: mahd, $options: 'i' } },
              { MAHOADON: { $regex: mahd, $options: 'i' } },
            ],
          });
          res.send(HD);
        } catch (error) {
          res.status(500).send(error);
        }
    },
    GetHoaDonKhachHang: async (req, res) => {
        const { sdtKhachHang } = req.params;
        const searchkey = req.query.searchkey;
        const loai = req.query.loai;
        try {
            const regex = new RegExp(`^${sdtKhachHang}`);
            let query = { SDT: { $regex: regex }};
            if (loai !== '') {
                query.LOAI = loai;
            }
            if (searchkey !== '') {
                query.MAHOADON = { $regex: searchkey, $options: 'i' };
            }
            const HD = await HoaDonModel.find(query);
            res.send(HD);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = HoaDon