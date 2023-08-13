var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 350);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}