fetch('https://austynhorne.github.io/github.io/Final-Project/Business.json')
.then((response) => response.json())
.then((jsObject) => {
  console.table(jsObject);
  const business = jsObject["Business"];
  for (let i = 0; i < Business.length; i++) {
  }
  document.getElementById('name1').textContent = jsObject.Business[0].name;
  document.getElementById('Address1').textContent = jsObject.Business[0].Address;
  document.getElementById('phone1').textContent = jsObject.Business[0].Phone;

  document.getElementById('name2').textContent = jsObject.Business[1].name;
  document.getElementById('Address2').textContent = jsObject.Business[1].Address;
  document.getElementById('phone2').textContent = jsObject.Business[1].Phone;

  document.getElementById('name3').textContent = jsObject.Business[2].name;
  document.getElementById('Address3').textContent = jsObject.Business[2].Address;
  document.getElementById('phone3').textContent = jsObject.Business[2].Phone;

  document.getElementById('name4').textContent = jsObject.Business[3].name;
  document.getElementById('Address4').textContent = jsObject.Business[3].Address;
  document.getElementById('phone4').textContent = jsObject.Business[3].Phone;

  document.getElementById('name5').textContent = jsObject.Business[4].name;
  document.getElementById('Address5').textContent = jsObject.Business[4].Address;
  document.getElementById('phone5').textContent = jsObject.Business[4].Phone;

  document.getElementById('name6').textContent = jsObject.Business[5].name;
  document.getElementById('Address6').textContent = jsObject.Business[5].Address;
  document.getElementById('phone6').textContent = jsObject.Business[5].Phone;

  document.getElementById('name7').textContent = jsObject.Business[6].name;
  document.getElementById('Address7').textContent = jsObject.Business[6].Address;
  document.getElementById('phone7').textContent = jsObject.Business[6].Phone;
});