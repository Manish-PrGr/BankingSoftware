
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

$('.carousel').carousel({
  interval: 500
})

function download_visible(){
  document.getElementById('download-img').style.visibility = "hidden";
  document.getElementById('download-img').style.display = "none";
  document.getElementById('anime-download-img').style.visibility = "visible";
  document.getElementById('anime-download-img').style.display = "block";

  setTimeout(function () {
    document.getElementById('download-img').style.visibility = "visible";
    document.getElementById('download-img').style.display = "block";
    document.getElementById('anime-download-img').style.visibility = "hidden";
    document.getElementById('anime-download-img').style.display = "none";
  }, 1300);

}

function info_visible(){
  document.getElementById('info-img').style.visibility = "hidden";
  document.getElementById('info-img').style.display = "none";
  document.getElementById('anime-info-img').style.visibility = "visible";
  document.getElementById('anime-info-img').style.display = "block";

  setTimeout(function () {
    document.getElementById('info-img').style.visibility = "visible";
    document.getElementById('info-img').style.display = "block";
    document.getElementById('anime-info-img').style.visibility = "hidden";
    document.getElementById('anime-info-img').style.display = "none";
  }, 1300);

}

function home_visible(){
  document.getElementById('home-img').style.visibility = "hidden";
  document.getElementById('home-img').style.display = "none";
  document.getElementById('anime-home-img').style.visibility = "visible";
  document.getElementById('anime-home-img').style.display = "block";

  setTimeout(function () {
    document.getElementById('home-img').style.visibility = "visible";
    document.getElementById('home-img').style.display = "block";
    document.getElementById('anime-home-img').style.visibility = "hidden";
    document.getElementById('anime-home-img').style.display = "none";
  }, 1300);

}

function hoverDescription(){
  document.getElementById('Message').classList.add('message-hover');
}

function hoverDownload(){
  document.getElementById('Download-Message').classList.add('download-message-hover');
  setTimeout(function () {
    document.getElementById('Download-B-W').classList.add('download-message-hover');
  }, 50);
}

function showPasswd(){
  document.getElementById('Show-Passwd-S').innerHTML = 'BS#2022';
  setTimeout(function () {
    document.getElementById('Show-Passwd-S').innerHTML = 'Show Password';
  }, 5000);
}
