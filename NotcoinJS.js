var count = 0;
var x = 1;

function clickDown() {
    document.getElementById("clickDown");
    count = count + x;
    document.getElementById("clickDown").innerText = `給昊則${count}元`;
    var img = document.querySelector("#circleNot img");
    img.style.transform = "scale(1)";
    // console.log(count);
}

function clickUp() {
    var img = document.querySelector("#circleNot img");
    img.style.transform = "scale(1.15)";
}

function upGrade() {
    if (count > (10*x)) {
        count -= (10*x);
        x++;
        document.getElementById("clickDown").innerText = `給昊則${count}元`;
        img.style.transform = "scale(1.15)";
    }else{
        alert("沒錢升級個毛線");
    }
}