const url = 'https://api.ipgeolocation.io/getip';
const httpManager = new XMLHttpRequest();
httpManager.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var object = JSON.parse(this.responseText);
        document.getElementById("ip").innerHTML = ('Hi ' + object.ip);
    }
};

httpManager.open("GET", "https://api.ipgeolocation.io/getip", true);
httpManager.send();