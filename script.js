// ذخیره و بازیابی مقادیر قابل ویرایش با localStorage
(function(){
  const STORAGE_KEY = 'abbasabad.costs.v1';
  const statusEl = document.getElementById('save-status');
  const saveBtn = document.getElementById('save-btn');
  const resetBtn = document.getElementById('reset-btn');
  const editableNodes = Array.from(document.querySelectorAll('[contenteditable][data-key]'));

  function load(){
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if(!raw) return;
      const data = JSON.parse(raw);
      editableNodes.forEach(el => {
        const k = el.getAttribute('data-key');
        if(data[k] !== undefined) el.textContent = data[k];
      });
      setStatus('✅ بازیابی شد');
    } catch(e){
      setStatus('⚠️ خطا در بازیابی');
    }
  }

  function collect(){
    const obj = {};
    editableNodes.forEach(el => {
      const k = el.getAttribute('data-key');
      obj[k] = el.textContent.trim();
    });
    return obj;
  }

  function save(){
    setStatus('💾 در حال ذخیره...');
    const data = collect();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setTimeout(() => setStatus('✅ ذخیره شد'), 300);
    } catch(e){
      setStatus('⚠️ ذخیره ناموفق');
    }
  }

  function reset(){
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }

  function setStatus(msg){ statusEl.textContent = msg; }

  document.addEventListener('DOMContentLoaded', load);
  saveBtn.addEventListener('click', save);
  resetBtn.addEventListener('click', reset);
})();
