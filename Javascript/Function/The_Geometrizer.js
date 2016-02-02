function calcGeometry(radius) {
    var circumference = Math.PI * 2 * radius;
    console.log("The circumference is " + circumference);
    var area = Math.PI * radius * radius;
    console.log("The area is " + area);
}

calcGeometry(12);
