fetch('Business.json')
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  document.getElementById('name').textContent = jsObject.business.businessID_1.name;
  document.getElementById('Address').textContent = jsObject.business.businessID_1.Address;
});