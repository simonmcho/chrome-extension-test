let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  console.log(data);
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  let color = element.target.value;
  const options = {
    active: true,
    currentWindow: true
  }
  chrome
    .tabs
    .query(options, function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {
          code: 'document.body.style.backgroundColor = "' + color + '";'
        });
    });
}

// https://developer.chrome.com/extensions/getstarted