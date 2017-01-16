var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {   
    var revealPoint = function(index) {
        index[i].style.opacity = 1;
        index[i].style.transform = "scaleX(1) translateY(0)";
        index[i].style.msTransform = "scaleX(1) translateY(0)";
        index[i].style.WebkitTransform = "scaleX(1) translateY(0)";
    }
    
    for (var i = 0; i < points.length; i++) {
        revealPoint(points);
    }
                
};

window.onload = function() {
    
    if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }
    
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    
    window.addEventListener('scroll', function(event) {
        if (document.documentElement.srollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);
        }
    });
}