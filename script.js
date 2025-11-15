// داده‌های اولیه سناریوها
const initialData = {
    scenarioA: {
        hardware: [
            { item: 'Beacon (iBeacon)', count: 10, price: 95 },
            { item: 'باتری اضافی', count: 10, price: 10 },
            { item: 'ابزار نصب و کالیبراسیون', count: 1, price: 200 },
            { item: 'تجهیزات تست', count: 1, price: 125 }
        ],
        installation: [
            { item: 'نصب Beaconها', duration: '2 هفته', cost: 400 },
            { item: 'کالیبراسیون و تست', duration: '1 هفته', cost: 240 },
            { item: 'مستندسازی', duration: '1 هفته', cost: 200 }
        ],
        development: [
            { item: 'تحلیل و طراحی', duration: '2 هفته', cost: 1600 },
            { item: 'طراحی UI/UX', duration: '2 هفته', cost: 1600 },
            { item: 'توسعه اپ Flutter', duration: '8 هفته', cost: 6400 },
            { item: 'ادغام Beacon SDK', duration: '2 هفته', cost: 1600 },
            { item: 'سیستم مسیریابی', duration: '3 هفته', cost: 2400 },
            { item: 'نمایش نقشه 3D', duration: '2 هفته', cost: 1600 },
            { item: 'تست و Debug', duration: '2 هفته', cost: 1600 },
            { item: 'مستندسازی فنی', duration: '1 هفته', cost: 800 },
            { item: 'مدلسازی 3D محیط', duration: '3 هفته', cost: 2400 },
            { item: 'بافت‌دهی و رندر', duration: '2 هفته', cost: 1600 },
            { item: 'بهینه‌سازی مدل', duration: '1 هفته', cost: 800 },
            { item: 'انیمیشن و Interaction', duration: '2 هفته', cost: 1600 },
            { item: 'تست واقعیت افزوده', duration: '1 هفته', cost: 800 },
            { item: 'یکپارچه‌سازی با اپ', duration: '1 هفته', cost: 800 }
        ],
        maintenance: [
            { item: 'تعویض باتری', cost: 100 },
            { item: 'بازرسی فصلی', cost: 200 },
            { item: 'بروزرسانی اپ', cost: 1200 },
            { item: 'پشتیبانی فنی', cost: 800 },
            { item: 'سرور و Cloud', cost: 900 }
        ]
    },
    scenarioB: {
        hardware: [
            { item: 'Beacon (iBeacon)', count: 8, price: 95 },
            { item: 'باتری اضافی', count: 8, price: 10 },
            { item: 'ابزار نصب و کالیبراسیون', count: 1, price: 160 },
            { item: 'تجهیزات تست GPS', count: 1, price: 100 }
        ],
        installation: [
            { item: 'نصب Beaconها', duration: '1.5 هفته', cost: 350 },
            { item: 'کالیبراسیون GPS و Beacon', duration: '1 هفته', cost: 240 },
            { item: 'مستندسازی', duration: '0.5 هفته', cost: 175 }
        ],
        development: [
            { item: 'تحلیل و طراحی', duration: '2 هفته', cost: 1600 },
            { item: 'طراحی UI/UX', duration: '2 هفته', cost: 1600 },
            { item: 'توسعه اپ (ماژول GPS)', duration: '5 هفته', cost: 4000 },
            { item: 'توسعه اپ (ماژول Beacon)', duration: '5 هفته', cost: 4000 },
            { item: 'ادغام GPS و Beacon', duration: '3 هفته', cost: 2400 },
            { item: 'Fusion Algorithm', duration: '2 هفته', cost: 1600 },
            { item: 'نمایش نقشه 3D', duration: '2 هفته', cost: 1600 },
            { item: 'تست جامع و Debug', duration: '3 هفته', cost: 2400 },
            { item: 'مستندسازی فنی', duration: '1 هفته', cost: 800 },
            { item: 'تست میدانی', duration: '2 هفته', cost: 1600 },
            { item: 'مدلسازی 3D محیط', duration: '3 هفته', cost: 2400 },
            { item: 'بافت‌دهی و رندر', duration: '2 هفته', cost: 1600 },
            { item: 'بهینه‌سازی مدل', duration: '1 هفته', cost: 800 },
            { item: 'انیمیشن و Interaction', duration: '2 هفته', cost: 1600 },
            { item: 'تست واقعیت افزوده', duration: '1 هفته', cost: 800 },
            { item: 'یکپارچه‌سازی با اپ', duration: '1 هفته', cost: 800 }
        ],
        maintenance: [
            { item: 'تعویض باتری', cost: 80 },
            { item: 'بازرسی فصلی', cost: 180 },
            { item: 'بروزرسانی اپ', cost: 1200 },
            { item: 'پشتیبانی فنی', cost: 800 },
            { item: 'سرور و Cloud', cost: 900 }
        ]
    },
    scenarioC: {
        hardware: [
            { item: 'Beacon حرفه‌ای (BLE 5.0)', count: 6, price: 150 },
            { item: 'Gateway و Hub', count: 2, price: 72 },
            { item: 'تجهیزات تست GPS', count: 1, price: 60 }
        ],
        installation: [
            { item: 'نصب Beaconها و Gateway', duration: '1 هفته', cost: 280 },
            { item: 'کالیبراسیون GPS و Beacon', duration: '1 هفته', cost: 240 },
            { item: 'مستندسازی', duration: '0.5 هفته', cost: 110 }
        ],
        development: [
            { item: 'تحلیل و طراحی', duration: '2 هفته', cost: 1600 },
            { item: 'طراحی UI/UX', duration: '2 هفته', cost: 1600 },
            { item: 'توسعه اپ (ماژول GPS)', duration: '5 هفته', cost: 4000 },
            { item: 'توسعه اپ (ماژول Beacon)', duration: '5 هفته', cost: 4000 },
            { item: 'ادغام GPS و Beacon', duration: '3 هفته', cost: 2400 },
            { item: 'Fusion Algorithm پیشرفته', duration: '2 هفته', cost: 1600 },
            { item: 'نمایش نقشه 3D', duration: '2 هفته', cost: 1600 },
            { item: 'تست جامع و Debug', duration: '3 هفته', cost: 2400 },
            { item: 'مستندسازی فنی', duration: '1 هفته', cost: 800 },
            { item: 'تست میدانی', duration: '2 هفته', cost: 1600 },
            { item: 'بافت‌دهی و رندر', duration: '2 هفته', cost: 1600 },
            { item: 'بهینه‌سازی مدل', duration: '1 هفته', cost: 800 },
            { item: 'انیمیشن و Interaction', duration: '2 هفته', cost: 1600 },
            { item: 'تست واقعیت افزوده', duration: '1 هفته', cost: 800 },
            { item: 'یکپارچه‌سازی با اپ', duration: '1 هفته', cost: 800 }
        ],
        maintenance: [
            { item: 'بازرسی فصلی', cost: 150 },
            { item: 'بروزرسانی اپ', cost: 1200 },
            { item: 'پشتیبانی فنی', cost: 800 },
            { item: 'سرور و Cloud', cost: 900 },
            { item: 'مانیتورینگ Cloud', cost: 120 }
        ]
    }
};

// بارگذاری اولیه
document.addEventListener('DOMContentLoaded', function () {
    // بارگذاری داده‌ها از localStorage یا استفاده از داده‌های اولیه
    loadAllData();

    // تنظیم تب‌ها
    setupTabs();

    // محاسبه اولیه
    calculateAll();

    // تنظیم event listeners برای تغییرات
    setupEditListeners();
});

// تابع بارگذاری داده‌ها
function loadAllData() {
    const savedData = localStorage.getItem('projectData');
    const data = savedData ? JSON.parse(savedData) : initialData;

    ['A', 'B', 'C'].forEach(scenario => {
        const scenarioKey = 'scenario' + scenario;
        loadTableData('hardware' + scenario, data[scenarioKey].hardware, 'hardware');
        loadTableData('installation' + scenario, data[scenarioKey].installation, 'installation');
        loadTableData('development' + scenario, data[scenarioKey].development, 'development');
        loadTableData('maintenance' + scenario, data[scenarioKey].maintenance, 'maintenance');
    });
}

// تابع بارگذاری داده‌های جدول
function loadTableData(tableId, data, type) {
    const tbody = document.getElementById(tableId);
    tbody.innerHTML = '';

    data.forEach((row, index) => {
        const tr = document.createElement('tr');

        if (row.isSection) {
            tr.className = 'subsection';
            tr.innerHTML = `<td colspan="4"><strong>${row.item}</strong></td>`;
        } else {
            if (type === 'hardware') {
                const total = row.count * row.price;
                tr.innerHTML = `
                    <td contenteditable="true" class="editable" data-field="item">${row.item}</td>
                    <td contenteditable="true" class="editable number" data-field="count">${row.count}</td>
                    <td contenteditable="true" class="editable number" data-field="price">${row.price}</td>
                    <td class="calculated">${total}</td>
                    <td><button class="delete-btn" onclick="deleteRow(this)">🗑️ حذف</button></td>
                `;
            } else if (type === 'maintenance') {
                tr.innerHTML = `
                    <td contenteditable="true" class="editable" data-field="item">${row.item}</td>
                    <td contenteditable="true" class="editable number" data-field="cost">${row.cost}</td>
                    <td><button class="delete-btn" onclick="deleteRow(this)">🗑️ حذف</button></td>
                `;
            } else {
                tr.innerHTML = `
                    <td contenteditable="true" class="editable" data-field="item">${row.item}</td>
                    <td contenteditable="true" class="editable" data-field="duration">${row.duration}</td>
                    <td contenteditable="true" class="editable number" data-field="cost">${row.cost}</td>
                    <td><button class="delete-btn" onclick="deleteRow(this)">🗑️ حذف</button></td>
                `;
            }
        }

        tbody.appendChild(tr);
    });
}

// تنظیم تب‌ها
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// تنظیم listeners برای ویرایش
function setupEditListeners() {
    document.addEventListener('input', function (e) {
        if (e.target.classList.contains('editable')) {
            calculateAll();
            saveData();
            showSaveIndicator();
        }
    });
}

// محاسبه همه چیز
function calculateAll() {
    ['A', 'B', 'C'].forEach(scenario => {
        calculateScenario(scenario);
    });
    updateComparison();
}

// محاسبه یک سناریو
function calculateScenario(scenario) {
    const hardwareTotal = calculateHardware('hardware' + scenario);
    const installationTotal = calculateSimpleTable('installation' + scenario);
    const developmentTotal = calculateSimpleTable('development' + scenario);
    const maintenanceTotal = calculateSimpleTable('maintenance' + scenario);

    document.getElementById('totalHardware' + scenario).textContent = hardwareTotal;
    document.getElementById('totalInstallation' + scenario).textContent = installationTotal;
    document.getElementById('totalDevelopment' + scenario).textContent = developmentTotal;
    document.getElementById('totalMaintenance' + scenario).textContent = maintenanceTotal;

    const grandTotal = hardwareTotal + installationTotal + developmentTotal;
    document.getElementById('grandTotal' + scenario).textContent = grandTotal;
}

// محاسبه سخت‌افزار
function calculateHardware(tableId) {
    const tbody = document.getElementById(tableId);
    const rows = tbody.querySelectorAll('tr');
    let total = 0;

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 4) {
            const count = parseFloat(cells[1].textContent) || 0;
            const price = parseFloat(cells[2].textContent) || 0;
            const rowTotal = count * price;
            cells[3].textContent = rowTotal;
            total += rowTotal;
        }
    });

    return total;
}

// محاسبه جداول ساده
function calculateSimpleTable(tableId) {
    const tbody = document.getElementById(tableId);
    const rows = tbody.querySelectorAll('tr:not(.subsection)');
    let total = 0;

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const costCell = cells[cells.length - 2]; // سلول قبل از دکمه حذف
        const cost = parseFloat(costCell.textContent) || 0;
        total += cost;
    });

    return total;
}

// به‌روزرسانی جدول مقایسه
function updateComparison() {
    ['A', 'B', 'C'].forEach(scenario => {
        const grandTotal = document.getElementById('grandTotal' + scenario).textContent;
        const maintenance = document.getElementById('totalMaintenance' + scenario).textContent;

        document.getElementById('comp' + scenario + '1').textContent = grandTotal;
        document.getElementById('comp' + scenario + '2').textContent = maintenance;
    });
}

// افزودن ردیف جدید
function addRow(tableId, type) {
    const tbody = document.getElementById(tableId);
    const tr = document.createElement('tr');

    if (type === 'hardware') {
        tr.innerHTML = `
            <td contenteditable="true" class="editable" data-field="item">قلم جدید</td>
            <td contenteditable="true" class="editable number" data-field="count">1</td>
            <td contenteditable="true" class="editable number" data-field="price">0</td>
            <td class="calculated">0</td>
            <td><button class="delete-btn" onclick="deleteRow(this)">🗑️ حذف</button></td>
        `;
    } else if (type === 'maintenance') {
        tr.innerHTML = `
            <td contenteditable="true" class="editable" data-field="item">قلم جدید</td>
            <td contenteditable="true" class="editable number" data-field="cost">0</td>
            <td><button class="delete-btn" onclick="deleteRow(this)">🗑️ حذف</button></td>
        `;
    } else {
        tr.innerHTML = `
            <td contenteditable="true" class="editable" data-field="item">فاز جدید</td>
            <td contenteditable="true" class="editable" data-field="duration">0 هفته</td>
            <td contenteditable="true" class="editable number" data-field="cost">0</td>
            <td><button class="delete-btn" onclick="deleteRow(this)">🗑️ حذف</button></td>
        `;
    }

    tbody.appendChild(tr);
    calculateAll();
    saveData();
    showSaveIndicator();
}

// حذف ردیف
function deleteRow(button) {
    if (confirm('آیا از حذف این ردیف اطمینان دارید؟')) {
        const row = button.closest('tr');
        row.remove();
        calculateAll();
        saveData();
        showSaveIndicator();
    }
}

// ذخیره داده‌ها
function saveData() {
    const data = {
        scenarioA: {
            hardware: extractTableData('hardwareA', 'hardware'),
            installation: extractTableData('installationA', 'installation'),
            development: extractTableData('developmentA', 'development'),
            maintenance: extractTableData('maintenanceA', 'maintenance')
        },
        scenarioB: {
            hardware: extractTableData('hardwareB', 'hardware'),
            installation: extractTableData('installationB', 'installation'),
            development: extractTableData('developmentB', 'development'),
            maintenance: extractTableData('maintenanceB', 'maintenance')
        },
        scenarioC: {
            hardware: extractTableData('hardwareC', 'hardware'),
            installation: extractTableData('installationC', 'installation'),
            development: extractTableData('developmentC', 'development'),
            maintenance: extractTableData('maintenanceC', 'maintenance')
        }
    };

    localStorage.setItem('projectData', JSON.stringify(data));
}

// استخراج داده‌های جدول
function extractTableData(tableId, type) {
    const tbody = document.getElementById(tableId);
    const rows = tbody.querySelectorAll('tr');
    const data = [];

    rows.forEach(row => {
        const cells = row.querySelectorAll('td[contenteditable="true"]');

        if (row.classList.contains('subsection')) {
            data.push({
                item: row.querySelector('td').textContent.trim(),
                isSection: true,
                duration: '',
                cost: 0
            });
        } else if (type === 'hardware') {
            if (cells.length >= 3) {
                data.push({
                    item: cells[0].textContent.trim(),
                    count: parseFloat(cells[1].textContent) || 0,
                    price: parseFloat(cells[2].textContent) || 0
                });
            }
        } else if (type === 'maintenance') {
            if (cells.length >= 2) {
                data.push({
                    item: cells[0].textContent.trim(),
                    cost: parseFloat(cells[1].textContent) || 0
                });
            }
        } else {
            if (cells.length >= 3) {
                data.push({
                    item: cells[0].textContent.trim(),
                    duration: cells[1].textContent.trim(),
                    cost: parseFloat(cells[2].textContent) || 0
                });
            }
        }
    });

    return data;
}

// نمایش اندیکاتور ذخیره
function showSaveIndicator() {
    const indicator = document.getElementById('saveIndicator');
    indicator.classList.add('show');

    setTimeout(() => {
        indicator.classList.remove('show');
    }, 2000);
}
