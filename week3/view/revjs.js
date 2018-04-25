/*function requests(id, purpose, amount){
  this.id = id;
  this.purpose = purpose;
  this.amount = amount;
}*/

var reqs = [{"id":"1", "purpose":"i want money", "amount":"500"},
{"id":"2", "purpose":"pay me back", "amount":"100"}];
/*function addToTable(n, data){

  data.forEach((d,i) => {
    var tr = n.insertRow(i);
    Object.keys(d).forEach((k,j) => {
      var cell.innerHTML = d[k];
    });
    n.appendChild(tr);
  });
}*/

var tBody = document.getElementById("requests");
var tr = document.createElement("TR");
var td1 = document.createElement("TD");
var td2 = document.createElement("TD");
var td3 = document.createElement("TD");
td1.appendChild(document.createTextNode("4"));
td2.appendChild(document.createTextNode("Bryan"));
td3.appendChild(document.createTextNode("Villegas"));

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tBody.appendChild(tr);
//addToTable(tBody, reqs);
