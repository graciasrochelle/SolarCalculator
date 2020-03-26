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
    var d = 8;
    var h = 10;

    var carpetNeeded = floor(d);
    var pointNeeded = walls(d, h);

    console.log(carpetNeeded);
    console.log(pointNeeded);
} // end of function