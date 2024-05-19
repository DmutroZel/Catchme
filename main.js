let n = 0;
let defaultWidth = 50;
let defaultheight = 50;

target.onclick = function () {
    alert('You win');
}
target2.onclick = function () {
    alert('You win');
}
target3.onclick = function () {
    alert('You win');
}
target4.onclick = function () {
    alert('You win');
}
target5.onclick = function () {
    alert('You win');
}

target.onmouseenter = function () {
    n++;
    target.innerText = n;
    defaultWidth++;
    defaultheight++;
    target.style.width = defaultWidth + 'px';
    target.style.height = defaultheight + 'px';

    let xPos = Math.floor(Math.random() * 100);
    let yPos = Math.floor(Math.random() * 100);


    target.style.top = yPos + '%';
    target.style.left = xPos + '%';

}

let isOpen = false;
menuBtn.onclick = function () {
    if (isOpen == false) {
        menu.style.right = 0;
        isOpen = true;
    } else {
        menu.style.right = '-400px';
        isOpen = false;
    }
}

delay.oninput = function () {
    let delayTime = delay.value;
    delayValue.innerText = delay.value;
    target.style.transition = delayTime + 's';
    target2.style.transition = delayTime + 's';
    target3.style.transition = delayTime + 's';
    target4.style.transition = delayTime + 's';
    target5.style.transition = delayTime + 's';
}


red.onclick = function () {
    target.style.backgroundColor = 'red';
}
green.onclick = function () {
    target.style.backgroundColor = 'green';
}
blue.onclick = function () {
    target.style.backgroundColor = 'blue';
} 
myColor.oninput = function(){
    target.style.backgroundColor = myColor.value
}

space.onclick = function () {
    document.body.style.backgroundImage = "url('https://images8.alphacoders.com/577/577980.jpg')";
    document.body.style.backgroundSize = "cover";
    
} 
ghostHouse.onclick = function () {
    document.body.style.backgroundImage = "url('https://images3.alphacoders.com/739/739643.jpg')";
    document.body.style.backgroundSize = "cover";
} 
world.onclick = function () {
    document.body.style.backgroundImage = "url('https://wallpapersmug.com/download/3840x2160/92a349/fantasy-world-landscape-artistic-adventure.jpg')";
    document.body.style.backgroundSize = "cover";
} 
ninjaHouse.onclick = function() {
    document.body.style.backgroundImage = "url('https://image.tensorartassets.com/cdn-cgi/image/anim=true,w=2560,f=jpeg,q=85/posts/images/626733963251185259/9d0681f7-f02a-4ade-a616-18be8878daf8.jpg')";
    document.body.style.backgroundSize = "cover";
}

reset.onclick = function() {
    document.body.style.backgroundImage = 'none';
    target.style.display = 'flex';
    target2.style.display = 'none';
    target3.style.display = 'none';
    target4.style.display = 'none';
    target5.style.display = 'none';
}


cheese.onclick = function() {
    target2.style.display = 'flex';
    target.style.display = 'none';
    target3.style.display = 'none';
    target4.style.display = 'none';
    target5.style.display = 'none';
}
target2.onmouseenter = function () {
    n++;
    target2.innerText = n;
    defaultWidth++;
    defaultheight++;
    target2.style.width = defaultWidth + 'px';
    target2.style.height = defaultheight + 'px';

    let xPos = Math.floor(Math.random() * 100);
    let yPos = Math.floor(Math.random() * 100);


    target2.style.top = yPos + '%';
    target2.style.left = xPos + '%';

}

watermelon.onclick = function() {
    target3.style.display = 'flex';
    target.style.display = 'none';
    target2.style.display = 'none';
    target4.style.display = 'none';
    target5.style.display = 'none';
}
target3.onmouseenter = function () {
    n++;
    target3.innerText = n;
    defaultWidth++;
    defaultheight++;
    target3.style.width = defaultWidth + 'px';
    target3.style.height = defaultheight + 'px';

    let xPos = Math.floor(Math.random() * 100);
    let yPos = Math.floor(Math.random() * 100);


    target3.style.top = yPos + '%';
    target3.style.left = xPos + '%';

}

ghost.onclick = function() {
    target4.style.display = 'flex';
    target.style.display = 'none';
    target2.style.display = 'none';
    target3.style.display = 'none';
    target5.style.display = 'none';
}
target4.onmouseenter = function () {
    n++;
    target4.innerText = n;
    defaultWidth++;
    defaultheight++;
    target4.style.width = defaultWidth + 'px';
    target4.style.height = defaultheight + 'px';

    let xPos = Math.floor(Math.random() * 100);
    let yPos = Math.floor(Math.random() * 100);


    target4.style.top = yPos + '%';
    target4.style.left = xPos + '%';

}

cat.onclick = function() {
    target5.style.display = 'flex';
    target.style.display = 'none';
    target2.style.display = 'none';
    target3.style.display = 'none';
    target4.style.display = 'none';
}
target5.onmouseenter = function () {
    n++;
    target5.innerText = n;
    defaultWidth++;
    defaultheight++;
    target5.style.width = defaultWidth + 'px';
    target5.style.height = defaultheight + 'px';

    let xPos = Math.floor(Math.random() * 100);
    let yPos = Math.floor(Math.random() * 100);


    target5.style.top = yPos + '%';
    target5.style.left = xPos + '%';

}









