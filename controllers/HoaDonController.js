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
        const data = await HoaDonModel.find({
            "$or": [
                { MAHOADON: { $regex: req.params.key, $options: 'i' } }
            ]
        })
        res.send(data)
    }
}

module.exports = HoaDon