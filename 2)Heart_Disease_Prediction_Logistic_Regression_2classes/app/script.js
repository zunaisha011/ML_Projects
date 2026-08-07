/**
 * Heart Disease Risk Prediction
 * Trained Model: Logistic Regression with StandardScaler (scikit-learn)
 * Accuracy: 85.19%
 */

const model = {
  features: [
    "Age",
    "Sex",
    "Chest_pain_type",
    "BP",
    "Cholesterol",
    "FBS_over_120",
    "EKG_results",
    "Max_HR",
    "Exercise_angina",
    "ST_depression",
    "Slope_of_ST",
    "Number_of_vessels_fluro",
    "Thallium"
  ],
  means: [
    54.361111111111114,
    0.6851851851851852,
    3.1018518518518516,
    131.07407407407408,
    248.28703703703704,
    0.13425925925925927,
    1.0509259259259258,
    150.55555555555554,
    0.3194444444444444,
    1.0449074074074074,
    1.5787037037037037,
    0.6620370370370371,
    4.652777777777778
  ],
  scales: [
    9.251084354193031,
    0.46444208162905376,
    0.9760067434384413,
    17.358797376687228,
    51.49146835586525,
    0.34093065359749375,
    0.9963819149497635,
    22.278054861119756,
    0.46626139809984773,
    1.1125013486220459,
    0.6034700468073706,
    0.9337516515521705,
    1.9304556329056841
  ],
  coef: [
    0.025067888132031223,
    0.89269002148554,
    0.7161149578590714,
    0.40880808686108117,
    0.34127415889129725,
    -0.34791393317090846,
    0.07310926460615708,
    -0.39946965553096286,
    0.4813652732116343,
    0.24070235720642744,
    0.4130086715551993,
    1.1857686422529514,
    0.5841503350650095
  ],
  intercept: -0.2522303222825132
};

/* Screen Navigation */
function goToForm() {
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('formScreen').classList.remove('hidden');
  window.scrollTo(0, 0);
}

function goToLanding() {
  document.getElementById('formScreen').classList.add('hidden');
  document.getElementById('landing').classList.remove('hidden');
}

/* Toggle Buttons */
const toggleFields = ['Sex', 'Exercise_angina', 'FBS_over_120'];
toggleFields.forEach(name => {
  const group = document.getElementById(name + '-group');
  if (group) {
    group.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }
});

function getToggleVal(name) {
  const activeBtn = document.querySelector('#' + name + '-group .toggle-btn.active');
  return activeBtn ? Number(activeBtn.dataset.val) : 0;
}

/* Sliders Live Value Badges (Only updates badge numbers) */
const sliderConfigs = [
  { id: 'Age', badge: 'AgeVal', decimals: 0 },
  { id: 'BP', badge: 'BPVal', decimals: 0 },
  { id: 'Max_HR', badge: 'Max_HRVal', decimals: 0 },
  { id: 'Cholesterol', badge: 'CholesterolVal', decimals: 0 },
  { id: 'ST_depression', badge: 'ST_depressionVal', decimals: 1 }
];

sliderConfigs.forEach(cfg => {
  const el = document.getElementById(cfg.id);
  const badge = document.getElementById(cfg.badge);
  if (el && badge) {
    el.addEventListener('input', () => {
      badge.textContent = parseFloat(el.value).toFixed(cfg.decimals);
    });
  }
});

/* Prediction Function - Runs only when "Predict Heart Disease" button is clicked */
function predict() {
  const values = {
    Age: Number(document.getElementById('Age').value),
    Sex: getToggleVal('Sex'),
    Chest_pain_type: Number(document.getElementById('Chest_pain_type').value),
    BP: Number(document.getElementById('BP').value),
    Cholesterol: Number(document.getElementById('Cholesterol').value),
    FBS_over_120: getToggleVal('FBS_over_120'),
    EKG_results: Number(document.getElementById('EKG_results').value),
    Max_HR: Number(document.getElementById('Max_HR').value),
    Exercise_angina: getToggleVal('Exercise_angina'),
    ST_depression: Number(document.getElementById('ST_depression').value),
    Slope_of_ST: Number(document.getElementById('Slope_of_ST').value),
    Number_of_vessels_fluro: Number(document.getElementById('Number_of_vessels_fluro').value),
    Thallium: Number(document.getElementById('Thallium').value)
  };

  let z = model.intercept;
  model.features.forEach((feat, i) => {
    const raw = values[feat];
    const mean = model.means[i];
    const scale = model.scales[i];
    const weight = model.coef[i];

    const scaled = (raw - mean) / scale;
    z += weight * scaled;
  });

  // Sigmoid probability: P(Presence) = 1 / (1 + e^(-z))
  const probability = 1 / (1 + Math.exp(-z));
  const probPercent = (probability * 100).toFixed(1);

  const resultContainer = document.getElementById('resultContainer');
  const resultOut = document.getElementById('resultOut');
  const probOut = document.getElementById('probOut');
  const resultLabel = document.getElementById('resultLabel');

  resultContainer.classList.remove('is-presence', 'is-absence');

  if (probability >= 0.5) {
    resultContainer.classList.add('is-presence');
    resultLabel.textContent = 'High Risk Detected';
    resultOut.textContent = 'Presence (Heart Disease)';
    probOut.textContent = `Disease Probability: ${probPercent}%`;
  } else {
    resultContainer.classList.add('is-absence');
    resultLabel.textContent = 'Low Risk (Healthy)';
    resultOut.textContent = 'Absence (No Heart Disease)';
    probOut.textContent = `Disease Probability: ${probPercent}%`;
  }

  resultOut.classList.remove('result-pop');
  void resultOut.offsetWidth;
  resultOut.classList.add('result-pop');
}
