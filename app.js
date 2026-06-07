const STORAGE_KEY = 'modenaQuizStateV1';
let currentSet = [...QUESTIONS];
let currentIndex = 0;
let answers = {};

const $ = (id) => document.getElementById(id);
function show(viewId){ document.querySelectorAll('.view').forEach(v=>v.classList.remove('active')); $(viewId).classList.add('active'); window.scrollTo(0,0); }
function saveState(result=null){ localStorage.setItem(STORAGE_KEY, JSON.stringify({answers, result, timestamp: new Date().toISOString()})); renderLastResult(); }
function loadState(){ try { return JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}'); } catch { return {}; } }
function optionLabel(letter, text){ return `${letter}) ${text}`; }
function getWrongIds(){ const st=loadState(); if(!st.result) return []; return st.result.wrongIds || []; }

function startQuiz(mode='all'){
  const wrongIds = getWrongIds();
  currentSet = mode === 'errors' && wrongIds.length ? QUESTIONS.filter(q=>wrongIds.includes(q.id)) : [...QUESTIONS];
  currentIndex = 0;
  answers = {};
  show('quizView');
  renderQuestion();
}

function renderQuestion(){
  const q = currentSet[currentIndex];
  $('progressText').textContent = `Domanda ${currentIndex+1} di ${currentSet.length}`;
  $('answeredText').textContent = `${Object.keys(answers).length} risposte date`;
  $('progressBar').style.width = `${((currentIndex+1)/currentSet.length)*100}%`;
  $('topicText').textContent = q.reference || q.topic || 'Quiz';
  $('questionText').textContent = q.question;
  const box = $('optionsBox'); box.innerHTML = '';
  for(const letter of ['A','B','C','D']){
    const btn = document.createElement('button');
    btn.className = 'option' + (answers[q.id] === letter ? ' selected' : '');
    btn.textContent = optionLabel(letter, q.options[letter]);
    btn.onclick = () => { answers[q.id]=letter; renderQuestion(); };
    box.appendChild(btn);
  }
  $('prevBtn').disabled = currentIndex === 0;
  $('nextBtn').classList.toggle('hidden', currentIndex === currentSet.length-1);
  $('finishBtn').classList.toggle('hidden', currentIndex !== currentSet.length-1);
}

function finishQuiz(){
  const unanswered = currentSet.filter(q=>!answers[q.id]).length;
  if(unanswered && !confirm(`Mancano ${unanswered} risposte. Vuoi concludere comunque?`)) return;
  let correct=0, wrongIds=[];
  for(const q of currentSet){
    if(answers[q.id] === q.correct) correct++; else wrongIds.push(q.id);
  }
  const result = {total: currentSet.length, correct, wrong: currentSet.length-correct, percentage: Math.round((correct/currentSet.length)*100), wrongIds, setIds: currentSet.map(q=>q.id)};
  saveState(result);
  renderResult(result);
  show('resultView');
}

function renderResult(result){
  const pass30 = Math.round((result.correct / result.total) * 30 * 10) / 10;
  $('scoreBox').innerHTML = `
    <div class="score-item"><strong>${result.correct}/${result.total}</strong>Corrette</div>
    <div class="score-item"><strong>${result.wrong}</strong>Errate</div>
    <div class="score-item"><strong>${result.percentage}%</strong>Percentuale<br><span class="${pass30>=21?'passed':'failed'}">${pass30}/30</span></div>`;
  const wrongQuestions = QUESTIONS.filter(q=>result.wrongIds.includes(q.id));
  $('wrongList').innerHTML = wrongQuestions.length ? `<h3>Domande da ripassare</h3><ul>${wrongQuestions.map(q=>`<li>Domanda ${q.id} - ${q.reference}</li>`).join('')}</ul>` : `<h3>Ottimo: nessun errore.</h3>`;
}

function renderSolutions(filterWrong=false){
  const st = loadState();
  const savedAnswers = st.answers || {};
  const wrongIds = st.result?.wrongIds || [];
  const list = filterWrong ? QUESTIONS.filter(q=>wrongIds.includes(q.id)) : QUESTIONS;
  $('solutionsBox').innerHTML = list.map(q=>{
    const given = savedAnswers[q.id] || '-';
    const ok = given === q.correct;
    return `<article class="solution ${given==='-'?'': ok?'is-correct':'is-wrong'}">
      <h3>Domanda ${q.id}</h3>
      <p><strong>${q.question}</strong></p>
      <p>A) ${q.options.A}<br>B) ${q.options.B}<br>C) ${q.options.C}<br>D) ${q.options.D}</p>
      <p class="answer-line">Risposta data: <strong>${given}</strong> ${given==='-'?'':`<span class="tag ${ok?'ok':'ko'}">${ok?'Corretta':'Errata'}</span>`}</p>
      <p class="answer-line">Risposta corretta: <strong>${q.correct}</strong></p>
      <p><strong>Spiegazione:</strong> ${q.explanation}</p>
      <p class="meta"><strong>Riferimento:</strong> ${q.reference}</p>
      <p><strong>Errore da evitare:</strong> ${q.commonError}</p>
    </article>`;
  }).join('');
  show('solutionsView');
}

function renderOpen(){
  $('openBox').innerHTML = OPEN_QUESTIONS.map(q=>`<article class="solution"><h3>Domanda aperta ${q.id}</h3><p><strong>${q.question}</strong></p><p><strong>Risposta modello:</strong> ${q.answer}</p><p class="meta"><strong>Riferimento:</strong> ${q.reference}</p></article>`).join('');
  show('openView');
}
function renderCases(){
  $('casesBox').innerHTML = PRACTICAL_CASES.map(c=>`<article class="solution"><h3>Caso ${c.id} - ${c.title}</h3><p><strong>Traccia:</strong> ${c.prompt}</p><p><strong>Soluzione:</strong> ${c.solution}</p><p class="meta"><strong>Norme collegate:</strong> ${c.reference}</p><p><strong>Errore da evitare:</strong> ${c.commonError}</p></article>`).join('');
  show('casesView');
}
function renderLastResult(){
  const st=loadState(); const box=$('lastResult'); if(!box) return;
  if(st.result){ box.classList.remove('hidden'); box.innerHTML = `<strong>Ultimo risultato:</strong> ${st.result.correct}/${st.result.total} corrette (${st.result.percentage}%). Errori: ${st.result.wrong}.`; }
  else box.classList.add('hidden');
}

$('startBtn').onclick=()=>startQuiz('all');
$('reviewBtn').onclick=()=>renderSolutions(false);
$('retryErrorsBtn').onclick=()=>{ const w=getWrongIds(); w.length ? startQuiz('errors') : alert('Non ci sono errori salvati. Fai prima una simulazione.'); };
$('retryErrorsBtn2').onclick=()=>{ const w=getWrongIds(); w.length ? startQuiz('errors') : alert('Non ci sono errori salvati.'); };
$('prevBtn').onclick=()=>{ if(currentIndex>0){ currentIndex--; renderQuestion(); } };
$('nextBtn').onclick=()=>{ if(currentIndex<currentSet.length-1){ currentIndex++; renderQuestion(); } };
$('finishBtn').onclick=finishQuiz;
$('fullReviewBtn').onclick=()=>renderSolutions(false);
$('newQuizBtn').onclick=()=>startQuiz('all');
$('openBtn').onclick=renderOpen;
$('casesBtn').onclick=renderCases;
document.querySelectorAll('.backHome').forEach(b=>b.onclick=()=>show('homeView'));
$('resetBtn').onclick=()=>{ if(confirm('Vuoi cancellare risposte e risultati salvati?')){ localStorage.removeItem(STORAGE_KEY); answers={}; renderLastResult(); show('homeView'); } };
renderLastResult();
