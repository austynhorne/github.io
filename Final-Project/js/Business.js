fetch('https://austynhorne.github.io/github.io/Final-Project/Business.json')
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  document.createElement('name').textContent = jsObject.business[0].businessID_1.name;
  document.createElement('Address').textContent = jsObject.business[0].businessID_1.Address;
});