const BaoCaoSPNgayModel = require('../models/BaoCaoSPNgay')
const moment = require('moment');

const BaoCaoSPNgay = {
    DangKyBaoCaoSPNgay: async (req, res) => {
        const BaoCaoSPNgay = new BaoCaoSPNgayModel(req.body)
        try {
            await BaoCaoSPNgay.save()
            res.status(200).json(BaoCaoSPNgay)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    GetBaoCaoSPNgay: async (req, res) => {
        const NV = await BaoCaoSPNgayModel.find({});
        try {
            res.status(200).json(NV)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    GetBaoCaoSPNgaybyDay: async (req, res) => {
    const { day } = req.params;
    try {
        const BC = await BaoCaoSPNgayModel.findOne({ THOIGIAN: day }, req.body);
        if (!BC) {
            return res.status(404).json({ message: 'Không tìm thấy báo cáo' });
        }
        res.send(BC);
        } catch (error) {
            res.status(500).send(error);
    }
    },
    GetBaoCaoSPNgaybyMonth: async (req, res) => {
        const { year, month } = req.params;
        
        // Tạo đối tượng moment từ năm và tháng được truyền vào
        const startOfMonth = moment(`${month}-${year}`, 'M-YYYY').startOf('month');
        const endOfMonth = moment(`${month}-${year}`, 'M-YYYY').endOf('month');
        
        try {
            const BC = await BaoCaoSPNgayModel.find({
            THOIGIAN: {
                $gte: startOfMonth.toDate(),
                $lte: endOfMonth.toDate()
            }
            });
        
            if (BC.length === 0) {
            return res.status(404).json({ message: 'Không tìm thấy báo cáo' });
            }
        
            res.send(BC);
        
        } catch (error) {
            res.status(500).send(error);
        }
    },
    UpdateBaoCaoSPNgay: async (req, res) => {
        const { tg } = req.params;
        try {
            const SP = await BaoCaoSPNgayModel.findOneAndUpdate({ THOIGIAN: tg }, req.body);
            if (!SP) {
                return res.status(404).json({ message: 'Không tìm thấy báo cáo' });
              }
            await SP.save();
            res.send(SP);
            // return res.status(200).json(SP);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = BaoCaoSPNgay