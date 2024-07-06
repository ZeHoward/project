var count = 0;
var x = 1;

function clickDown() {
    document.getElementById("clickDown");
    count = count + x;
    document.getElementById("clickDown").innerText = `給昊則${count}元`;
    var img = document.querySelector("#circleNot img");
    img.style.transform = "scale(1)";
    // console.log(count);

    // Create the +1 element
    var plusOne = document.createElement("span");
    plusOne.innerHTML = `${x}`;
    plusOne.className = "count-display";
    document.body.appendChild(plusOne);

    // Position the element at the mouse click position
    plusOne.style.left = `${event.clientX}px`;
    plusOne.style.top = `${event.clientY - 120}px`;

    // Remove the element after 2 seconds
    setTimeout(() => {
        plusOne.remove();
    }, 1500);
}

function clickUp() {
    var img = document.querySelector("#circleNot img");
    img.style.transform = "scale(1.15)";
}

function upGrade() {
    var upGradeButton = document.getElementById("upGrade");
    if (count >= (10 * x)) {
        count -= (10 * x);
        x++;
        document.getElementById("clickDown").innerText = `給昊則${count}元`;
        upGradeButton.innerText = `升級${10 * x}元`;
    } else {
        alert("沒錢升級個毛線");
    }
}

function startAutoIncrement() {
    if (count >= 100) {
        count = count - 100;
        document.getElementById("clickDown").innerText = `給昊則${count}元`;
        autoIncrement = setInterval(() => {
            count += x;
            document.getElementById("clickDown").innerText = `給昊則${count}元`;
        }, 1000);
    } else {
        alert("100元才能偷懶");
    }
}

function changeBackgroundColor() {
    if (document.body.style.backgroundColor != "whitesmoke") {
        document.body.style.backgroundColor = "whitesmoke";
        document.getElementById("changeBackgroundColor").innerText = "黑";
    } else {
        document.body.style.backgroundColor = "black";
        document.getElementById("changeBackgroundColor").innerText = "白";
    }
}