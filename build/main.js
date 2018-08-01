setInterval(function() {
  axios
  .get("https://giorgiograssini-portfolio.herokuapp.com/")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  });

}, 1500*1000);


function fadeOut(el) {
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in

function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += 0.1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

var el = document.querySelector(".js-fade");

fadeOut(el);
fadeIn(el);
fadeIn(el);
