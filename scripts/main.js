let btnAddNetwork = document.querySelector("#btn-add-network");
if (btnAddNetwork) {
    btnAddNetwork.addEventListener("click", addNetwork);
}

let subredes = ['datanetwork0'];
let count = 1;

let btnDelNetwork = document.querySelector("#btn-del-network2");
if (btnDelNetwork) {
    btnDelNetwork.addEventListener("click", delNetwork());
}


function addNetwork() {
    subredes.push('datanetwork' + count);
    document.querySelector("#requeriments").innerHTML += '<div id="data-network' + count + '" class="data-network"><label for="network"> Nombre de Red: <input name="network" type="text"></label><label for="cant-ips"> Direcciones: <input name="cant-ips" type="number"></label><label for="mask"> Máscara:   / <input name="mask" type="number"></label> <button type="button" id="btn-del-network' + count + '" class="btn-del-network">Del</button>';
    console.log(subredes);
    count++;
}

function delNetwork() {
    document.querySelector("#datanetwork2").innerHTML += "asdsad";
}