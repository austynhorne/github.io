fetch('https://austynhorne.github.io/github.io/Final-Project/Business.json')
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  document.getElementById('name').textContent = jsObject.Business[0].name;
  document.getElementById('Address').textContent = jsObject.Business[0].Address;
});