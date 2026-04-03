// Demo Data với cấu trúc THU/CHI chuẩn hóa
const demoData = {
    projects: [
        { id: 'P001', name: 'DA Alpha', budgetThuTotal: 120, budgetChiTotal: 80, actualThu: 115, actualChi: 78 },
        { id: 'P002', name: 'DA Beta', budgetThuTotal: 110, budgetChiTotal: 75, actualThu: 106, actualChi: 70 },
        { id: 'P003', name: 'DA Gamma', budgetThuTotal: 105, budgetChiTotal: 70, actualThu: 98, actualChi: 66 }
    ],

    // FHI data per project (Thu/Chi ratio)
    projectFHI: [
        { name: 'DA Alpha', fhi: 1.47 },
        { name: 'DA Beta', fhi: 1.51 },
        { name: 'DA Gamma', fhi: 1.48 },
        { name: 'DA Delta', fhi: 1.12 },
        { name: 'DA Epsilon', fhi: 0.95 },
        { name: 'DA Zeta', fhi: 1.28 },
        { name: 'DA Eta', fhi: 1.05 },
        { name: 'DA Theta', fhi: 0.88 }
    ],
    fhiThreshold: 1.0, // Ngưỡng FHI tiêu chuẩn

    // Hạng mục THU - Chuẩn hóa theo bảng chi tiết
    thuItems: [
        { code: 'THU.01', name: 'THU.01 - Thu từ Chủ Đầu Tư', shortName: 'Thu từ Chủ ĐT', level: 1 },
        { code: 'THU.02', name: 'THU.02 - Thu Hoạt Động Tài Chính', shortName: 'Thu HĐ Tài chính', level: 1 },
        { code: 'THU.03', name: 'THU.03 - Thu từ Nguồn Khác', shortName: 'Thu Nguồn khác', level: 1 },
        { code: 'THU.04', name: 'THU.04 - Thu Khác', shortName: 'Thu Khác', level: 1 }
    ],

    thuItemsLevel2: [
        { code: 'THU.01.01', name: 'THU.01.01 - Tư vấn', parent: 'THU.01', level: 2 },
        { code: 'THU.01.02', name: 'THU.01.02 - Rao sự', parent: 'THU.01', level: 2 },
        { code: 'THU.01.03', name: 'THU.01.03 - Bản quyền & Khác', parent: 'THU.01', level: 2 }
    ],

    // Hạng mục CHI - Chuẩn hóa theo bảng chi tiết
    chiItems: [
        { code: 'CHI.01', name: 'CHI.01 - Chi cho pháp lý dự án', shortName: 'Pháp lý', level: 1 },
        { code: 'CHI.02', name: 'CHI.02 - Chi cho kiến thiết cơ bản', shortName: 'Kiến thiết', level: 1 },
        { code: 'CHI.03', name: 'CHI.03 - Chi cho công tác bán hàng', shortName: 'Bán hàng', level: 1 },
        { code: 'CHI.04', name: 'CHI.04 - Chi công tác chuẩn bị', shortName: 'Chuẩn bị', level: 1 },
        { code: 'CHI.05', name: 'CHI.05 - Chi công tác thiết bị', shortName: 'Thiết bị', level: 1 },
        { code: 'CHI.06', name: 'CHI.06 - Chi nhân công & thầu phụ', shortName: 'Nhân công', level: 1 },
        { code: 'CHI.07', name: 'CHI.07 - Chi vật tư & NCC', shortName: 'Vật tư', level: 1 },
        { code: 'CHI.08', name: 'CHI.08 - Chi cho hoạt động trực tiếp', shortName: 'HĐ trực tiếp', level: 1 }
    ],

    chiItemsLevel2: [
        { code: 'CHI.01.10', name: 'CHI.01.10 - Hồ sơ pháp lý dự án', parent: 'CHI.01', level: 2 },
        { code: 'CHI.01.20', name: 'CHI.01.20 - Phí giấy phép xây dựng', parent: 'CHI.01', level: 2 }
    ],

    chiItemsLevel3: [
        { code: 'CHI.06.30', name: 'CHI.06.30 - Gói thầu kết cấu', shortName: 'Gói thầu KC', parent: 'CHI.06', level: 3 },
        { code: 'CHI.06.40', name: 'CHI.06.40 - Gói thầu hoàn thiện', parent: 'CHI.06', level: 3 }
    ],

    chiItemsLevel4: [
        { code: 'CHI.06.30.31', name: 'CHI.06.30.31 - Gói thầu kết cấu A', shortName: 'Gói thầu KC A', parent: 'CHI.06.30', level: 4 },
        { code: 'CHI.06.30.32', name: 'CHI.06.30.32 - Gói thầu kết cấu B', parent: 'CHI.06.30', level: 4 },
        { code: 'CHI.06.40.06', name: 'CHI.06.40.06 - Gói thầu A', parent: 'CHI.06.40', level: 4 }
    ],

    versions: {
        thu: { banDau: [42, 23, 12, 8], ganNhat: [45.2, 25, 15, 9], dieuChinh: [48.5, 27, 16.5, 10] },
        chi: { banDau: [1.5, 14.8, 10.3, 7.8, 12, 28.1, 16, 8.5], ganNhat: [1.6, 15.2, 10.8, 8.2, 12.5, 29, 16.5, 9], dieuChinh: [1.7, 15.8, 11.2, 8.5, 13, 30, 17, 9.5] }
    },

    months: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
    approval: { before: { chi: 4.85, vdu: 2.73, fhi: 1.25 }, after: { chi: 5.23, vdu: 2.85, fhi: 1.18 } }
};

let currentBudgetType = 'total', charts = {};

// Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(l => l.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    event.currentTarget.classList.add('active');
    setTimeout(() => Object.values(charts).forEach(c => c && c.resize()), 100);
}

function toggleBudgetType(type, btn) {
    currentBudgetType = type;
    btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderBudgetTables();
}

function switchVersion(type, ver, btn) {
    btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (type === 'thu') renderBarThuTotal(ver);
    else renderBarChiTotal(ver);
}

function toggleMultiSelect(el) {
    document.querySelectorAll('.multi-select').forEach(m => m !== el && m.classList.remove('open'));
    el.classList.toggle('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', e => {
    if (!e.target.closest('.multi-select')) document.querySelectorAll('.multi-select').forEach(m => m.classList.remove('open'));
});

// Page 4 Charts (Quản Lý Ngân Sách)
// Budget management data
const budgetMgmtData = {
    projects: [
        {
            id: 'L59', name: 'L59',
            items: [
                { code: 'THU01', nganSach: 85.0, hd: 82.5, sl: [6.5, 7.2, 7.8, 8.0, 8.5, 9.0, 8.8, 8.2, 7.5, 6.8, 0, 0], bill: [6.0, 6.8, 7.5, 7.8, 8.2, 8.5, 8.5, 7.8, 7.0, 6.5, 0, 0], nhanTT: [5.5, 6.2, 7.0, 7.2, 7.8, 8.0, 8.0, 7.2, 6.5, 0, 0, 0], congNo: 5.8, overdueDays: 0 },
                { code: 'THU02', nganSach: 22.5, hd: 20.0, sl: [1.8, 1.9, 2.0, 2.1, 2.0, 1.9, 1.8, 1.7, 1.6, 1.5, 0, 0], bill: [1.5, 1.7, 1.8, 1.9, 1.8, 1.7, 1.6, 1.5, 1.4, 1.3, 0, 0], nhanTT: [1.2, 1.5, 1.6, 1.7, 1.6, 1.5, 1.4, 1.3, 0, 0, 0, 0], congNo: 2.4, overdueDays: 12 },
                { code: 'THU03', nganSach: 8.0, hd: 7.5, sl: [0.5, 0.6, 0.7, 0.7, 0.8, 0.8, 0.7, 0.6, 0.5, 0.5, 0, 0], bill: [0.4, 0.5, 0.6, 0.6, 0.7, 0.7, 0.6, 0.5, 0.4, 0.4, 0, 0], nhanTT: [0.3, 0.4, 0.5, 0.5, 0.6, 0.6, 0.5, 0.4, 0, 0, 0, 0], congNo: 0.8, overdueDays: 0 },
                { code: 'CHI01', nganSach: 2.5, hd: 2.3, sl: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 },
                { code: 'CHI02', nganSach: 18.5, hd: 17.8, sl: [1.5, 1.6, 1.7, 1.8, 1.8, 1.9, 1.8, 1.7, 1.6, 1.5, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 },
                { code: 'CHI03', nganSach: 12.0, hd: 11.5, sl: [1.0, 1.1, 1.1, 1.2, 1.2, 1.2, 1.1, 1.0, 0.9, 0.8, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 },
                { code: 'CHI04', nganSach: 8.2, hd: 7.8, sl: [0.6, 0.7, 0.7, 0.8, 0.8, 0.8, 0.7, 0.6, 0.5, 0.5, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 },
                { code: 'CHI05', nganSach: 15.0, hd: 14.2, sl: [1.2, 1.3, 1.4, 1.4, 1.5, 1.5, 1.4, 1.3, 1.2, 1.1, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 },
                { code: 'CHI06', nganSach: 32.0, hd: 30.5, sl: [2.5, 2.8, 3.0, 3.2, 3.4, 3.5, 3.3, 3.0, 2.8, 2.5, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 },
                { code: 'CHI07', nganSach: 20.0, hd: 19.0, sl: [1.6, 1.7, 1.8, 1.9, 2.0, 2.0, 1.9, 1.8, 1.7, 1.5, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 },
                { code: 'CHI08', nganSach: 10.5, hd: 10.0, sl: [0.8, 0.9, 0.9, 1.0, 1.0, 1.0, 0.9, 0.8, 0.7, 0.7, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 },
                { code: 'CHI09', nganSach: 5.5, hd: 5.2, sl: [0.4, 0.5, 0.5, 0.5, 0.5, 0.5, 0.4, 0.4, 0.3, 0.3, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 }
            ]
        },
        {
            id: 'GSW', name: 'GSW',
            items: [
                { code: 'THU01', nganSach: 65.0, hd: 62.0, sl: [5.0, 5.5, 5.8, 6.0, 6.2, 6.5, 6.3, 5.8, 5.5, 5.0, 0, 0], bill: [4.5, 5.0, 5.5, 5.8, 6.0, 6.2, 6.0, 5.5, 5.0, 4.5, 0, 0], nhanTT: [4.0, 4.5, 5.0, 5.2, 5.5, 5.8, 5.5, 5.0, 0, 0, 0, 0], congNo: 4.5, overdueDays: 5 },
                { code: 'THU02', nganSach: 18.0, hd: 16.5, sl: [1.2, 1.3, 1.4, 1.5, 1.5, 1.6, 1.5, 1.4, 1.3, 1.2, 0, 0], bill: [1.0, 1.1, 1.2, 1.3, 1.3, 1.4, 1.3, 1.2, 1.1, 1.0, 0, 0], nhanTT: [0.8, 0.9, 1.0, 1.1, 1.1, 1.2, 1.1, 1.0, 0, 0, 0, 0], congNo: 1.8, overdueDays: 0 },
                { code: 'THU03', nganSach: 5.5, hd: 5.0, sl: [0.3, 0.4, 0.4, 0.5, 0.5, 0.5, 0.4, 0.4, 0.3, 0.3, 0, 0], bill: [0.3, 0.3, 0.4, 0.4, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0, 0], nhanTT: [0.2, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0, 0, 0, 0, 0], congNo: 0.5, overdueDays: 0 },
                { code: 'CHI01', nganSach: 1.8, hd: 1.6, sl: [0.1, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.1, 0.1, 0.1, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 },
                { code: 'CHI02', nganSach: 14.0, hd: 13.2, sl: [1.1, 1.2, 1.3, 1.3, 1.4, 1.4, 1.3, 1.2, 1.1, 1.0, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 },
                { code: 'CHI03', nganSach: 9.5, hd: 9.0, sl: [0.7, 0.8, 0.8, 0.9, 0.9, 0.9, 0.8, 0.7, 0.7, 0.6, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 },
                { code: 'CHI04', nganSach: 6.0, hd: 5.5, sl: [0.4, 0.5, 0.5, 0.6, 0.6, 0.6, 0.5, 0.4, 0.4, 0.3, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 },
                { code: 'CHI05', nganSach: 11.0, hd: 10.5, sl: [0.8, 0.9, 1.0, 1.0, 1.1, 1.1, 1.0, 0.9, 0.8, 0.7, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 },
                { code: 'CHI06', nganSach: 25.0, hd: 23.5, sl: [1.8, 2.0, 2.2, 2.4, 2.5, 2.6, 2.4, 2.2, 2.0, 1.8, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 },
                { code: 'CHI07', nganSach: 15.0, hd: 14.2, sl: [1.1, 1.2, 1.3, 1.4, 1.5, 1.5, 1.4, 1.3, 1.2, 1.1, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 },
                { code: 'CHI08', nganSach: 8.0, hd: 7.5, sl: [0.6, 0.6, 0.7, 0.7, 0.7, 0.8, 0.7, 0.6, 0.5, 0.5, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 },
                { code: 'CHI09', nganSach: 4.0, hd: 3.8, sl: [0.3, 0.3, 0.3, 0.4, 0.4, 0.4, 0.3, 0.3, 0.2, 0.2, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 }
            ]
        },
        {
            id: 'VHG', name: 'VHG',
            items: [
                { code: 'THU01', nganSach: 45.0, hd: 42.0, sl: [3.5, 3.8, 4.0, 4.2, 4.5, 4.5, 4.2, 3.8, 3.5, 3.2, 0, 0], bill: [3.2, 3.5, 3.8, 4.0, 4.2, 4.2, 3.8, 3.5, 3.2, 2.8, 0, 0], nhanTT: [2.8, 3.2, 3.5, 3.6, 3.8, 3.8, 3.5, 3.0, 0, 0, 0, 0], congNo: 3.2, overdueDays: 45 },
                { code: 'THU02', nganSach: 12.0, hd: 11.0, sl: [0.8, 0.9, 1.0, 1.0, 1.1, 1.1, 1.0, 0.9, 0.8, 0.7, 0, 0], bill: [0.7, 0.8, 0.9, 0.9, 1.0, 1.0, 0.9, 0.8, 0.7, 0.6, 0, 0], nhanTT: [0.6, 0.7, 0.8, 0.8, 0.9, 0.9, 0.8, 0, 0, 0, 0, 0], congNo: 0.9, overdueDays: 0 },
                { code: 'CHI01', nganSach: 1.2, hd: 1.1, sl: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 },
                { code: 'CHI06', nganSach: 18.0, hd: 17.0, sl: [1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.7, 1.5, 1.4, 1.2, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 },
                { code: 'CHI07', nganSach: 10.0, hd: 9.5, sl: [0.8, 0.8, 0.9, 0.9, 1.0, 1.0, 0.9, 0.8, 0.8, 0.7, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 }
            ]
        },
        {
            id: 'TPK', name: 'TPK',
            items: [
                { code: 'THU01', nganSach: 38.0, hd: 36.0, sl: [3.0, 3.2, 3.5, 3.6, 3.8, 3.8, 3.5, 3.2, 3.0, 2.8, 0, 0], bill: [2.8, 3.0, 3.2, 3.4, 3.6, 3.5, 3.2, 3.0, 2.8, 2.5, 0, 0], nhanTT: [2.5, 2.8, 3.0, 3.1, 3.3, 3.2, 2.9, 2.5, 0, 0, 0, 0], congNo: 2.8, overdueDays: 14 },
                { code: 'CHI06', nganSach: 15.0, hd: 14.0, sl: [1.1, 1.2, 1.3, 1.4, 1.5, 1.5, 1.4, 1.2, 1.1, 1.0, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 },
                { code: 'CHI07', nganSach: 8.0, hd: 7.5, sl: [0.6, 0.7, 0.7, 0.8, 0.8, 0.8, 0.7, 0.6, 0.6, 0.5, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 }
            ]
        },
        {
            id: 'BDN', name: 'BDN',
            items: [
                { code: 'THU01', nganSach: 28.0, hd: 26.0, sl: [2.0, 2.2, 2.5, 2.6, 2.8, 2.8, 2.5, 2.2, 2.0, 1.8, 0, 0], bill: [1.8, 2.0, 2.3, 2.4, 2.6, 2.5, 2.3, 2.0, 1.8, 1.5, 0, 0], nhanTT: [1.5, 1.8, 2.0, 2.1, 2.3, 2.2, 2.0, 1.5, 0, 0, 0, 0], congNo: 1.9, overdueDays: 22 },
                { code: 'CHI06', nganSach: 10.0, hd: 9.5, sl: [0.7, 0.8, 0.9, 1.0, 1.0, 1.0, 0.9, 0.8, 0.7, 0.6, 0, 0], bill: [], nhanTT: [], congNo: 0, overdueDays: 0 }
            ]
        }
    ],
    periods: ['T01', 'T02', 'T03', 'T04', 'T05', 'T06', 'T07', 'T08', 'T09', 'T10', 'T11', 'T12']
};

function initPage1() {
    renderBudgetKPIs();
    renderBarCongNo();
    renderBarBudgetExecution();
    renderBudgetDetailTable();
}

function renderBudgetKPIs() {
    const projects = budgetMgmtData.projects;
    const totalProjects = projects.length;

    // Tổng công nợ
    let totalCongNo = 0;
    let totalBill = 0;
    let totalNhanTT = 0;
    let totalHD = 0;

    projects.forEach(p => {
        p.items.forEach(item => {
            totalCongNo += item.congNo;
            totalHD += item.hd;
            if (item.bill.length) totalBill += item.bill.reduce((a, b) => a + b, 0);
            if (item.nhanTT.length) totalNhanTT += item.nhanTT.reduce((a, b) => a + b, 0);
        });
    });

    const collectRate = totalBill > 0 ? ((totalNhanTT / totalBill) * 100).toFixed(1) : 0;

    document.getElementById('kpiBudgetProjects').textContent = totalProjects;
    document.getElementById('kpiBudgetCongNo').textContent = totalCongNo.toFixed(1) + ' tỷ';
    document.getElementById('kpiBudgetCollect').textContent = collectRate + '%';
    document.getElementById('kpiBudgetHD').textContent = totalHD.toFixed(1) + ' tỷ';
}

function renderBarCongNo() {
    // Calculate công nợ per project
    const projectCongNo = budgetMgmtData.projects.map(p => {
        const congNo = p.items.reduce((sum, item) => sum + item.congNo, 0);
        return { name: p.name, value: +congNo.toFixed(1) };
    }).sort((a, b) => b.value - a.value);

    charts.barCongNo = echarts.init(document.getElementById('barCongNo'));
    charts.barCongNo.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            formatter: params => {
                const p = params[0];
                return `<strong>${p.name}</strong><br/>Công nợ: <strong style="color:#DC2626;">${p.value} tỷ</strong>`;
            }
        },
        grid: { left: '3%', right: '12%', bottom: '3%', top: '8%', containLabel: true },
        yAxis: {
            type: 'category',
            data: projectCongNo.map(p => p.name),
            axisLabel: { color: '#64748B', fontSize: 12, fontWeight: 600 },
            axisTick: { show: false },
            axisLine: { lineStyle: { color: '#E2E8F0' } }
        },
        xAxis: {
            type: 'value',
            axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' },
            splitLine: { lineStyle: { color: '#E2E8F0', type: 'dashed' } }
        },
        series: [{
            type: 'bar',
            data: projectCongNo.map((p, i) => ({
                value: p.value,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: i === 0 ? '#DC2626' : (i === 1 ? '#F59E0B' : '#3B82F6') },
                        { offset: 1, color: i === 0 ? '#EF4444' : (i === 1 ? '#FBBF24' : '#60A5FA') }
                    ]),
                    borderRadius: [0, 6, 6, 0]
                }
            })),
            barWidth: '55%',
            label: {
                show: true,
                position: 'right',
                formatter: '{c} tỷ',
                color: '#64748B',
                fontSize: 12,
                fontWeight: 600
            }
        }]
    });
}

function renderBarBudgetExecution() {
    const projectNames = budgetMgmtData.projects.map(p => p.name);

    // Per project: total Bill, total Nhận TT, tỷ lệ thu hồi, tổng công nợ
    const billData = budgetMgmtData.projects.map(p => {
        const total = p.items.reduce((sum, item) => sum + item.bill.reduce((a, b) => a + b, 0), 0);
        return +total.toFixed(1);
    });
    const nhanTTData = budgetMgmtData.projects.map(p => {
        const total = p.items.reduce((sum, item) => sum + item.nhanTT.reduce((a, b) => a + b, 0), 0);
        return +total.toFixed(1);
    });
    const tyleData = billData.map((bill, i) =>
        bill > 0 ? +(nhanTTData[i] / bill * 100).toFixed(1) : 0
    );
    const congNoData = budgetMgmtData.projects.map(p =>
        +p.items.reduce((sum, item) => sum + item.congNo, 0).toFixed(1)
    );

    if (!charts.barBudgetExecution) {
        charts.barBudgetExecution = echarts.init(document.getElementById('barBudgetExecution'));
    }
    charts.barBudgetExecution.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            formatter: params => {
                let html = `<strong>${params[0].name}</strong><br/>`;
                params.forEach(p => {
                    const unit = p.seriesName === 'Tỷ lệ thu hồi' ? '%' : ' tỷ';
                    html += `<span style="color:${p.color}">●</span> ${p.seriesName}: <strong>${p.value}${unit}</strong><br/>`;
                });
                const billP = params.find(p => p.seriesName === 'Đã bill');
                const ttP = params.find(p => p.seriesName === 'Đã nhận TT');
                if (billP && ttP) {
                    const gap = (billP.value - ttP.value).toFixed(1);
                    html += `<span style="color:#DC2626">●</span> Còn phải thu: <strong style="color:#DC2626">${gap} tỷ</strong>`;
                }
                return html;
            }
        },
        legend: {
            data: ['Đã bill', 'Đã nhận TT', 'Tỷ lệ thu hồi'],
            textStyle: { color: '#64748B', fontSize: 10 },
            top: 0
        },
        grid: { left: '3%', right: '10%', bottom: '5%', top: '14%', containLabel: true },
        xAxis: {
            type: 'category',
            data: projectNames,
            axisLabel: { color: '#1E293B', fontSize: 11, fontWeight: 600 },
            axisTick: { show: false }
        },
        yAxis: [
            {
                type: 'value',
                name: 'Tỷ đồng',
                nameTextStyle: { color: '#64748B', fontSize: 10 },
                axisLabel: { color: '#64748B', fontSize: 10, formatter: v => v + ' tỷ' },
                splitLine: { lineStyle: { color: '#E2E8F0', type: 'dashed' } }
            },
            {
                type: 'value',
                name: 'Tỷ lệ (%)',
                nameTextStyle: { color: '#64748B', fontSize: 10 },
                min: 0, max: 100,
                axisLabel: { color: '#64748B', fontSize: 10, formatter: v => v + '%' },
                splitLine: { show: false }
            }
        ],
        series: [
            {
                name: 'Đã bill',
                type: 'bar',
                yAxisIndex: 0,
                data: billData,
                barWidth: '35%',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(37,99,235,0.85)' },
                        { offset: 1, color: 'rgba(37,99,235,0.3)' }
                    ]),
                    borderRadius: [4, 4, 0, 0]
                }
            },
            {
                name: 'Đã nhận TT',
                type: 'bar',
                yAxisIndex: 0,
                data: nhanTTData,
                barWidth: '35%',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(22,163,74,0.85)' },
                        { offset: 1, color: 'rgba(22,163,74,0.3)' }
                    ]),
                    borderRadius: [4, 4, 0, 0]
                }
            },
            {
                name: 'Tỷ lệ thu hồi',
                type: 'line',
                yAxisIndex: 1,
                data: tyleData,
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: { color: '#F59E0B', width: 2.5 },
                itemStyle: { color: '#F59E0B', borderWidth: 2, borderColor: '#fff' },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%',
                    fontSize: 10,
                    fontWeight: 700,
                    color: '#B45309'
                }
            }
        ]
    });
}

function renderBudgetDetailTable(filterProject) {
    const periods = budgetMgmtData.periods;
    const projects = filterProject && filterProject !== 'all'
        ? budgetMgmtData.projects.filter(p => p.id === filterProject)
        : budgetMgmtData.projects;

    // Common sticky style strings
    // Row-1 header (top:0), Row-2 header (top:36px)
    // Col "Dự án" (left:0), Col "Mã NS" (left:55px)
    // Corner cells need both top + left + highest z-index
    const thBase = `padding:8px 6px;font-size:11px;font-weight:600;white-space:nowrap;border-bottom:1px solid #CBD5E1;`;

    // sticky-top styles for normal header cells
    const stickyTop      = `position:sticky;top:0;z-index:5;`;
    const stickyTop36    = `position:sticky;top:36px;z-index:4;`;
    // sticky-left styles for body cells
    const stickyL0body   = `position:sticky;left:0;z-index:3;`;
    const stickyL55body  = `position:sticky;left:55px;z-index:3;`;
    // corner = sticky both directions — highest z-index
    const cornerTopL0    = `position:sticky;top:0;left:0;z-index:20;`;
    const cornerTopL55   = `position:sticky;top:0;left:55px;z-index:20;`;

    let html = `<table style="font-size:11px;border-collapse:collapse;border-spacing:0;width:100%;min-width:1200px;">`;
    html += `<thead>`;

    // ── Row 1: group headers ──────────────────────────────────────────────
    html += `<tr style="height:36px;">`;

    // Corner: Dự án (rowspan 2)
    html += `<th rowspan="2" style="${thBase}${cornerTopL0}width:55px;min-width:55px;max-width:55px;text-align:left;background:#FEE2E2;border-right:2px solid #FCA5A5;">Dự án</th>`;
    // Corner: Mã NS (rowspan 2)
    html += `<th rowspan="2" style="${thBase}${cornerTopL55}width:65px;min-width:65px;max-width:65px;text-align:left;background:#FEE2E2;border-right:1px solid #E2E8F0;box-shadow:2px 0 4px -2px rgba(0,0,0,0.08);">Mã NS</th>`;
    // Non-sticky headers (rowspan 2)
    html += `<th rowspan="2" style="${thBase}${stickyTop}min-width:72px;text-align:right;background:#F1F5F9;">Ngân sách</th>`;
    html += `<th rowspan="2" style="${thBase}${stickyTop}min-width:60px;text-align:right;background:#F1F5F9;">HĐ</th>`;
    // Group spans
    html += `<th colspan="${periods.length}" style="${thBase}${stickyTop}text-align:center;background:#DBEAFE;border-bottom:2px solid #93C5FD;">Sản lượng</th>`;
    html += `<th colspan="${periods.length}" style="${thBase}${stickyTop}text-align:center;background:#DCFCE7;border-bottom:2px solid #86EFAC;">Bill</th>`;
    html += `<th colspan="${periods.length}" style="${thBase}${stickyTop}text-align:center;background:#FEF3C7;border-bottom:2px solid #FDE68A;">Nhận thanh toán</th>`;
    html += `<th rowspan="2" style="${thBase}${stickyTop}min-width:72px;text-align:right;background:#FEE2E2;color:#DC2626;font-weight:700;">Công nợ</th>`;
    html += `<th rowspan="2" style="${thBase}${stickyTop}min-width:68px;text-align:center;background:#F1F5F9;">TG quá hạn<br>(ngày)</th>`;
    html += `</tr>`;

    // ── Row 2: period sub-headers ─────────────────────────────────────────
    html += `<tr style="height:26px;">`;
    periods.forEach(p => { html += `<th style="${thBase}${stickyTop36}min-width:48px;text-align:right;background:#EFF6FF;font-size:10px;">${p}</th>`; });
    periods.forEach(p => { html += `<th style="${thBase}${stickyTop36}min-width:48px;text-align:right;background:#F0FDF4;font-size:10px;">${p}</th>`; });
    periods.forEach(p => { html += `<th style="${thBase}${stickyTop36}min-width:48px;text-align:right;background:#FFFBEB;font-size:10px;">${p}</th>`; });
    html += `</tr>`;
    html += `</thead><tbody>`;

    // ── Data rows ─────────────────────────────────────────────────────────
    const tdBase = `padding:7px 6px;border-bottom:1px solid #E2E8F0;white-space:nowrap;font-size:11px;`;

    projects.forEach((proj, pIdx) => {
        proj.items.forEach((item, iIdx) => {
            const isFirst = iIdx === 0;
            const isThu = item.code.startsWith('THU');
            const rowBg = isThu ? '#FAFAFA' : '#FFFFFF';
            const codeColor = isThu ? '#16A34A' : '#DC2626';
            const codeWeight = isThu ? '700' : '500';

            html += `<tr>`;

            // Dự án cell (rowspan, sticky left:0)
            if (isFirst) {
                html += `<td rowspan="${proj.items.length}" style="${tdBase}${stickyL0body}width:55px;min-width:55px;max-width:55px;text-align:left;font-weight:700;color:var(--primary);background:#FFF5F5;border-right:2px solid #FCA5A5;vertical-align:top;padding-top:10px;">${proj.name}</td>`;
            }

            // Mã NS cell (sticky left:55px)
            html += `<td style="${tdBase}${stickyL55body}width:65px;min-width:65px;max-width:65px;text-align:left;font-weight:${codeWeight};color:${codeColor};background:${rowBg};border-right:1px solid #E2E8F0;box-shadow:2px 0 4px -2px rgba(0,0,0,0.08);">${item.code}</td>`;

            // Ngân sách
            html += `<td style="${tdBase}text-align:right;font-weight:600;background:${rowBg};">${item.nganSach.toFixed(1)}</td>`;
            // HĐ
            html += `<td style="${tdBase}text-align:right;background:${rowBg};">${item.hd.toFixed(1)}</td>`;

            // Sản lượng
            item.sl.forEach(v => {
                const bg = v > 0 ? '#EFF6FF' : rowBg;
                html += `<td style="${tdBase}text-align:right;background:${bg};color:#2563EB;">${v > 0 ? v.toFixed(1) : ''}</td>`;
            });

            // Bill
            if (item.bill.length) {
                item.bill.forEach(v => {
                    const bg = v > 0 ? '#F0FDF4' : rowBg;
                    html += `<td style="${tdBase}text-align:right;background:${bg};color:#16A34A;">${v > 0 ? v.toFixed(1) : ''}</td>`;
                });
            } else {
                periods.forEach(() => { html += `<td style="${tdBase}text-align:center;color:#CBD5E1;background:${rowBg};">—</td>`; });
            }

            // Nhận TT
            if (item.nhanTT.length) {
                item.nhanTT.forEach(v => {
                    const bg = v > 0 ? '#FFFBEB' : rowBg;
                    html += `<td style="${tdBase}text-align:right;background:${bg};color:#D97706;">${v > 0 ? v.toFixed(1) : ''}</td>`;
                });
            } else {
                periods.forEach(() => { html += `<td style="${tdBase}text-align:center;color:#CBD5E1;background:${rowBg};">—</td>`; });
            }

            // Công nợ
            if (item.congNo > 0) {
                html += `<td style="${tdBase}text-align:right;background:#FEE2E2;color:#DC2626;font-weight:700;">${item.congNo.toFixed(1)}</td>`;
            } else {
                html += `<td style="${tdBase}text-align:right;color:#CBD5E1;background:${rowBg};">—</td>`;
            }

            // TG Quá hạn
            const isOverdue = item.overdueDays > 0;
            const isCrit = item.overdueDays > 40;
            const overBg = isCrit ? '#FEF2F2' : rowBg;
            const overColor = isOverdue ? (isCrit ? '#DC2626' : '#F59E0B') : '#CBD5E1';
            const overW = isCrit ? '700' : '500';
            html += `<td style="${tdBase}text-align:center;background:${overBg};color:${overColor};font-weight:${overW};">${isOverdue ? item.overdueDays : '—'}</td>`;

            html += `</tr>`;
        });

        // Separator row between projects
        if (pIdx < projects.length - 1) {
            const totalCols = 4 + (periods.length * 3) + 2;
            html += `<tr><td colspan="${totalCols}" style="height:5px;background:#E2E8F0;padding:0;border:none;"></td></tr>`;
        }
    });

    html += `</tbody></table>`;
    document.getElementById('budgetDetailTable').innerHTML = html;
}



function updateBudgetPage() {
    const filter = document.getElementById('budgetProjectFilter').value;
    renderBudgetKPIs();
    renderBarCongNo();
    renderBarBudgetExecution();
    renderBudgetDetailTable(filter);
}

// Page 1 Charts (Quản Lý Dòng Tiền)
function initPage2() {
    renderCashflowGauges();
    renderComboCashflow();
    renderNetCashflowBar();
    renderCashflowTable();
}

// Cashflow data
const cashflowData = {
    months: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
    // Sản lượng (tỷ)
    slKH:   [8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 12.5, 13.0, 13.5],
    slTT:   [7.8, 8.2, 9.1, 9.3, 10.2, 10.8, 11.2, 11.0, 11.8, 12.0, 0, 0],
    // Chi phí (tỷ)
    chiKH:  [5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5],
    chiTT:  [4.8, 5.3, 5.8, 6.2, 6.8, 7.2, 7.6, 8.2, 8.7, 9.1, 0, 0],
    // Thu (tỷ)
    thuKH:  [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5],
    thuTT:  [5.5, 6.2, 7.1, 7.3, 8.1, 8.8, 9.2, 9.0, 9.7, 10.2, 0, 0]
};

// Tính lũy kế
function cumSum(arr) {
    let sum = 0;
    return arr.map(v => { sum += v; return +sum.toFixed(1); });
}

// Render 3 gauge charts cho trang Quản Lý Dòng Tiền
function renderCashflowGauges() {
    const activeMonths = cashflowData.thuTT.filter(v => v > 0).length;

    const totalThuTT = cashflowData.thuTT.reduce((a, b) => a + b, 0);
    const totalThuKH = cashflowData.thuKH.slice(0, activeMonths).reduce((a, b) => a + b, 0);
    const thuPct = Math.round(totalThuTT / totalThuKH * 100);

    const totalChiTT = cashflowData.chiTT.reduce((a, b) => a + b, 0);
    const totalChiKH = cashflowData.chiKH.slice(0, activeMonths).reduce((a, b) => a + b, 0);
    const chiPct = Math.round(totalChiTT / totalChiKH * 100);

    const totalSLTT = cashflowData.slTT.reduce((a, b) => a + b, 0);
    const totalSLKH = cashflowData.slKH.slice(0, activeMonths).reduce((a, b) => a + b, 0);
    const slPct = Math.round(totalSLTT / totalSLKH * 100);

    // Populate KPI insight cards
    const nets = cashflowData.months.map((_, i) =>
        +(cashflowData.thuTT[i] - cashflowData.chiTT[i]).toFixed(1)
    );
    const totalNet = nets.reduce((a, b) => a + b, 0);
    const negMonths = nets.filter((n, i) => cashflowData.thuTT[i] > 0 && n < 0).length;
    const bestIdx = nets.reduce((bi, v, i, arr) => (v > arr[bi] ? i : bi), 0);
    const costOverrunPct = totalChiKH > 0 ? ((totalChiTT / totalChiKH - 1) * 100).toFixed(1) : 0;

    const netEl = document.getElementById('kpiNetCashflow');
    if (netEl) {
        const netVal = +totalNet.toFixed(1);
        netEl.textContent = (netVal >= 0 ? '+' : '') + netVal + ' tỷ';
        netEl.style.color = netVal >= 0 ? 'var(--success)' : 'var(--danger)';
    }
    const bestEl = document.getElementById('kpiBestMonth');
    if (bestEl) bestEl.textContent = cashflowData.months[bestIdx];
    const bestValEl = document.getElementById('kpiBestMonthVal');
    if (bestValEl) bestValEl.textContent = '+' + nets[bestIdx].toFixed(1) + ' tỷ ròng';
    const negEl = document.getElementById('kpiNegMonths');
    if (negEl) negEl.textContent = negMonths;
    const overrunEl = document.getElementById('kpiCostOverrun');
    if (overrunEl) {
        const ov = +costOverrunPct;
        overrunEl.textContent = ov > 0 ? '+' + ov + '%' : ov + '%';
        overrunEl.style.color = ov > 5 ? 'var(--danger)' : ov > 0 ? 'var(--warning)' : 'var(--success)';
    }

    const gaugeOpts = (pct, pointerColor, colorMap) => ({
        series: [{
            type: 'gauge', startAngle: 200, endAngle: -20, min: 0, max: 130,
            radius: '88%', center: ['50%', '65%'],
            pointer: { show: true, length: '60%', width: 5, itemStyle: { color: pointerColor } },
            axisLine: { lineStyle: { width: 14, color: colorMap } },
            axisTick: { show: false }, splitLine: { show: false },
            axisLabel: { show: false },
            title: { show: true, offsetCenter: [0, '68%'], fontSize: 9, color: '#94A3B8', fontWeight: 500 },
            detail: { formatter: '{value}%', fontSize: 22, color: '#0F172A', offsetCenter: [0, '32%'], fontWeight: 700 },
            data: [{ value: pct }]
        }]
    });

    if (!charts.gaugeThu) charts.gaugeThu = echarts.init(document.getElementById('gaugeThu'));
    charts.gaugeThu.setOption(gaugeOpts(thuPct, '#16A34A',
        [[0.5, '#FCA5A5'], [0.7, '#FCD34D'], [0.84, '#4ADE80'], [1, '#16A34A']]));

    if (!charts.gaugeChi) charts.gaugeChi = echarts.init(document.getElementById('gaugeChi'));
    charts.gaugeChi.setOption(gaugeOpts(chiPct, '#DC2626',
        [[0.5, '#4ADE80'], [0.7, '#60A5FA'], [0.84, '#FCD34D'], [1, '#DC2626']]));

    if (!charts.gaugeSanLuong) charts.gaugeSanLuong = echarts.init(document.getElementById('gaugeSanLuong'));
    charts.gaugeSanLuong.setOption(gaugeOpts(slPct, '#2563EB',
        [[0.5, '#FCA5A5'], [0.7, '#FCD34D'], [0.84, '#4ADE80'], [1, '#16A34A']]));
}

// Combo chart: Lines (lũy kế Thu/Chi TT + KH) + Bars (Sản lượng TT/KH lũy kế)
function renderComboCashflow() {
    const months = cashflowData.months;

    // Lũy kế
    const cumChiTT = cumSum(cashflowData.chiTT);
    const cumThuTT = cumSum(cashflowData.thuTT);
    const cumChiKH = cumSum(cashflowData.chiKH);
    const cumThuKH = cumSum(cashflowData.thuKH);
    const cumSLTT = cumSum(cashflowData.slTT);
    const cumSLKH = cumSum(cashflowData.slKH);

    charts.comboCashflow = echarts.init(document.getElementById('comboCashflow'));
    charts.comboCashflow.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'cross' },
            formatter: params => {
                let html = `<strong>${params[0].axisValue}</strong><br/>`;
                params.forEach(p => {
                    html += `<span style="color:${p.color}">●</span> ${p.seriesName}: <strong>${p.value} tỷ</strong><br/>`;
                });
                return html;
            }
        },
        legend: {
            data: ['SL Thực lũy kế', 'SL KH lũy kế', 'Chi phí lũy kế', 'Thu lũy kế', 'Chi phí KH lũy kế', 'Thu KH lũy kế'],
            textStyle: { color: '#64748B', fontSize: 10 },
            top: 0,
            itemGap: 12
        },
        grid: { left: '3%', right: '5%', bottom: '10%', top: '14%', containLabel: true },
        xAxis: {
            type: 'category',
            data: months,
            axisLabel: { color: '#64748B', fontSize: 11 },
            axisLine: { lineStyle: { color: '#E2E8F0' } }
        },
        yAxis: [
            {
                type: 'value',
                name: 'Lũy kế (tỷ)',
                position: 'left',
                axisLabel: { color: '#64748B', formatter: v => v + ' tỷ', fontSize: 10 },
                splitLine: { lineStyle: { color: '#E2E8F0', type: 'dashed' } },
                nameTextStyle: { color: '#64748B', fontSize: 10 }
            },
            {
                type: 'value',
                name: 'Sản lượng (tỷ)',
                position: 'right',
                axisLabel: { color: '#64748B', formatter: v => v + ' tỷ', fontSize: 10 },
                splitLine: { show: false },
                nameTextStyle: { color: '#64748B', fontSize: 10 }
            }
        ],
        series: [
            // Bar: Sản lượng thực lũy kế
            {
                name: 'SL Thực lũy kế',
                type: 'bar',
                yAxisIndex: 1,
                data: cumSLTT,
                barWidth: '25%',
                barGap: '10%',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(37,99,235,0.7)' },
                        { offset: 1, color: 'rgba(37,99,235,0.2)' }
                    ]),
                    borderRadius: [3, 3, 0, 0]
                },
                z: 0
            },
            // Bar: Sản lượng KH lũy kế
            {
                name: 'SL KH lũy kế',
                type: 'bar',
                yAxisIndex: 1,
                data: cumSLKH,
                barWidth: '25%',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(148,163,184,0.5)' },
                        { offset: 1, color: 'rgba(148,163,184,0.15)' }
                    ]),
                    borderRadius: [3, 3, 0, 0],
                    borderColor: 'rgba(148,163,184,0.6)',
                    borderWidth: 1,
                    borderType: 'dashed'
                },
                z: 0
            },
            // Line: Chi phí lũy kế thực tế
            {
                name: 'Chi phí lũy kế',
                type: 'line',
                smooth: true,
                data: cumChiTT,
                lineStyle: { color: '#DC2626', width: 3 },
                itemStyle: { color: '#DC2626' },
                symbol: 'circle',
                symbolSize: 6,
                z: 5
            },
            // Line: Thu lũy kế thực tế
            {
                name: 'Thu lũy kế',
                type: 'line',
                smooth: true,
                data: cumThuTT,
                lineStyle: { color: '#16A34A', width: 3 },
                itemStyle: { color: '#16A34A' },
                symbol: 'circle',
                symbolSize: 6,
                z: 5
            },
            // Line dashed: Chi phí KH lũy kế
            {
                name: 'Chi phí KH lũy kế',
                type: 'line',
                smooth: true,
                data: cumChiKH,
                lineStyle: { color: '#F87171', width: 2, type: 'dashed' },
                itemStyle: { color: '#F87171' },
                symbol: 'diamond',
                symbolSize: 5,
                z: 4
            },
            // Line dashed: Thu KH lũy kế
            {
                name: 'Thu KH lũy kế',
                type: 'line',
                smooth: true,
                data: cumThuKH,
                lineStyle: { color: '#4ADE80', width: 2, type: 'dashed' },
                itemStyle: { color: '#4ADE80' },
                symbol: 'diamond',
                symbolSize: 5,
                z: 4
            }
        ]
    });
}

// Bảng chi tiết Thu - Chi - Sản lượng theo tháng
function renderCashflowTable() {
    const months = cashflowData.months;
    const d = cashflowData;

    let html = '<table class="data-table" style="font-size:12px;">';
    // Header
    html += '<thead><tr>';
    html += '<th style="min-width:60px;text-align:center;position:sticky;left:0;background:#FEE2E2;z-index:3;">Tháng</th>';
    html += '<th style="min-width:90px;text-align:right;background:linear-gradient(135deg,#EFF6FF,#DBEAFE);">KH Sản lượng</th>';
    html += '<th style="min-width:90px;text-align:right;background:linear-gradient(135deg,#EFF6FF,#DBEAFE);">TT Sản lượng</th>';
    html += '<th style="min-width:80px;text-align:right;background:linear-gradient(135deg,#FEF2F2,#FEE2E2);">KH Chi</th>';
    html += '<th style="min-width:80px;text-align:right;background:linear-gradient(135deg,#FEF2F2,#FEE2E2);">TT Chi</th>';
    html += '<th style="min-width:80px;text-align:right;background:linear-gradient(135deg,#F0FDF4,#DCFCE7);">KH Thu</th>';
    html += '<th style="min-width:80px;text-align:right;background:linear-gradient(135deg,#F0FDF4,#DCFCE7);">TT Thu</th>';
    html += '<th style="min-width:100px;text-align:right;background:linear-gradient(135deg,#FFFBEB,#FEF3C7);">Dòng tiền ròng</th>';
    html += '</tr></thead><tbody>';

    let totalSLKH = 0, totalSLTT = 0, totalChiKH = 0, totalChiTT = 0, totalThuKH = 0, totalThuTT = 0, totalNet = 0;

    months.forEach((m, i) => {
        const slKH = d.slKH[i];
        const slTT = d.slTT[i];
        const chiKH = d.chiKH[i];
        const chiTT = d.chiTT[i];
        const thuKH = d.thuKH[i];
        const thuTT = d.thuTT[i];
        const net = +(thuTT - chiTT).toFixed(1);

        totalSLKH += slKH; totalSLTT += slTT;
        totalChiKH += chiKH; totalChiTT += chiTT;
        totalThuKH += thuKH; totalThuTT += thuTT;
        totalNet += net;

        const netColor = net >= 0 ? '#16A34A' : '#DC2626';
        const netIcon = net >= 0 ? '▲' : '▼';
        const isNoData = slTT === 0 && chiTT === 0 && thuTT === 0;
        const rowStyle = isNoData ? 'opacity:0.4;' : '';
        const bgRow = i % 2 === 1 ? 'background:#FBFCFE;' : '';

        html += `<tr style="${rowStyle}${bgRow}">`;
        html += `<td style="text-align:center;font-weight:700;color:var(--primary);background:#FFF5F5;position:sticky;left:0;z-index:1;">${m}</td>`;
        html += `<td style="text-align:right;color:#2563EB;">${slKH.toFixed(1)}</td>`;
        html += `<td style="text-align:right;color:#2563EB;font-weight:600;">${isNoData ? '—' : slTT.toFixed(1)}</td>`;
        html += `<td style="text-align:right;color:#DC2626;">${chiKH.toFixed(1)}</td>`;
        html += `<td style="text-align:right;color:#DC2626;font-weight:600;">${isNoData ? '—' : chiTT.toFixed(1)}</td>`;
        html += `<td style="text-align:right;color:#16A34A;">${thuKH.toFixed(1)}</td>`;
        html += `<td style="text-align:right;color:#16A34A;font-weight:600;">${isNoData ? '—' : thuTT.toFixed(1)}</td>`;
        html += `<td style="text-align:right;color:${netColor};font-weight:700;">${isNoData ? '—' : netIcon + ' ' + Math.abs(net).toFixed(1)}</td>`;
        html += '</tr>';
    });

    // Total row
    const totalNetVal = +totalNet.toFixed(1);
    const totalNetColor = totalNetVal >= 0 ? '#16A34A' : '#DC2626';
    const totalNetIcon = totalNetVal >= 0 ? '▲' : '▼';
    html += `<tr style="background:linear-gradient(135deg,#F1F5F9,#E2E8F0);font-weight:700;">`;
    html += `<td style="text-align:center;font-weight:700;color:var(--primary);background:#FEE2E2;position:sticky;left:0;z-index:1;">TỔNG</td>`;
    html += `<td style="text-align:right;color:#2563EB;">${totalSLKH.toFixed(1)}</td>`;
    html += `<td style="text-align:right;color:#2563EB;">${totalSLTT.toFixed(1)}</td>`;
    html += `<td style="text-align:right;color:#DC2626;">${totalChiKH.toFixed(1)}</td>`;
    html += `<td style="text-align:right;color:#DC2626;">${totalChiTT.toFixed(1)}</td>`;
    html += `<td style="text-align:right;color:#16A34A;">${totalThuKH.toFixed(1)}</td>`;
    html += `<td style="text-align:right;color:#16A34A;">${totalThuTT.toFixed(1)}</td>`;
    html += `<td style="text-align:right;color:${totalNetColor};">${totalNetIcon} ${Math.abs(totalNetVal).toFixed(1)}</td>`;
    html += '</tr>';

    html += '</tbody></table>';
    document.getElementById('cashflowTable').innerHTML = html;
}

function renderNetCashflowBar() {
    const d = cashflowData;
    const months = d.months;

    // Net = Thu TT - Chi TT (chỉ tính tháng có dữ liệu)
    const nets = months.map((_, i) => +(d.thuTT[i] - d.chiTT[i]).toFixed(1));
    const hasData = months.map((_, i) => d.thuTT[i] > 0 || d.chiTT[i] > 0);

    // Running cumulative net
    let cum = 0;
    const cumNets = nets.map((v, i) => hasData[i] ? +(cum += v).toFixed(1) : null);

    const barColors = nets.map((v, i) => {
        if (!hasData[i]) return 'rgba(203,213,225,0.3)';
        return v >= 0
            ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(22,163,74,0.9)' },
                { offset: 1, color: 'rgba(22,163,74,0.35)' }
              ])
            : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(220,38,38,0.9)' },
                { offset: 1, color: 'rgba(220,38,38,0.35)' }
              ]);
    });

    if (!charts.barNetCashflow) {
        charts.barNetCashflow = echarts.init(document.getElementById('barNetCashflow'));
    }
    charts.barNetCashflow.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            formatter: params => {
                const m = params[0].axisValue;
                let html = `<strong>${m}</strong><br/>`;
                params.forEach(p => {
                    if (p.value === null || p.value === undefined) return;
                    const unit = p.seriesName === 'Lũy kế ròng' ? ' tỷ (tích lũy)' : ' tỷ';
                    const sign = p.value > 0 ? '+' : '';
                    html += `<span style="color:${p.color}">●</span> ${p.seriesName}: <strong>${sign}${p.value}${unit}</strong><br/>`;
                });
                return html;
            }
        },
        legend: {
            data: ['Dòng tiền ròng', 'Lũy kế ròng'],
            textStyle: { color: '#64748B', fontSize: 10 },
            top: 0
        },
        grid: { left: '3%', right: '8%', bottom: '8%', top: '14%', containLabel: true },
        xAxis: {
            type: 'category',
            data: months,
            axisLabel: { color: '#64748B', fontSize: 11, fontWeight: 600 },
            axisTick: { show: false },
            axisLine: { lineStyle: { color: '#E2E8F0' } }
        },
        yAxis: [
            {
                type: 'value',
                name: 'Tỷ đồng',
                nameTextStyle: { color: '#64748B', fontSize: 10 },
                axisLabel: { color: '#64748B', fontSize: 10, formatter: v => v + ' tỷ' },
                splitLine: { lineStyle: { color: '#E2E8F0', type: 'dashed' } }
            },
            {
                type: 'value',
                name: 'Lũy kế',
                nameTextStyle: { color: '#64748B', fontSize: 10 },
                axisLabel: { color: '#64748B', fontSize: 10, formatter: v => v + ' tỷ' },
                splitLine: { show: false }
            }
        ],
        markLine: {
            silent: true,
            lineStyle: { color: '#CBD5E1', type: 'dashed' },
            data: [{ yAxis: 0 }]
        },
        series: [
            {
                name: 'Dòng tiền ròng',
                type: 'bar',
                yAxisIndex: 0,
                data: nets.map((v, i) => ({
                    value: hasData[i] ? v : null,
                    itemStyle: { color: barColors[i], borderRadius: v >= 0 ? [4, 4, 0, 0] : [0, 0, 4, 4] }
                })),
                barWidth: '42%',
                label: {
                    show: true,
                    position: 'top',
                    formatter: p => p.value !== null ? (p.value > 0 ? '+' : '') + p.value : '',
                    fontSize: 9,
                    fontWeight: 700,
                    color: '#374151'
                }
            },
            {
                name: 'Lũy kế ròng',
                type: 'line',
                yAxisIndex: 1,
                data: cumNets,
                smooth: true,
                connectNulls: false,
                lineStyle: { color: '#6366F1', width: 2.5, type: 'solid' },
                itemStyle: { color: '#6366F1', borderWidth: 2, borderColor: '#fff' },
                symbol: 'circle',
                symbolSize: 7
            }
        ]
    });
}

function updatePage2() {
    renderCashflowGauges();
    renderComboCashflow();
    renderNetCashflowBar();
    renderCashflowTable();
}

// Page 3
function initPage3() {
    renderComparisonTable();
    renderComboRevenueCostFHI();
    renderPaymentMatrix();
}

function renderComparisonTable(selectedCategories = null) {
    // Tất cả items có thể
    const allItems = [
        { name: 'CHI.01 - Pháp lý', code: 'CHI.01', before: 1.4, after: 1.55 },
        { name: 'CHI.02 - Kiến thiết', code: 'CHI.02', before: 14.2, after: 15.0 },
        { name: 'CHI.01.10 - Hồ sơ pháp lý', code: 'CHI.01.10', before: 0.8, after: 0.9 },
        { name: 'CHI.01.20 - Phí giấy phép', code: 'CHI.01.20', before: 0.6, after: 0.65 },
        { name: 'CHI.06 - Nhân công', code: 'CHI.06', before: 26.5, after: 28.1 },
        { name: 'CHI.06.30 - Gói thầu KC', code: 'CHI.06.30', before: 8.2, after: 9.6 },
        { name: 'CHI.06.30.31 - Gói thầu KC A', code: 'CHI.06.30.31', before: null, after: 2.4 },
        { name: 'CHI.06.40.06 - Gói thầu A', code: 'CHI.06.40.06', before: null, after: 2.4 }
    ];

    // Filter theo selected categories
    const items = selectedCategories && selectedCategories.length > 0
        ? allItems.filter(item => selectedCategories.some(cat => item.code.startsWith(cat)))
        : allItems;

    if (items.length === 0) {
        document.getElementById('comparisonTable').innerHTML = '<p style="text-align:center;padding:20px;color:#888;">Không có dữ liệu với bộ lọc hiện tại</p>';
        return;
    }

    let html = '<table class="data-table"><thead><tr><th>Hạng mục</th><th>Ngân sách</th><th>Yêu cầu chi</th><th>Chênh lệch</th></tr></thead><tbody>';
    items.forEach(i => {
        const diff = i.before ? i.after - i.before : i.after;
        const diffColor = i.before ? (diff > 0 ? '#F59E0B' : '#16A34A') : '#16A34A';
        const beforeText = i.before ? i.before.toFixed(1) + ' tỷ' : '<span style="color:#888">- (Mới)</span>';
        html += `<tr><td>${i.name}</td><td>${beforeText}</td><td>${i.after.toFixed(1)} tỷ</td><td style="color:${diffColor}">+${diff.toFixed(1)} tỷ</td></tr>`;
    });
    document.getElementById('comparisonTable').innerHTML = html + '</tbody></table>';
}

// Combo chart: Doanh Thu - Chi Phí - FHI theo tháng
function renderComboRevenueCostFHI(selectedCategories = null) {
    const months = demoData.months.slice(0, 10);

    // Base data - sẽ thay đổi theo filter
    let revenue = [8.5, 9.0, 9.2, 9.5, 9.8, 10.2, 10.5, 10.0, 9.8, 9.5];
    let cost = [6.5, 7.0, 7.2, 7.5, 7.8, 8.2, 8.5, 8.0, 7.8, 7.5];

    // Điều chỉnh theo selected categories
    if (selectedCategories && selectedCategories.length > 0) {
        const ratio = selectedCategories.length / 14;
        cost = cost.map(v => +(v * ratio).toFixed(1));
    }

    // Calculate FHI for each month
    const fhi = revenue.map((r, i) => +(r / cost[i]).toFixed(2));

    charts.comboRevenueCostFHI = echarts.init(document.getElementById('comboRevenueCostFHI'));
    charts.comboRevenueCostFHI.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'cross' },
            formatter: params => {
                let html = `<strong>${params[0].axisValue}</strong><br/>`;
                params.forEach(p => {
                    const unit = p.seriesName === 'FHI' ? '' : ' tỷ';
                    html += `<span style="color:${p.color}">●</span> ${p.seriesName}: <strong>${p.value}${unit}</strong><br/>`;
                });
                return html;
            }
        },
        legend: { data: ['Doanh thu', 'Chi phí', 'FHI'], textStyle: { color: '#64748B', fontSize: 10 }, top: 0 },
        grid: { left: '3%', right: '8%', bottom: '10%', top: '15%', containLabel: true },
        xAxis: { type: 'category', data: months, axisLabel: { color: '#64748B' } },
        yAxis: [
            { type: 'value', name: 'Giá trị (tỷ)', position: 'left', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' }, splitLine: { lineStyle: { color: '#E2E8F0' } } },
            { type: 'value', name: 'FHI', position: 'right', min: 0, max: 2, axisLabel: { color: '#F59E0B' }, splitLine: { show: false } }
        ],
        series: [
            {
                name: 'FHI',
                type: 'bar',
                yAxisIndex: 1,
                data: fhi.map(v => ({
                    value: v,
                    itemStyle: { color: v >= 1 ? 'rgba(22,163,74,0.6)' : 'rgba(220,38,38,0.6)' }
                })),
                barWidth: '30%',
                label: { show: true, position: 'top', formatter: '{c}', fontSize: 9, color: '#64748B' }
            },
            {
                name: 'Doanh thu',
                type: 'line',
                smooth: true,
                data: revenue,
                lineStyle: { color: '#16A34A', width: 3 },
                itemStyle: { color: '#16A34A' },
                symbol: 'circle',
                symbolSize: 6
            },
            {
                name: 'Chi phí',
                type: 'line',
                smooth: true,
                data: cost,
                lineStyle: { color: '#DC2626', width: 3 },
                itemStyle: { color: '#DC2626' },
                symbol: 'circle',
                symbolSize: 6
            }
        ]
    });
}

// Payment Matrix Table
function renderPaymentMatrix(selectedCategories = null) {
    const allItems = [
        { name: 'CHI.01 - Pháp lý', code: 'CHI.01', level: 1, dueDate: '15/02/2024', status: 'pending', amount: 1.55 },
        { name: 'CHI.01.10 - Hồ sơ pháp lý', code: 'CHI.01.10', level: 2, dueDate: '15/02/2024', status: 'paid', amount: 0.9 },
        { name: 'CHI.01.20 - Phí giấy phép', code: 'CHI.01.20', level: 2, dueDate: '20/02/2024', status: 'overdue', amount: 0.65 },
        { name: 'CHI.02 - Kiến thiết', code: 'CHI.02', level: 1, dueDate: '28/02/2024', status: 'pending', amount: 15.0 },
        { name: 'CHI.06 - Nhân công', code: 'CHI.06', level: 1, dueDate: '10/02/2024', status: 'pending', amount: 28.1 },
        { name: 'CHI.06.30 - Gói thầu KC', code: 'CHI.06.30', level: 2, dueDate: '10/02/2024', status: 'paid', amount: 9.6 },
        { name: 'CHI.06.30.31 - KC A', code: 'CHI.06.30.31', level: 3, dueDate: '10/02/2024', status: 'paid', amount: 2.4 },
        { name: 'CHI.06.40.06 - Gói A', code: 'CHI.06.40.06', level: 3, dueDate: '15/02/2024', status: 'pending', amount: 2.4 }
    ];

    const items = selectedCategories && selectedCategories.length > 0
        ? allItems.filter(item => selectedCategories.some(cat => item.code.startsWith(cat)))
        : allItems;

    if (items.length === 0) {
        document.getElementById('paymentMatrixTable').innerHTML = '<p style="text-align:center;padding:20px;color:#888;">Không có dữ liệu</p>';
        return;
    }

    const statusLabels = {
        'paid': '<span style="color:#16A34A;font-weight:600;">✓ Đã TT</span>',
        'pending': '<span style="color:#F59E0B;font-weight:600;">⏳ Chờ TT</span>',
        'overdue': '<span style="color:#DC2626;font-weight:600;">⚠ Quá hạn</span>'
    };

    let html = '<table class="data-table"><thead><tr><th>Hạng mục</th><th>Thời hạn TT</th><th>Trạng thái</th><th>Giá trị</th></tr></thead><tbody>';
    items.forEach(i => {
        const indent = (i.level - 1) * 12;
        const nameStyle = i.level === 1 ? 'font-weight:600;' : '';
        html += `<tr>
            <td style="padding-left:${6 + indent}px;${nameStyle}">${i.name}</td>
            <td>${i.dueDate}</td>
            <td>${statusLabels[i.status]}</td>
            <td style="text-align:right;font-weight:500;">${i.amount.toFixed(1)} tỷ</td>
        </tr>`;
    });
    document.getElementById('paymentMatrixTable').innerHTML = html + '</tbody></table>';
}

function updatePage3() {
    // Lấy danh sách categories được chọn
    const selectedCategories = Array.from(document.querySelectorAll('.multi-select-menu input[type="checkbox"]:checked'))
        .map(cb => cb.value);

    // Cập nhật multi-select counters
    document.querySelectorAll('.multi-select').forEach(ms => {
        const checkboxes = ms.querySelectorAll('input[type="checkbox"]');
        const checkedCount = ms.querySelectorAll('input[type="checkbox"]:checked').length;
        const totalCount = checkboxes.length;
        const countSpan = ms.querySelector('.multi-select-count');

        if (checkedCount === 0) {
            countSpan.textContent = 'Không có';
        } else if (checkedCount === totalCount) {
            countSpan.textContent = 'Tất cả';
        } else {
            countSpan.textContent = `${checkedCount}/${totalCount}`;
        }
    });

    // Render với filtered data
    renderComparisonTable(selectedCategories);
    renderComboRevenueCostFHI(selectedCategories);
    renderPaymentMatrix(selectedCategories);

    // Tính toán KPIs dựa trên categories được chọn
    const baseData = demoData.approval;

    // Giả lập việc tính toán dựa trên số categories được chọn
    const filterRatio = selectedCategories.length / 14; // 14 là tổng số categories

    const data = {
        before: {
            chi: baseData.before.chi * filterRatio,
            vdu: baseData.before.vdu * filterRatio,
            fhi: baseData.before.fhi * filterRatio
        },
        after: {
            chi: baseData.after.chi * filterRatio,
            vdu: baseData.after.vdu * filterRatio,
            fhi: baseData.after.fhi * filterRatio
        }
    };

    const chiDiff = ((data.after.chi - data.before.chi) * 1000).toFixed(0);
    const vduDiff = ((data.after.vdu - data.before.vdu) * 1000).toFixed(0);
    const fhiDiff = (data.after.fhi - data.before.fhi).toFixed(2);

    document.getElementById('kpi_chi_after').textContent = data.after.chi.toFixed(2) + ' tỷ';
    document.getElementById('kpi_chi_change').textContent = '+' + chiDiff + ' tr vs trước';
    document.getElementById('kpi_vdu').textContent = data.after.vdu.toFixed(2) + ' tỷ';
    document.getElementById('kpi_vdu_change').textContent = '+' + vduDiff + ' tr vs trước';
    document.getElementById('kpi_fhi').textContent = data.after.fhi.toFixed(2);
    document.getElementById('kpi_fhi_change').textContent = fhiDiff + ' vs trước';
}

// Resize handler
window.addEventListener('resize', () => Object.values(charts).forEach(c => c && c.resize()));

// Page 3 Detail (Chi tiết Thu - Chi DA)
function initPage3Detail() {
    const proj = demoData.projects[0]; // Default to first project
    renderPage3DetailGauges(proj);
    renderLineCumulativeDetail(proj);
    renderMatrixThuChiTable();
    renderComboMonthlyThuDetail(proj);
    renderComboMonthlyChiDetail(proj);
    renderStructureThuDetail();
    renderStructureChiDetail();
    updateFHICards(proj);
}

// Matrix THU-CHI table by months
function renderMatrixThuChiTable() {
    const months = demoData.months.slice(0, 10);

    // THU items data
    const thuItems = [
        { code: 'THU', name: 'TỔNG THU', level: 0, type: 'thu', data: [8.5, 9.0, 9.2, 9.5, 9.8, 10.2, 10.5, 10.0, 9.8, 9.5] },
        { code: 'THU.01', name: 'THU.01 - Doanh thu bán hàng', level: 1, type: 'thu', data: [6.0, 6.3, 6.5, 6.8, 7.0, 7.3, 7.5, 7.2, 7.0, 6.8] },
        { code: 'THU.02', name: 'THU.02 - Thu từ dịch vụ', level: 1, type: 'thu', data: [1.5, 1.7, 1.7, 1.7, 1.8, 1.9, 2.0, 1.8, 1.8, 1.7] },
        { code: 'THU.03', name: 'THU.03 - Thu khác', level: 1, type: 'thu', data: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0] }
    ];

    // CHI items data
    const chiItems = [
        { code: 'CHI', name: 'TỔNG CHI', level: 0, type: 'chi', data: [6.5, 7.0, 7.2, 7.5, 7.8, 8.2, 8.5, 8.0, 7.8, 7.5] },
        { code: 'CHI.01', name: 'CHI.01 - Chi pháp lý', level: 1, type: 'chi', data: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2] },
        { code: 'CHI.02', name: 'CHI.02 - Chi kiến thiết', level: 1, type: 'chi', data: [2.0, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.5, 2.4, 2.3] },
        { code: 'CHI.06', name: 'CHI.06 - Chi nhân công', level: 1, type: 'chi', data: [3.0, 3.2, 3.3, 3.4, 3.5, 3.8, 4.0, 3.8, 3.7, 3.5] },
        { code: 'CHI.07', name: 'CHI.07 - Chi vật tư', level: 1, type: 'chi', data: [1.3, 1.4, 1.4, 1.5, 1.6, 1.6, 1.6, 1.5, 1.5, 1.5] }
    ];

    // Combine all items with spacing row
    const allItems = [...thuItems, { code: '', name: '', level: 0, type: 'spacer', data: [] }, ...chiItems];

    // Build header
    let html = '<table class="data-table" style="font-size:12px;"><thead><tr>';
    html += '<th style="min-width:200px;text-align:left;position:sticky;left:0;background:#F8FAFC;z-index:2;">Hạng mục</th>';
    months.forEach(m => { html += `<th style="min-width:70px;text-align:right;">${m}</th>`; });
    html += '<th style="min-width:80px;text-align:right;font-weight:bold;background:#F1F5F9;">Tổng</th>';
    html += '</tr></thead><tbody>';

    // Build rows
    allItems.forEach(item => {
        if (item.type === 'spacer') {
            html += '<tr style="height:12px;"><td colspan="' + (months.length + 2) + '"></td></tr>';
            return;
        }

        const isHeader = item.level === 0;
        const indent = item.level * 16;
        const bgColor = isHeader ? (item.type === 'thu' ? 'rgba(22,163,74,0.1)' : 'rgba(220,38,38,0.1)') : '';
        const fontWeight = isHeader ? 'bold' : 'normal';
        const textColor = item.type === 'thu' ? '#16A34A' : '#DC2626';
        const total = item.data.reduce((a, b) => a + b, 0).toFixed(1);

        html += `<tr style="background:${bgColor};">`;
        html += `<td style="padding-left:${8 + indent}px;font-weight:${fontWeight};text-align:left;position:sticky;left:0;background:${bgColor || '#fff'};z-index:1;">${item.name}</td>`;
        item.data.forEach(v => {
            html += `<td style="text-align:right;color:${textColor};">${v.toFixed(1)}</td>`;
        });
        html += `<td style="text-align:right;font-weight:bold;background:#F1F5F9;color:${textColor};">${total}</td>`;
        html += '</tr>';
    });

    html += '</tbody></table>';
    document.getElementById('matrixThuChiTable').innerHTML = html;
}

function renderPage3DetailGauges(proj) {
    const thuPct = Math.round(proj.actualThu / proj.budgetThuTotal * 100);
    const chiPct = Math.round(proj.actualChi / proj.budgetChiTotal * 100);

    const makeGaugeOpt = (pct, colorStops) => ({
        series: [{
            type: 'gauge',
            startAngle: 210, endAngle: -30,
            min: 0, max: 100,
            radius: '92%',
            center: ['50%', '60%'],
            pointer: {
                show: true, length: '65%', width: 5,
                itemStyle: { color: 'auto' }
            },
            axisLine: {
                lineStyle: { width: 16, color: colorStops }
            },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            detail: {
                formatter: '{value}%',
                fontSize: 22,
                fontWeight: 700,
                color: '#0F172A',
                offsetCenter: [0, '30%']
            },
            title: { show: false },
            data: [{ value: pct }]
        }]
    });

    charts.gaugeThuDetail = echarts.init(document.getElementById('gaugeThuDetail'));
    charts.gaugeThuDetail.setOption(makeGaugeOpt(thuPct,
        [[0.6, '#FCA5A5'], [0.8, '#FCD34D'], [1, '#4ADE80']]
    ));

    charts.gaugeChiDetail = echarts.init(document.getElementById('gaugeChiDetail'));
    charts.gaugeChiDetail.setOption(makeGaugeOpt(chiPct,
        [[0.6, '#4ADE80'], [0.8, '#FCD34D'], [1, '#F87171']]
    ));
}

function renderFHITrendChart(proj) {
    // FHI trend over months - simulated data
    const fhiActual = [1.35, 1.38, 1.40, 1.42, 1.45, 1.44, 1.46, 1.47, 1.48, 1.47];
    const fhiExpected = [1.50, 1.50, 1.50, 1.50, 1.50, 1.50, 1.50, 1.50, 1.50, 1.50];

    charts.lineFHITrend = echarts.init(document.getElementById('lineFHITrend'));
    charts.lineFHITrend.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['FHI Thực tế', 'FHI Dự kiến'], textStyle: { color: '#64748B', fontSize: 10 }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '10%', top: '15%', containLabel: true },
        xAxis: { type: 'category', data: demoData.months.slice(0, 10), axisLabel: { color: '#64748B', fontSize: 9 } },
        yAxis: { type: 'value', min: 1, max: 2, axisLabel: { color: '#64748B', fontSize: 9 }, splitLine: { lineStyle: { color: '#E2E8F0' } } },
        series: [
            {
                name: 'FHI Thực tế',
                type: 'line',
                smooth: true,
                data: fhiActual,
                lineStyle: { color: '#F59E0B', width: 3 },
                itemStyle: { color: '#F59E0B' },
                areaStyle: { color: 'rgba(245,158,11,0.1)' },
                symbol: 'circle',
                symbolSize: 5,
                label: { show: false }
            },
            {
                name: 'FHI Dự kiến',
                type: 'line',
                data: fhiExpected,
                lineStyle: { color: '#3B82F6', width: 2, type: 'dashed' },
                itemStyle: { color: '#3B82F6' },
                symbol: 'none'
            }
        ]
    });
}

function renderLineCumulativeDetail(proj) {
    charts.lineCumulativeDetail = echarts.init(document.getElementById('lineCumulativeDetail'));
    charts.lineCumulativeDetail.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['Lũy kế Thu', 'Lũy kế Chi'], textStyle: { color: '#64748B', fontSize: 10 }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '10%', top: '15%', containLabel: true },
        xAxis: { type: 'category', data: demoData.months, axisLabel: { color: '#64748B', fontSize: 9 } },
        yAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ', fontSize: 9 } },
        series: [
            { name: 'Lũy kế Thu', type: 'line', smooth: true, data: [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96], lineStyle: { color: '#16A34A', width: 2 }, itemStyle: { color: '#16A34A' }, areaStyle: { color: 'rgba(22,163,74,0.1)' }, symbol: 'circle', symbolSize: 4 },
            { name: 'Lũy kế Chi', type: 'line', smooth: true, data: [6, 13, 20, 27, 34, 41, 48, 55, 62, 68, 74, 78], lineStyle: { color: '#DC2626', width: 2 }, itemStyle: { color: '#DC2626' }, areaStyle: { color: 'rgba(220,38,38,0.1)' }, symbol: 'circle', symbolSize: 4 }
        ]
    });
}

function renderComboMonthlyThuDetail(proj) {
    const months = demoData.months.slice(0, 10);
    const thuActual = [7.5, 7.8, 8.0, 8.2, 8.5, 8.8, 9.0, 8.5, 8.2, 7.8];
    const thuBudget = [8.0, 8.2, 8.5, 8.8, 9.0, 9.2, 9.5, 9.0, 8.8, 8.5];
    const thuDiff = thuActual.map((v, i) => +(v - thuBudget[i]).toFixed(1));

    charts.comboMonthlyThuDetail = echarts.init(document.getElementById('comboMonthlyThuDetail'));
    charts.comboMonthlyThuDetail.setOption({
        tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
        legend: { data: ['Thực thu', 'Ngân sách', 'Chênh lệch'], textStyle: { color: '#64748B', fontSize: 10 }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '10%', containLabel: true },
        xAxis: { type: 'category', data: months, axisLabel: { color: '#64748B' } },
        yAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        series: [
            { name: 'Chênh lệch', type: 'bar', data: thuDiff.map(v => ({ value: v, itemStyle: { color: v >= 0 ? 'rgba(22,163,74,0.6)' : 'rgba(220,38,38,0.6)' } })), barWidth: '40%', label: { show: true, position: 'top', formatter: p => p.value !== 0 ? p.value : '', fontSize: 9, color: '#64748B' } },
            { name: 'Thực thu', type: 'line', smooth: true, data: thuActual, lineStyle: { color: '#16A34A', width: 3 }, itemStyle: { color: '#16A34A' }, symbol: 'circle', symbolSize: 6 },
            { name: 'Ngân sách', type: 'line', smooth: true, data: thuBudget, lineStyle: { color: '#3B82F6', width: 2, type: 'dashed' }, itemStyle: { color: '#3B82F6' }, symbol: 'diamond', symbolSize: 6 }
        ]
    });
}

function renderComboMonthlyChiDetail(proj) {
    const months = demoData.months.slice(0, 10);
    const chiActual = [6.0, 6.5, 6.8, 7.0, 7.2, 7.5, 7.8, 7.5, 7.2, 6.8];
    const chiBudget = [7.0, 7.2, 7.5, 7.8, 8.0, 8.2, 8.5, 8.0, 7.8, 7.5];
    const chiDiff = chiActual.map((v, i) => +(v - chiBudget[i]).toFixed(1));

    charts.comboMonthlyChiDetail = echarts.init(document.getElementById('comboMonthlyChiDetail'));
    charts.comboMonthlyChiDetail.setOption({
        tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
        legend: { data: ['Thực chi', 'Ngân sách', 'Chênh lệch'], textStyle: { color: '#64748B', fontSize: 10 }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '10%', containLabel: true },
        xAxis: { type: 'category', data: months, axisLabel: { color: '#64748B' } },
        yAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        series: [
            { name: 'Chênh lệch', type: 'bar', data: chiDiff.map(v => ({ value: v, itemStyle: { color: v <= 0 ? 'rgba(22,163,74,0.6)' : 'rgba(220,38,38,0.6)' } })), barWidth: '40%', label: { show: true, position: 'top', formatter: p => p.value !== 0 ? p.value : '', fontSize: 9, color: '#64748B' } },
            { name: 'Thực chi', type: 'line', smooth: true, data: chiActual, lineStyle: { color: '#DC2626', width: 3 }, itemStyle: { color: '#DC2626' }, symbol: 'circle', symbolSize: 6 },
            { name: 'Ngân sách', type: 'line', smooth: true, data: chiBudget, lineStyle: { color: '#3B82F6', width: 2, type: 'dashed' }, itemStyle: { color: '#3B82F6' }, symbol: 'diamond', symbolSize: 6 }
        ]
    });
}

function renderStructureThuDetail() {
    const thuCats = demoData.thuItems.map(i => i.shortName);
    const thuActual = [42.5, 20.2, 13.7, 9.4];
    const thuBudget = [48.2, 27.0, 17.0, 11];

    charts.barStructureThuDetail = echarts.init(document.getElementById('barStructureThuDetail'));
    charts.barStructureThuDetail.setOption({
        tooltip: {
            trigger: 'axis',
            formatter: params => {
                const actual = params.find(p => p.seriesName === 'Thực thu');
                if (!actual) return '';
                const budget = thuBudget[actual.dataIndex];
                const pct = ((actual.value / budget) * 100).toFixed(0);
                return `<strong>${actual.name}</strong><br/>Thực thu: <strong>${actual.value} tỷ</strong><br/>Ngân sách: ${budget} tỷ<br/>Đạt: ${pct}%`;
            }
        },
        grid: { left: '3%', right: '22%', bottom: '3%', top: '3%', containLabel: true },
        yAxis: { type: 'category', data: thuCats, axisLabel: { color: '#64748B' } },
        xAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        series: [
            {
                name: 'Thực thu',
                type: 'bar',
                data: thuActual,
                itemStyle: { color: '#16A34A' },
                barWidth: '50%',
                z: 1
            },
            {
                name: 'Ngân sách',
                type: 'scatter',
                symbol: 'rect',
                symbolSize: [3, 24],
                data: thuBudget.map((budget, idx) => {
                    const val = thuActual[idx];
                    const pct = ((val / budget) * 100 - 100).toFixed(0);
                    const pctStr = pct >= 0 ? `+${pct}%` : `${pct}%`;
                    return {
                        value: [budget, idx],
                        label: {
                            show: true,
                            position: 'right',
                            formatter: `${val} tỷ | ${pctStr}`,
                            fontSize: 10,
                            color: '#333',
                            distance: 8
                        }
                    };
                }),
                itemStyle: { color: '#1E293B' },
                z: 10
            }
        ]
    });
}

function renderStructureChiDetail() {
    const chiCats = demoData.chiItems.slice(0, 6).map(i => i.shortName);
    const chiActual = [1.6, 15, 10.5, 7.8, 12.5, 28];
    const chiBudget = [1.8, 16.2, 11.8, 9.2, 14.5, 32];

    charts.barStructureChiDetail = echarts.init(document.getElementById('barStructureChiDetail'));
    charts.barStructureChiDetail.setOption({
        tooltip: {
            trigger: 'axis',
            formatter: params => {
                const actual = params.find(p => p.seriesName === 'Thực chi');
                if (!actual) return '';
                const budget = chiBudget[actual.dataIndex];
                const pct = ((actual.value / budget) * 100).toFixed(0);
                return `<strong>${actual.name}</strong><br/>Thực chi: <strong>${actual.value} tỷ</strong><br/>Ngân sách: ${budget} tỷ<br/>Sử dụng: ${pct}%`;
            }
        },
        grid: { left: '3%', right: '22%', bottom: '3%', top: '3%', containLabel: true },
        yAxis: { type: 'category', data: chiCats, axisLabel: { color: '#64748B' } },
        xAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        series: [
            {
                name: 'Thực chi',
                type: 'bar',
                data: chiActual,
                itemStyle: { color: '#DC2626' },
                barWidth: '50%',
                z: 1
            },
            {
                name: 'Ngân sách',
                type: 'scatter',
                symbol: 'rect',
                symbolSize: [3, 24],
                data: chiBudget.map((budget, idx) => {
                    const val = chiActual[idx];
                    const pct = ((val / budget) * 100 - 100).toFixed(0);
                    const pctStr = pct >= 0 ? `+${pct}%` : `${pct}%`;
                    const isOver = val > budget;
                    return {
                        value: [budget, idx],
                        label: {
                            show: true,
                            position: 'right',
                            formatter: `${val} tỷ | ${pctStr}`,
                            fontSize: 10,
                            padding: [3, 6],
                            borderRadius: 3,
                            backgroundColor: isOver ? '#DC2626' : '#16A34A',
                            color: '#fff',
                            distance: 8
                        }
                    };
                }),
                itemStyle: { color: '#1E293B' },
                z: 10
            }
        ]
    });
}

function updateFHICards(proj) {
    const fhiCurrent = (proj.actualThu / proj.actualChi).toFixed(2);
    const fhiExpected = (proj.budgetThuTotal / proj.budgetChiTotal).toFixed(2);

    document.getElementById('fhiCurrent').textContent = fhiCurrent;
    document.getElementById('fhiExpected').textContent = fhiExpected;

    // Update status
    const statusEl = document.getElementById('fhiCurrentStatus');
    if (fhiCurrent >= 1.2) {
        statusEl.innerHTML = '✓ Hiệu quả tốt';
        statusEl.style.color = '#16A34A';
    } else if (fhiCurrent >= 1) {
        statusEl.innerHTML = '⚠ Đạt mức cơ bản';
        statusEl.style.color = '#F59E0B';
    } else {
        statusEl.innerHTML = '✗ Cần cải thiện';
        statusEl.style.color = '#DC2626';
    }
}

function updatePage3Detail() {
    const projId = document.getElementById('projectFilterPage3').value;
    const proj = demoData.projects.find(p => p.id === projId) || demoData.projects[0];

    const thuPct = Math.round(proj.actualThu / proj.budgetThuTotal * 100);
    const chiPct = Math.round(proj.actualChi / proj.budgetChiTotal * 100);

    // Update gauges
    if (charts.gaugeThuDetail) {
        charts.gaugeThuDetail.setOption({ series: [{ data: [{ value: thuPct }] }] });
    }
    if (charts.gaugeChiDetail) {
        charts.gaugeChiDetail.setOption({ series: [{ data: [{ value: chiPct }] }] });
    }

    // Update FHI cards
    updateFHICards(proj);
}

// Init - Updated for 4 pages
// Mapping: page1=Quản lý dòng tiền, page2=Duyệt Chi, page3=Chi tiết DA, page4=Quản lý Ngân sách
document.addEventListener('DOMContentLoaded', () => {
    initPage2();       // page1 = Quản Lý Dòng Tiền
    initPage3();       // page2 = Duyệt Chi
    initPage3Detail(); // page3 = Chi tiết Thu-Chi DA
    initPage1();       // page4 = Quản Lý Ngân Sách
});
