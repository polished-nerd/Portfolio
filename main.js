// NAV BAR DISAPPEAR

function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

function getHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}

console.log('Width:  ' + getWidth());
console.log('Height: ' + getHeight());

var width, height;
window.onload = window.onresize = function () {
    width = this.innerWidth;
    height = this.innerHeight;
    //    alert(width)
    if (width <= 900) {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementsByClassName("main-nav")[0].style.top = "0";
            } else {
                document.getElementsByClassName("main-nav")[0].style.top = "-75px";
            }
            prevScrollpos = currentScrollPos;
        }
    }
}

//    } else {
   // window.onresize = function(){ location.reload(); }


//SIDE SCROLL BUTTON

var button = document.getElementById('slideRight-sety-branding');
button.onclick = function () {
    var container = document.getElementById('sety-branding');
    sideScroll(container, 'right', 5, 600, 25);
};

var back = document.getElementById('slideLeft-sety-branding');
back.onclick = function () {
    var container = document.getElementById('sety-branding');
    sideScroll(container, 'left', 5, 600, 25);
};

var button = document.getElementById('slideRight-sety-businessCase');
button.onclick = function () {
    var container = document.getElementById('sety-businessCase');
    sideScroll(container, 'right', 5, 600, 25);
};

var back = document.getElementById('slideLeft-sety-businessCase');
back.onclick = function () {
    var container = document.getElementById('sety-businessCase');
    sideScroll(container, 'left', 5, 600, 25);
};


var button = document.getElementById('slideRight-bullhorn-lego');
button.onclick = function () {
    var container = document.getElementById('bullhorn-lego');
    sideScroll(container, 'right', 5, 600, 25);
};

var back = document.getElementById('slideLeft-bullhorn-lego');
back.onclick = function () {
    var container = document.getElementById('bullhorn-lego');
    sideScroll(container, 'left', 5, 600, 25);
};


var button = document.getElementById('slideRight-bullhorn-stars');
button.onclick = function () {
    var container = document.getElementById('bullhorn-stars');
    sideScroll(container, 'right', 5, 600, 25);
};

var back = document.getElementById('slideLeft-bullhorn-stars');
back.onclick = function () {
    var container = document.getElementById('bullhorn-stars');
    sideScroll(container, 'left', 5, 600, 25);
};


var button = document.getElementById('slideRight-bullhorn-print');
button.onclick = function () {
    var container = document.getElementById('bullhorn-print');
    sideScroll(container, 'right', 5, 600, 25);
};

var back = document.getElementById('slideLeft-bullhorn-print');
back.onclick = function () {
    var container = document.getElementById('bullhorn-print');
    sideScroll(container, 'left', 5, 600, 25);
};


var button = document.getElementById('slideRight-bullhorn-articles');
button.onclick = function () {
    var container = document.getElementById('bullhorn-articles');
    sideScroll(container, 'right', 5, 600, 25);
};

var back = document.getElementById('slideLeft-bullhorn-articles');
back.onclick = function () {
    var container = document.getElementById('bullhorn-articles');
    sideScroll(container, 'left', 5, 600, 25);
};


var button = document.getElementById('slideRight-magnum-print');
button.onclick = function () {
    var container = document.getElementById('magnum-print');
    sideScroll(container, 'right', 5, 600, 25);
};

var back = document.getElementById('slideLeft-magnum-print');
back.onclick = function () {
    var container = document.getElementById('magnum-print');
    sideScroll(container, 'left', 5, 600, 25);
};



var button = document.getElementById('slideRight-magnum-alleg');
button.onclick = function () {
    var container = document.getElementById('magnum-alleg');
    sideScroll(container, 'right', 5, 600, 25);
};

var back = document.getElementById('slideLeft-magnum-alleg');
back.onclick = function () {
    var container = document.getElementById('magnum-alleg');
    sideScroll(container, 'left', 5, 600, 25);
};


function sideScroll(element, direction, speed, distance, step) {
    scrollAmount = 0;
    var slideTimer = setInterval(function () {
        if (direction == 'left') {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
        }
    }, speed);
};




// THEME SWITCH

badgeIcon.addEventListener("click", () => {
    themeSwitch();
});