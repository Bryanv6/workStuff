/**
 * Created by bryanvillegas on 4/25/18.
 */
var reqs = [{"id":"1", "purpose":"i want money", "amount":"500"},
    {"id":"2", "purpose":"pay me back", "amount":"100"}];
function addToTable(n, data){

    data.forEach((d,i) => {
        var tr = document.createElement("TR");
    Object.keys(d).forEach((k,j) => {
        var td1 = document.createElement("TD");
    td1.appendChild(document.createTextNode(d[k]));
    tr.appendChild(td1);
});
    n.appendChild(tr);
});

}

var tBody = document.getElementById("requests");
/*
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
 */
addToTable(tBody, reqs);