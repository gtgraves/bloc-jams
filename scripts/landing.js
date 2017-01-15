var animatePoints = function () {
                
    var points = document.getElementsByClassName('point');
    
    function revealPoint(className) {
        className[i].style.opacity = 1;
        className[i].style.transform = "scaleX(1) translateY(0)";
        className[i].style.msTransform = "scaleX(1) translateY(0)";
        className[i].style.WebkitTransform = "scaleX(1) translateY(0)";
    }
    
    for (var i = 0; i < points.length; i++) {
        revealPoint(points);
    }
                
};