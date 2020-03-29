function floor(diameter){
    const radius = diameter/2;
    const floorArea = Math.PI * (radius * radius);
    return floorArea;
}// end of function

function walls(diameter, height){
    var radius = diameter/2;
    var circumference = 2 * Math.PI * radius;
    var wallArea = circumference * height;
    return wallArea;
}// end of function

function materialsNeeded(){
    var d = document.getElementById("across").value;
    var h = document.getElementById("height").value;

    var carpetNeeded = Math.ceil(floor(d));
    var paintNeeded = Math.ceil(walls(d, h));

    console.log('Carpet Needed is '+carpetNeeded+' sqft');
    console.log('Paint Needed is '+paintNeeded+' sqft');
} // end of function