// Length Convertor
var feet = document.getElementById('feet');
var cm = document.getElementById('cm');
var m = document.getElementById('m');
var inch = document.getElementById('inch');
var km = document.getElementById('km');
var miles = document.getElementById('miles');

feet.addEventListener('input', function(){
  let fs = this.value;
  let cms = fs*30.48;
  let ms = fs*0.3048;
  let is = fs*12;
  let kms = fs*0.000305;
  let mls = fs*0.000189;
  cm.value = cms.toFixed(4);
  m.value = ms.toFixed(4);
  inch.value = is.toFixed(4);
  km.value = kms.toFixed(4);
  miles.value = mls.toFixed(4);
});

cm.addEventListener('input', function(){
  let cms = this.value;
  let fs = cms/30.48;
  let ms = cms/100;
  let is = cms/2.54;
  let kms = cms/100000;
  let mls = cms/160900;
  feet.value = fs.toFixed(4);
  m.value = ms.toFixed(4);
  inch.value = is.toFixed(4);
  km.value = kms.toFixed(4);
  miles.value = mls.toFixed(4);
});

m.addEventListener('input', function(){
  let ms = this.value;
  let fs = ms*3.281;
  let cms = ms*100;
  let is = ms*39.37;
  let kms = ms/1000;
  let mls = ms/1609;
  feet.value = fs.toFixed(4);
  cm.value = cms.toFixed(4);
  inch.value = is.toFixed(4);
  km.value = kms.toFixed(4);
  miles.value = mls.toFixed(4);
});

inch.addEventListener('input', function(){
  let is = this.value;
  let fs = is/12;
  let cms = is*2.54;
  let ms = is/39.37;
  let kms = is/39370;
  let mls = is/63360;
  feet.value = fs.toFixed(4);
  cm.value = cms.toFixed(4);
  m.value = ms.toFixed(4);
  km.value = kms.toFixed(4);
  miles.value = mls.toFixed(4);
});

km.addEventListener('input', function(){
  let kms = this.value;
  let fs = kms*3281;
  let cms = kms*100000;
  let ms = kms*1000;
  let is = kms*39370;
  let mls = kms/1.609;
  feet.value = fs.toFixed(4);
  cm.value = cms.toFixed(4);
  m.value = ms.toFixed(4);
  inch.value = is.toFixed(4);
  miles.value = mls.toFixed(4);
});

miles.addEventListener('input', function(){
  let mls = this.value;
  let fs = mls*5280;
  let cms = mls*160900;
  let ms = mls*1609;
  let is = mls*63360;
  let kms = mls*1.609;
  feet.value = fs.toFixed(4);
  cm.value = cms.toFixed(4);
  m.value = ms.toFixed(4);
  inch.value = is.toFixed(4);
  km.value = kms.toFixed(4);
});


// Temperature CONVERTOR
var celcius = document.getElementById('celcius');
var kelvin = document.getElementById('kelvin');
var fahrenheit = document.getElementById('fahrenheit');

celcius.addEventListener('input', function() {
  let cel = this.value;
  let kel = Number(cel) + 273.15
  let fahr = (cel * 9/5) + 32
  kelvin.value = kel.toFixed(4);
  fahrenheit.value = fahr.toFixed(4)
});

kelvin.addEventListener('input', function() {
  let kel = this.value;
  let cel = kel - 273.15
  let fahr = (kel - 273.15) * 9/5 + 32
  celcius.value = cel.toFixed(4);
  fahrenheit.value = fahr.toFixed(4);
});

fahrenheit.addEventListener('input', function() {
  let fahr = this.value;
  let kel = (fahr - 32) * 5/9 + 273.15
  let cel = (fahr - 32) * 5/9
  celcius.value = cel.toFixed(4);
  kelvin.value = kel.toFixed(4);
});
