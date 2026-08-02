const coef = {
  "intercept": -430187.8244240869,
  "Ram": 20046.129914302273,
  "Weight": 34284.69937147674,
  "ScreenW": 465.63250051097674,
  "ScreenH": -516.4288184824873,
  "CPU_freq": 59049.029045834555,
  "SecondaryStorage": -16.450849327578908,
  "Company_Acer": -81268.56160816672,
  "Company_Apple": 21921.198412323443,
  "Company_Asus": -52254.476439997205,
  "Company_Chuwi": -132059.129696106,
  "Company_Dell": -42294.385969712275,
  "Company_Fujitsu": -87289.90425858973,
  "Company_Google": 163650.8292884654,
  "Company_HP": -23472.306618143208,
  "Company_Huawei": 43075.78598746678,
  "Company_LG": 37821.08176288947,
  "Company_Lenovo": -39805.30318108367,
  "Company_MSI": -3628.257396654066,
  "Company_Mediacom": -115560.23723568537,
  "Company_Microsoft": 154420.87525251537,
  "Company_Razer": 301993.57399521,
  "Company_Samsung": -16914.25395893048,
  "Company_Toshiba": 2716.7115373395136,
  "Company_Vero": -115928.52807546691,
  "Company_Xiaomi": -15124.711797680488,
  "TypeName_2 in 1 Convertible": -5185.796385732974,
  "TypeName_Gaming": -61176.0695016676,
  "TypeName_Netbook": -14755.683899786265,
  "TypeName_Notebook": -87871.42804450859,
  "TypeName_Ultrabook": 14489.248963764323,
  "TypeName_Workstation": 154499.72886798496,
  "OS_Android": -76150.81658614287,
  "OS_Chrome OS": -43934.1981269503,
  "OS_Linux": -4143.389405769154,
  "OS_Mac OS X": 4415.6875951590555,
  "OS_No OS": -52026.844214550976,
  "OS_Windows 10": 27246.20039543152,
  "OS_Windows 10 S": -21591.957131114315,
  "OS_Windows 7": 148679.80665677623,
  "OS_macOS": 17505.510817164002,
  "Screen_4K Ultra HD": -112796.6859010551,
  "Screen_Full HD": 62946.457720602266,
  "Screen_Quad HD+": -74536.6973523456,
  "Screen_Standard": 124386.92553281426,
  "Touchscreen_No": 11455.17675324509,
  "Touchscreen_Yes": -11455.176753245622,
  "IPSpanel_No": -5679.761646904524,
  "IPSpanel_Yes": 5679.761646902931,
  "RetinaDisplay_No": 10625.606924371066,
  "RetinaDisplay_Yes": -10625.606924370612,
  "CPU_company_AMD": -38636.57441926746,
  "CPU_company_Intel": 24034.425003799974,
  "CPU_company_Samsung": 14602.149415469343,
  "PrimaryStorageType_Flash Storage": 16058.06294571282,
  "PrimaryStorageType_HDD": -5927.005283395134,
  "PrimaryStorageType_Hybrid": -59113.314603221486,
  "PrimaryStorageType_SSD": 48982.25694090467,
  "SecondaryStorageType_HDD": 20145.969265169875,
  "SecondaryStorageType_Hybrid": 91682.04656508152,
  "SecondaryStorageType_No": 1024.72008778085,
  "SecondaryStorageType_SSD": -112852.7359180288,
  "GPU_company_AMD": -27523.686810547126,
  "GPU_company_ARM": 14602.14941546938,
  "GPU_company_Intel": 18608.03233725891,
  "GPU_company_Nvidia": -5686.494942191715
};

const options = {
  Company: ["Acer", "Apple", "Asus", "Chuwi", "Dell", "Fujitsu", "Google", "HP", "Huawei", "LG", "Lenovo", "MSI", "Mediacom", "Microsoft", "Razer", "Samsung", "Toshiba", "Vero", "Xiaomi"],
  TypeName: ["2 in 1 Convertible", "Gaming", "Netbook", "Notebook", "Ultrabook", "Workstation"],
  OS: ["Android", "Chrome OS", "Linux", "Mac OS X", "No OS", "Windows 10", "Windows 10 S", "Windows 7", "macOS"],
  Screen: ["4K Ultra HD", "Full HD", "Quad HD+", "Standard"],
  CPU_company: ["AMD", "Intel", "Samsung"],
  GPU_company: ["AMD", "ARM", "Intel", "Nvidia"],
  PrimaryStorageType: ["Flash Storage", "HDD", "Hybrid", "SSD"],
  SecondaryStorageType: ["HDD", "Hybrid", "No", "SSD"]
};

const resolutions = {
  "1366 × 768": [1366, 768],
  "1440 × 900": [1440, 900],
  "1600 × 900": [1600, 900],
  "1920 × 1080 (Full HD)": [1920, 1080],
  "1920 × 1200": [1920, 1200],
  "2160 × 1440": [2160, 1440],
  "2256 × 1504": [2256, 1504],
  "2304 × 1440": [2304, 1440],
  "2400 × 1600": [2400, 1600],
  "2560 × 1440 (QHD)": [2560, 1440],
  "2560 × 1600": [2560, 1600],
  "2736 × 1824": [2736, 1824],
  "2880 × 1800 (Retina)": [2880, 1800],
  "3200 × 1800": [3200, 1800],
  "3840 × 2160 (4K)": [3840, 2160]
};


const numericChoices = {
  Ram: [2, 4, 6, 8, 12, 16, 24, 32, 64],
  CPU_freq: [0.9, 1.0, 1.1, 1.2, 1.3, 1.44, 1.5, 1.6, 1.8, 1.9, 1.92, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2, 3.6],
  SecondaryStorage: [0, 256, 500, 512, 1024, 2048]
};

function goToForm() {
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('formScreen').classList.remove('hidden');
  window.scrollTo(0, 0);
}
function goToLanding() {
  document.getElementById('formScreen').classList.add('hidden');
  document.getElementById('landing').classList.remove('hidden');
}


for (const key in options) {
  const sel = document.getElementById(key);
  options[key].forEach(v => {
    const o = document.createElement('option');
    o.value = v; o.textContent = v;
    sel.appendChild(o);
  });
}
const resSel = document.getElementById('Resolution');
Object.keys(resolutions).forEach(label => {
  const o = document.createElement('option');
  o.value = label; o.textContent = label;
  if (label.includes('Full HD')) o.selected = true;
  resSel.appendChild(o);
});

const defaults = { Ram: 8, CPU_freq: 2.5, SecondaryStorage: 0 };
for (const key in numericChoices) {
  const sel = document.getElementById(key);
  numericChoices[key].forEach(v => {
    const o = document.createElement('option');
    o.value = v; o.textContent = v;
    if (v === defaults[key]) o.selected = true;
    sel.appendChild(o);
  });
}


['Touchscreen', 'IPSpanel', 'RetinaDisplay'].forEach(name => {
  const group = document.getElementById(name + '-group');
  group.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      group.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});

function getToggle(name) {
  return document.querySelector('#' + name + '-group .toggle-btn.active').dataset.val;
}


const weightEl = document.getElementById('Weight');
weightEl.addEventListener('input', () => {
  document.getElementById('WeightVal').textContent = parseFloat(weightEl.value).toFixed(1);
});

function predict() {
  let total = coef.intercept;

  const numeric = ['Ram', 'Weight', 'CPU_freq', 'SecondaryStorage'];
  numeric.forEach(id => {
    total += coef[id] * Number(document.getElementById(id).value);
  });

  const [w, h] = resolutions[document.getElementById('Resolution').value];
  total += coef.ScreenW * w;
  total += coef.ScreenH * h;

  ['Company', 'TypeName', 'OS', 'Screen', 'CPU_company', 'GPU_company', 'PrimaryStorageType', 'SecondaryStorageType'].forEach(key => {
    const val = document.getElementById(key).value;
    const featKey = key + '_' + val;
    if (coef.hasOwnProperty(featKey)) total += coef[featKey];
  });

  ['Touchscreen', 'IPSpanel', 'RetinaDisplay'].forEach(key => {
    const val = getToggle(key);
    const featKey = key + '_' + val;
    if (coef.hasOwnProperty(featKey)) total += coef[featKey];
  });

  const clamped = Math.max(total, 15000);
  const priceOut = document.getElementById('priceOut');
  priceOut.textContent = 'PKR ' + Math.round(clamped).toLocaleString('en-PK');

  priceOut.classList.remove('price-pop');
  void priceOut.offsetWidth;
  priceOut.classList.add('price-pop');
}

predict();
