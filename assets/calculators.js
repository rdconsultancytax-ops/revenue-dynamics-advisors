function calcTax(){
  var income = parseFloat(document.getElementById('income').value)||0;
  var tax=0;
  if(income<=250000) tax=0;
  else if(income<=500000) tax=(income-250000)*0.05;
  else if(income<=1000000) tax=12500+(income-500000)*0.2;
  else tax=112500+(income-1000000)*0.3;
  document.getElementById('taxResult').innerText='Estimated Tax: ₹'+Math.round(tax);
}
function calcGST(){
  var amount=parseFloat(document.getElementById('gstAmount').value)||0;
  var rate=parseFloat(document.getElementById('gstRate').value)||18;
  var gst=amount*(rate/100);
  var gross=amount+gst;
  document.getElementById('gstResult').innerText='GST: ₹'+gst.toFixed(2)+'  |  Total: ₹'+gross.toFixed(2);
}
function calcEMI(){
  var P=parseFloat(document.getElementById('loanAmount').value)||0;
  var annual=parseFloat(document.getElementById('annualRate').value)||0;
  var years=parseFloat(document.getElementById('tenureYears').value)||0;
  var r=(annual/100)/12; var n=years*12;
  var emi=0;
  if(r===0) emi=P/n; else emi=(P*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
  if(!isFinite(emi)) emi=0;
  document.getElementById('emiResult').innerText='Estimated EMI: ₹'+emi.toFixed(2)+' / month';
}
