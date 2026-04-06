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

// Page 4 Charts (initially Page 1)
function initPage1() {
    charts.pieStatus = echarts.init(document.getElementById('pieStatus'));
    charts.pieStatus.setOption({
        title: {
            text: 'Trạng thái của các phiếu điều chỉnh',
            left: 'center',
            textStyle: { fontSize: 13, fontWeight: 'normal', color: '#64748B' }
        },
        tooltip: { trigger: 'item' },
        legend: {
            bottom: 0,
            left: 'center',
            textStyle: { color: '#64748B', fontSize: 10 },
            itemGap: 8
        },
        series: [{
            type: 'pie',
            radius: ['35%', '60%'],
            center: ['50%', '55%'],
            label: { show: false },
            data: [
                { value: 2, name: 'Quá hạn', itemStyle: { color: '#DC2626' } },
                { value: 6, name: 'Trong hạn', itemStyle: { color: '#16A34A' } }
            ]
        }]
    });
    renderBarThuTotal('v1');
    renderBarChiTotal('v1');
    renderBarThuStructure();
    renderBarChiStructure();
    renderBudgetTables();
}

function renderBudgetDiff() {
    const projects = ['DA 1', 'DA 2', 'DA 3', 'DA 4', 'DA 5'];
    // Chênh lệch = Thu - Chi
    const diffData = [4.0, 5.5, 7.2, 8.8, 10.5];
    if (!charts.barBudgetDiff) charts.barBudgetDiff = echarts.init(document.getElementById('barBudgetDiff'));
    charts.barBudgetDiff.setOption({
        tooltip: { trigger: 'axis' },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        yAxis: { type: 'category', data: projects, axisLabel: { color: '#64748B', fontSize: 10 } },
        series: [{
            name: 'Chênh lệch Thu-Chi',
            type: 'bar',
            data: diffData,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#3B82F6' },
                    { offset: 1, color: '#60A5FA' }
                ]),
                borderRadius: [0, 4, 4, 0]
            },
            label: { show: true, position: 'right', formatter: '{c} tỷ', fontSize: 10 }
        }]
    });
}

function renderBarThuTotal(ver) {
    const projects = ['DA 1', 'DA 2', 'DA 3', 'DA 4', 'DA 5'];
    const d1 = ver === 'v1' ? [42, 38, 35, 28, 22] : [45, 41, 38, 31, 25];
    const d2 = ver === 'v1' ? [45, 41, 38, 31, 25] : [48, 44, 41, 34, 28];
    const l1 = ver === 'v1' ? 'Ban đầu' : 'Gần nhất';
    const l2 = ver === 'v1' ? 'Gần nhất' : 'Điều chỉnh';
    const c1 = ver === 'v1' ? '#3B82F6' : '#16A34A'; // Ban đầu: xanh nước biển, Gần nhất: xanh lá
    const c2 = ver === 'v1' ? '#16A34A' : '#F59E0B'; // Gần nhất: xanh lá, Điều chỉnh: vàng
    if (!charts.barThuTotal) charts.barThuTotal = echarts.init(document.getElementById('barThuTotal'));
    charts.barThuTotal.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: [l1, l2], textStyle: { color: '#64748B', fontSize: 10 }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        yAxis: { type: 'category', data: projects, axisLabel: { color: '#64748B', fontSize: 10 } },
        xAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        series: [
            { name: l1, type: 'bar', data: d1, itemStyle: { color: c1 } },
            { name: l2, type: 'bar', data: d2, itemStyle: { color: c2 } }
        ]
    });
}

function renderBarChiTotal(ver) {
    const projects = ['DA 1', 'DA 2', 'DA 3', 'DA 4', 'DA 5'];
    const d1 = ver === 'v1' ? [38, 32, 28, 22, 18] : [42, 36, 32, 26, 22];
    const d2 = ver === 'v1' ? [42, 36, 32, 26, 22] : [46, 40, 36, 30, 26];
    const l1 = ver === 'v1' ? 'Ban đầu' : 'Gần nhất';
    const l2 = ver === 'v1' ? 'Gần nhất' : 'Điều chỉnh';
    const c1 = ver === 'v1' ? '#3B82F6' : '#16A34A'; // Ban đầu: xanh nước biển, Gần nhất: xanh lá
    const c2 = ver === 'v1' ? '#16A34A' : '#F59E0B'; // Gần nhất: xanh lá, Điều chỉnh: vàng
    if (!charts.barChiTotal) charts.barChiTotal = echarts.init(document.getElementById('barChiTotal'));
    charts.barChiTotal.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: [l1, l2], textStyle: { color: '#64748B', fontSize: 10 }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        yAxis: { type: 'category', data: projects, axisLabel: { color: '#64748B', fontSize: 10 } },
        xAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        series: [
            { name: l1, type: 'bar', data: d1, itemStyle: { color: c1 } },
            { name: l2, type: 'bar', data: d2, itemStyle: { color: c2 } }
        ]
    });
}

function renderBarThuStructure() {
    const cats = demoData.thuItems.map(i => i.shortName);
    if (!charts.barThuStructure) charts.barThuStructure = echarts.init(document.getElementById('barThuStructure'));
    charts.barThuStructure.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['Ban đầu', 'Gần nhất', 'Điều chỉnh'], textStyle: { color: '#64748B', fontSize: 9 }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '15%', containLabel: true },
        xAxis: { type: 'category', data: cats, axisLabel: { color: '#64748B', fontSize: 9, interval: 0 } },
        yAxis: { type: 'value', axisLabel: { color: '#64748B', fontSize: 9, formatter: v => v } },
        series: [
            { name: 'Ban đầu', type: 'line', data: demoData.versions.thu.banDau, itemStyle: { color: '#3B82F6' }, symbol: 'circle' },
            { name: 'Gần nhất', type: 'line', data: demoData.versions.thu.ganNhat, itemStyle: { color: '#16A34A' }, symbol: 'rect' },
            { name: 'Điều chỉnh', type: 'line', data: demoData.versions.thu.dieuChinh, itemStyle: { color: '#F59E0B' }, symbol: 'triangle' }
        ]
    });
}

function renderBarChiStructure() {
    const chiCats = demoData.chiItems.slice(0, 8).map(i => i.shortName);
    if (!charts.barChiStructure) charts.barChiStructure = echarts.init(document.getElementById('barChiStructure'));
    charts.barChiStructure.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['Ban đầu', 'Gần nhất', 'Điều chỉnh'], textStyle: { color: '#64748B', fontSize: 9 }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '15%', containLabel: true },
        xAxis: { type: 'category', data: chiCats, axisLabel: { color: '#64748B', fontSize: 9, interval: 0 } },
        yAxis: { type: 'value', axisLabel: { color: '#64748B', fontSize: 9, formatter: v => v } },
        series: [
            { name: 'Ban đầu', type: 'line', data: demoData.versions.chi.banDau.slice(0, 8), itemStyle: { color: '#3B82F6' }, symbol: 'circle' },
            { name: 'Gần nhất', type: 'line', data: demoData.versions.chi.ganNhat.slice(0, 8), itemStyle: { color: '#16A34A' }, symbol: 'rect' },
            { name: 'Điều chỉnh', type: 'line', data: demoData.versions.chi.dieuChinh.slice(0, 8), itemStyle: { color: '#F59E0B' }, symbol: 'triangle' }
        ]
    });
}

function renderBudgetTables() {
    const dataTotal = {
        rows: [
            'THU.01 - Thu từ Chủ ĐT',
            'THU.02 - Thu HĐ Tài chính',
            'THU.03 - Thu Nguồn khác',
            'CHI.01 - Pháp lý',
            'CHI.02 - Kiến thiết',
            'CHI.03 - Bán hàng',
            'CHI.06 - Nhân công',
            'CHI.07 - Vật tư'
        ],
        v1: [[38.2, 40.1, 41.5, 42.8, 43.5, 44.2], [20.0, 21.0, 22.0, 23.0, 23.8, 24.5], [10.8, 11.2, 11.8, 12.5, 13.2, 13.8], [1.2, 1.3, 1.4, 1.5, 1.6, 1.7], [13.5, 14.2, 14.8, 15.5, 16.2, 16.8], [9.2, 9.8, 10.3, 10.8, 11.3, 11.8], [25.5, 26.8, 27.5, 28.2, 29.0, 29.8], [14.2, 15.0, 15.8, 16.5, 17.2, 17.8]],
        v2: [[38.2, 40.1, 41.5, 42.8, 43.5, 44.2], [20.0, 21.0, 22.0, 23.0, 23.8, 24.5], [12.5, 13.2, 13.8, 14.5, 15.2, 15.8], [1.4, 1.5, 1.6, 1.7, 1.8, 1.9], [14.8, 15.5, 16.2, 16.8, 17.5, 18.2], [10.0, 10.5, 11.0, 11.5, 12.0, 12.5], [25.5, 26.8, 27.5, 28.2, 29.0, 29.8], [15.5, 16.2, 16.8, 17.5, 18.2, 18.8]],
        v3: [[45.5, 47.2, 48.8, 50.5, 52.2, 53.8], [23.5, 24.5, 26.0, 27.5, 29.0, 30.5], [12.5, 13.2, 13.8, 14.5, 15.2, 15.8], [1.6, 1.7, 1.8, 1.9, 2.0, 2.1], [16.2, 16.8, 17.5, 18.2, 18.8, 19.5], [11.2, 11.8, 12.3, 12.8, 13.3, 13.8], [30.0, 31.0, 32.0, 33.0, 34.0, 35.0], [17.0, 17.8, 18.5, 19.2, 19.8, 20.5]]
    };

    const dataDetail = {
        rows: [
            'THU.01 - Thu từ Chủ ĐT',
            'THU.01.01 - Tư vấn',
            'THU.01.02 - Rao sự',
            'CHI.01 - Pháp lý',
            'CHI.01.10 - Hồ sơ pháp lý',
            'CHI.06 - Nhân công',
            'CHI.06.30 - Gói thầu KC',
            'CHI.06.30.31 - Gói thầu KC A'
        ],
        v1: [[38.2, 40.1, 41.5, 42.8, 43.5, 44.2], [22.5, 23.8, 24.5, 25.2, 25.8, 26.5], [15.7, 16.3, 16.8, 17.3, 17.8, 18.3], [1.2, 1.3, 1.4, 1.5, 1.6, 1.7], [0.8, 0.9, 0.9, 1.0, 1.0, 1.1], [25.5, 26.8, 27.5, 28.2, 29.0, 29.8], [7.8, 8.2, 8.5, 8.8, 9.2, 9.5], [2.2, 2.3, 2.4, 2.5, 2.6, 2.7]],
        v2: [[38.2, 40.1, 41.5, 42.8, 43.5, 44.2], [22.5, 23.8, 24.5, 25.2, 25.8, 26.5], [17.0, 17.3, 17.8, 18.3, 18.8, 19.3], [1.4, 1.5, 1.6, 1.7, 1.8, 1.9], [0.9, 1.0, 1.0, 1.1, 1.1, 1.2], [25.5, 26.8, 27.5, 28.2, 29.0, 29.8], [8.5, 8.9, 9.2, 9.5, 9.8, 10.2], [2.5, 2.6, 2.7, 2.8, 2.9, 3.0]],
        v3: [[45.5, 47.2, 48.8, 50.5, 52.2, 53.8], [27.8, 29.0, 30.0, 31.0, 32.0, 33.0], [17.0, 17.3, 17.8, 18.3, 18.8, 19.3], [1.6, 1.7, 1.8, 1.9, 2.0, 2.1], [1.0, 1.1, 1.1, 1.2, 1.2, 1.3], [30.0, 31.0, 32.0, 33.0, 34.0, 35.0], [9.5, 9.9, 10.2, 10.5, 10.8, 11.2], [2.8, 2.9, 3.0, 3.1, 3.2, 3.3]]
    };

    const data = currentBudgetType === 'total' ? dataTotal : dataDetail;
    const cols = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'];

    const genTable = (versionId) => {
        const versionData = data[versionId];
        const otherVersionIds = ['v1', 'v2', 'v3'].filter(id => id !== versionId);

        let html = '<table class="data-table"><thead><tr><th style="font-size:10px;">Hạng mục</th>';
        cols.forEach(c => html += `<th style="font-size:10px;">${c}</th>`);
        html += '</tr></thead><tbody>';

        data.rows.forEach((rowName, rowIdx) => {
            html += `<tr><td style="font-size:10px;">${rowName}</td>`;
            versionData[rowIdx].forEach((val, colIdx) => {
                const otherVal1 = data[otherVersionIds[0]][rowIdx][colIdx];
                const otherVal2 = data[otherVersionIds[1]][rowIdx][colIdx];

                let bgColor = '';
                if (val === otherVal1 || val === otherVal2) {
                    bgColor = '#FEF9C3'; // Vàng: Giống ít nhất 1 cái khác
                } else {
                    bgColor = '#FEE2E2'; // Đỏ: Khác cả 2 cái còn lại
                }

                html += `<td style="background-color: ${bgColor}; font-size:10px;">${val.toFixed(1)}</td>`;
            });
            html += '</tr>';
        });
        return html + '</tbody></table>';
    };

    document.getElementById('tableV1').innerHTML = genTable('v1');
    document.getElementById('tableV2').innerHTML = genTable('v2');
    document.getElementById('tableV3').innerHTML = genTable('v3');
}

// Page 2 Charts (Page 1 mới: Hiệu Quả Thu - Chi)
function initPage2() {
    renderGaugesPage1();
    renderFHIChart();
    renderLineCumulative();
    renderMonthlyComboCharts();
    renderStructureBars();
}

// Render gauges for Page 1 (all projects average)
function renderGaugesPage1() {
    // Calculate average across all projects
    const totalActualThu = demoData.projects.reduce((sum, p) => sum + p.actualThu, 0);
    const totalBudgetThu = demoData.projects.reduce((sum, p) => sum + p.budgetThuTotal, 0);
    const totalActualChi = demoData.projects.reduce((sum, p) => sum + p.actualChi, 0);
    const totalBudgetChi = demoData.projects.reduce((sum, p) => sum + p.budgetChiTotal, 0);

    const thuPct = Math.round(totalActualThu / totalBudgetThu * 100);
    const chiPct = Math.round(totalActualChi / totalBudgetChi * 100);

    charts.gaugeThu = echarts.init(document.getElementById('gaugeThu'));
    charts.gaugeThu.setOption({
        series: [{
            type: 'gauge', startAngle: 180, endAngle: 0, min: 0, max: 100,
            radius: '95%',
            center: ['50%', '70%'],
            pointer: { show: true, length: '60%', width: 4 },
            axisLine: { lineStyle: { width: 25, color: [[0.6, '#DC2626'], [0.8, '#F59E0B'], [1, '#16A34A']] } },
            axisTick: { show: false }, splitLine: { show: false },
            axisLabel: { show: false },
            detail: { formatter: '{value}%', fontSize: 18, color: '#0F172A', offsetCenter: [0, '35%'] },
            data: [{ value: thuPct }]
        }]
    });

    charts.gaugeChi = echarts.init(document.getElementById('gaugeChi'));
    charts.gaugeChi.setOption({
        series: [{
            type: 'gauge', startAngle: 180, endAngle: 0, min: 0, max: 100,
            radius: '95%',
            center: ['50%', '70%'],
            pointer: { show: true, length: '60%', width: 4 },
            axisLine: { lineStyle: { width: 25, color: [[0.6, '#16A34A'], [0.8, '#F59E0B'], [1, '#DC2626']] } },
            axisTick: { show: false }, splitLine: { show: false },
            axisLabel: { show: false },
            detail: { formatter: '{value}%', fontSize: 18, color: '#0F172A', offsetCenter: [0, '35%'] },
            data: [{ value: chiPct }]
        }]
    });
}

// Render cumulative line chart
function renderLineCumulative() {
    const cumThu = [7, 14, 21, 28, 36, 43, 51, 59, 67, 75, 82, 85];
    const cumChi = [6, 12, 18, 24, 30, 37, 44, 50, 57, 64, 70, 72];
    charts.lineCumulative = echarts.init(document.getElementById('lineCumulative'));
    charts.lineCumulative.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['Lũy kế Thu', 'Lũy kế Chi'], textStyle: { color: '#64748B', fontSize: 10 }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '10%', top: '15%', containLabel: true },
        xAxis: { type: 'category', data: demoData.months, axisLabel: { color: '#64748B', fontSize: 10 } },
        yAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ', fontSize: 10 } },
        series: [
            { name: 'Lũy kế Thu', type: 'line', smooth: true, data: cumThu, lineStyle: { color: '#16A34A', width: 2 }, itemStyle: { color: '#16A34A' }, areaStyle: { color: 'rgba(22,163,74,0.1)' }, symbol: 'circle', symbolSize: 4 },
            { name: 'Lũy kế Chi', type: 'line', smooth: true, data: cumChi, lineStyle: { color: '#DC2626', width: 2 }, itemStyle: { color: '#DC2626' }, areaStyle: { color: 'rgba(220,38,38,0.1)' }, symbol: 'circle', symbolSize: 4 }
        ]
    });
}

// Render FHI horizontal bar chart with average markLine
function renderFHIChart() {
    const data = demoData.projectFHI;
    const threshold = demoData.fhiThreshold;
    const projectNames = data.map(d => d.name);
    const fhiValues = data.map(d => d.fhi);
    const avgFHI = (fhiValues.reduce((a, b) => a + b, 0) / fhiValues.length).toFixed(2);

    // Count projects above threshold
    const aboveThreshold = data.filter(d => d.fhi >= threshold).length;
    const percentage = Math.round(aboveThreshold / data.length * 100);

    // Update subtitle
    document.getElementById('fhiSubtitle').innerHTML =
        `<span style="color:var(--success);font-weight:600;">${aboveThreshold}/${data.length}</span> dự án có FHI ≥ ${threshold} (<span style="color:var(--success);font-weight:600;">${percentage}%</span>) | FHI Trung bình: <span style="color:var(--warning);font-weight:600;">${avgFHI}</span>`;

    charts.barFHI = echarts.init(document.getElementById('barFHI'));
    charts.barFHI.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            formatter: params => {
                const p = params[0];
                const status = p.value >= threshold ? '✅ Đạt' : '⚠️ Chưa đạt';
                return `<strong>${p.name}</strong><br/>FHI: <strong>${p.value}</strong><br/>Trạng thái: ${status}`;
            }
        },
        grid: { left: '3%', right: '8%', bottom: '0%', top: '10%', containLabel: true },
        xAxis: {
            type: 'value',
            min: 0,
            max: 2,
            axisLabel: { color: '#64748B' },
            splitLine: { lineStyle: { color: '#E2E8F0' } }
        },
        yAxis: {
            type: 'category',
            data: projectNames,
            axisLabel: { color: '#64748B', fontSize: 11 },
            axisTick: { show: false },
            axisLine: { lineStyle: { color: '#E2E8F0' } }
        },
        series: [{
            type: 'bar',
            data: fhiValues.map(v => ({
                value: v,
                itemStyle: {
                    color: v >= threshold ? '#16A34A' : '#F59E0B',
                    borderRadius: [0, 4, 4, 0]
                }
            })),
            barWidth: '60%',
            label: {
                show: true,
                position: 'right',
                formatter: '{c}',
                color: '#64748B',
                fontSize: 11
            },
            markLine: {
                silent: true,
                symbol: 'none',
                lineStyle: { color: '#DC2626', width: 2, type: 'dashed' },
                label: {
                    show: true,
                    position: 'end',
                    formatter: 'TB: {c}',
                    color: '#DC2626',
                    fontWeight: 'bold'
                },
                data: [{ xAxis: parseFloat(avgFHI) }]
            }
        }]
    });
}

// Combo charts for monthly Thu/Chi
function renderMonthlyComboCharts() {
    const months = demoData.months.slice(0, 10);

    // Thu data
    const thuActual = [6.5, 6.5, 6.5, 6.8, 7.2, 7.5, 7.8, 7.2, 7.0, 5.4];
    const thuBudget = [7.0, 7.2, 7.3, 7.0, 7.3, 7.4, 7.5, 8.0, 8.2, 8.3];
    const thuDiff = thuActual.map((v, i) => +(v - thuBudget[i]).toFixed(1));

    charts.barMonthlyThu = echarts.init(document.getElementById('barMonthlyThu'));
    charts.barMonthlyThu.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'cross' },
            formatter: params => {
                let html = `<strong>${params[0].axisValue}</strong><br/>`;
                params.forEach(p => {
                    const color = p.seriesName === 'Chênh lệch' ? (p.value >= 0 ? '#16A34A' : '#DC2626') : p.color;
                    html += `<span style="color:${color}">●</span> ${p.seriesName}: <strong>${p.value} tỷ</strong><br/>`;
                });
                return html;
            }
        },
        legend: { data: ['Thực thu', 'Ngân sách', 'Chênh lệch'], textStyle: { color: '#64748B', fontSize: 10 }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '10%', containLabel: true },
        xAxis: { type: 'category', data: months, axisLabel: { color: '#64748B' } },
        yAxis: [{
            type: 'value',
            name: 'Giá trị (tỷ)',
            axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' },
            splitLine: { lineStyle: { color: '#E2E8F0' } }
        }],
        series: [
            {
                name: 'Chênh lệch',
                type: 'bar',
                data: thuDiff.map(v => ({
                    value: v,
                    itemStyle: { color: v >= 0 ? 'rgba(22,163,74,0.6)' : 'rgba(220,38,38,0.6)' }
                })),
                barWidth: '40%',
                label: {
                    show: true,
                    position: 'top',
                    formatter: params => params.value !== 0 ? params.value : '',
                    fontSize: 9,
                    color: '#64748B'
                }
            },
            {
                name: 'Thực thu',
                type: 'line',
                smooth: true,
                data: thuActual,
                lineStyle: { color: '#16A34A', width: 3 },
                itemStyle: { color: '#16A34A' },
                symbol: 'circle',
                symbolSize: 6
            },
            {
                name: 'Ngân sách',
                type: 'line',
                smooth: true,
                data: thuBudget,
                lineStyle: { color: '#3B82F6', width: 2, type: 'dashed' },
                itemStyle: { color: '#3B82F6' },
                symbol: 'diamond',
                symbolSize: 6
            }
        ]
    });

    // Chi data
    const chiActual = [5.5, 5.5, 5.8, 5.7, 5.8, 5.9, 6.3, 6.5, 7.0, 7.2];
    const chiBudget = [6.0, 6.1, 6.0, 6.0, 6.1, 6.2, 6.5, 6.8, 7.2, 7.5];
    const chiDiff = chiActual.map((v, i) => +(v - chiBudget[i]).toFixed(1));

    charts.barMonthlyChi = echarts.init(document.getElementById('barMonthlyChi'));
    charts.barMonthlyChi.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'cross' },
            formatter: params => {
                let html = `<strong>${params[0].axisValue}</strong><br/>`;
                params.forEach(p => {
                    // For Chi, negative diff (under budget) is good
                    const color = p.seriesName === 'Chênh lệch' ? (p.value <= 0 ? '#16A34A' : '#DC2626') : p.color;
                    html += `<span style="color:${color}">●</span> ${p.seriesName}: <strong>${p.value} tỷ</strong><br/>`;
                });
                return html;
            }
        },
        legend: { data: ['Thực chi', 'Ngân sách', 'Chênh lệch'], textStyle: { color: '#64748B', fontSize: 10 }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '10%', containLabel: true },
        xAxis: { type: 'category', data: months, axisLabel: { color: '#64748B' } },
        yAxis: [{
            type: 'value',
            name: 'Giá trị (tỷ)',
            axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' },
            splitLine: { lineStyle: { color: '#E2E8F0' } }
        }],
        series: [
            {
                name: 'Chênh lệch',
                type: 'bar',
                data: chiDiff.map(v => ({
                    value: v,
                    // For Chi, under budget (negative) is good = green, over budget (positive) is bad = red
                    itemStyle: { color: v <= 0 ? 'rgba(22,163,74,0.6)' : 'rgba(220,38,38,0.6)' }
                })),
                barWidth: '40%',
                label: {
                    show: true,
                    position: 'top',
                    formatter: params => params.value !== 0 ? params.value : '',
                    fontSize: 9,
                    color: '#64748B'
                }
            },
            {
                name: 'Thực chi',
                type: 'line',
                smooth: true,
                data: chiActual,
                lineStyle: { color: '#DC2626', width: 3 },
                itemStyle: { color: '#DC2626' },
                symbol: 'circle',
                symbolSize: 6
            },
            {
                name: 'Ngân sách',
                type: 'line',
                smooth: true,
                data: chiBudget,
                lineStyle: { color: '#3B82F6', width: 2, type: 'dashed' },
                itemStyle: { color: '#3B82F6' },
                symbol: 'diamond',
                symbolSize: 6
            }
        ]
    });
}

function renderStructureBars() {
    const thuCats = demoData.thuItems.map(i => i.shortName);
    const chiCats = demoData.chiItems.slice(0, 6).map(i => i.shortName);

    // Data for THU
    const thuActual = [38.5, 18.2, 11.7, 8.4];
    const thuBudget = [45.2, 25.0, 15.0, 9];

    charts.barStructureThu = echarts.init(document.getElementById('barStructureThu'));
    charts.barStructureThu.setOption({
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

    // Data for CHI
    const chiActual = [1.5, 14, 9.8, 7.2, 11.5, 26];
    const chiBudget = [1.6, 15.2, 10.8, 8.2, 12.5, 29];

    charts.barStructureChi = echarts.init(document.getElementById('barStructureChi'));
    charts.barStructureChi.setOption({
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

function updatePage2() {
    renderGaugesPage1();
    renderFHIChart();
    renderMonthlyComboCharts();
    renderStructureBars();
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

    let html = '<table class="data-table"><thead><tr><th>Hạng mục</th><th>Trước duyệt</th><th>Sau duyệt</th><th>Chênh lệch</th></tr></thead><tbody>';
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

    charts.gaugeThuDetail = echarts.init(document.getElementById('gaugeThuDetail'));
    charts.gaugeThuDetail.setOption({
        series: [{
            type: 'gauge', startAngle: 180, endAngle: 0, min: 0, max: 100,
            radius: '95%', center: ['50%', '75%'],
            pointer: { show: true, length: '55%', width: 3 },
            axisLine: { lineStyle: { width: 14, color: [[0.6, '#DC2626'], [0.8, '#F59E0B'], [1, '#16A34A']] } },
            axisTick: { show: false }, splitLine: { show: false },
            axisLabel: { show: false },
            detail: { formatter: '{value}%', fontSize: 16, color: '#0F172A', offsetCenter: [0, '40%'] },
            data: [{ value: thuPct }]
        }]
    });

    charts.gaugeChiDetail = echarts.init(document.getElementById('gaugeChiDetail'));
    charts.gaugeChiDetail.setOption({
        series: [{
            type: 'gauge', startAngle: 180, endAngle: 0, min: 0, max: 100,
            radius: '95%', center: ['50%', '75%'],
            pointer: { show: true, length: '55%', width: 3 },
            axisLine: { lineStyle: { width: 14, color: [[0.6, '#16A34A'], [0.8, '#F59E0B'], [1, '#DC2626']] } },
            axisTick: { show: false }, splitLine: { show: false },
            axisLabel: { show: false },
            detail: { formatter: '{value}%', fontSize: 16, color: '#0F172A', offsetCenter: [0, '40%'] },
            data: [{ value: chiPct }]
        }]
    });
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
// Mapping: page1=Hiệu quả Thu-Chi, page2=Duyệt Chi, page3=Chi tiết DA, page4=Ngân sách
document.addEventListener('DOMContentLoaded', () => {
    initPage2();       // page1 mới = Hiệu quả Thu-Chi (hàm initPage2 cũ)
    initPage3();       // page2 mới = Duyệt Chi (hàm initPage3 cũ)
    initPage3Detail(); // page3 mới = Chi tiết Thu-Chi DA (hàm mới)
    initPage1();       // page4 mới = Ngân sách (hàm initPage1 cũ)
});
