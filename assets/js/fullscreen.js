/* Fullscreen toggle for game pages.
 * Desktop / Android / iPad: real Fullscreen API on the game wrapper.
 * iPhone Safari: no Fullscreen API for arbitrary elements, so fall back to
 * a fixed full-viewport "theater" mode that hides the site chrome.
 * The same button exits both modes. ESC exits theater mode too.
 */
(function () {
  var wrap = document.getElementById('gameWrap');
  var btn = document.getElementById('fsBtn');
  if (!wrap || !btn) return;
  var label = btn.querySelector('span');

  function setLabel(on) {
    if (label) label.textContent = on ? 'Exit fullscreen' : 'Fullscreen';
    btn.setAttribute('aria-label', on ? 'Exit fullscreen' : 'Play fullscreen');
  }

  function isFullscreen() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement ||
      document.mozFullScreenElement || document.msFullscreenElement);
  }

  function requestFs(el) {
    var req = el.requestFullscreen || el.webkitRequestFullscreen ||
      el.mozRequestFullScreen || el.msRequestFullscreen;
    if (!req) return null;
    try {
      var p = req.call(el);
      if (p && p.catch) return p;
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }

  function exitFs() {
    var ex = document.exitFullscreen || document.webkitExitFullscreen ||
      document.mozCancelFullScreen || document.msExitFullscreen;
    if (ex) {
      try { ex.call(document); } catch (e) { /* ignore */ }
    }
  }

  function theater(on) {
    wrap.classList.toggle('theater', on);
    document.body.classList.toggle('theater-on', on);
    setLabel(on);
    if (on) window.scrollTo(0, 0);
  }

  function toggle() {
    if (isFullscreen()) { exitFs(); return; }
    if (wrap.classList.contains('theater')) { theater(false); return; }
    var p = requestFs(wrap);
    if (p) {
      p.then(function () { setLabel(true); }).catch(function () { theater(true); });
    } else {
      theater(true);
    }
  }

  btn.addEventListener('click', toggle);
  document.addEventListener('fullscreenchange', function () { setLabel(isFullscreen()); });
  document.addEventListener('webkitfullscreenchange', function () { setLabel(isFullscreen()); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && wrap.classList.contains('theater')) theater(false);
  });
})();
