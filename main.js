var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readySate == 4 && this.status == 200) {
        document.getElementById("main-data").innerHTML = this.responseText;
    }
};

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/")

xhr.send();