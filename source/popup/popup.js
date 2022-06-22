const heading = document.getElementById('heading');
const settingsButton = document.querySelector('button');
const manifest = chrome.runtime.getManifest();

heading.textContent = `${manifest.name} (${manifest.version})`;

settingsButton.addEventListener('click', () => {
  chrome.runtime.openOptionsPage();
});
