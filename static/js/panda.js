(function() {

var lootTen = document.querySelector('.pandaemonium-loot');

var head = document.querySelector('.head');
var hands = document.querySelector('.hands');
var feet = document.querySelector('.feet');
var tome = document.querySelector('.tome');
var shine = document.querySelector('.shine');

lootTen.style.display = 'none';

head.style.display = 'none';
hands.style.display = 'none';
feet.style.display = 'none';
tome.style.display = 'none';
shine.style.display = 'none';

// Hiding coffers and all info when clicking on boss icon again/other boss

function hidePandaCoffers() {
    head.style.display = 'none';
    hands.style.display = 'none';
    feet.style.display = 'none';
    tome.style.display = 'none';
    shine.style.display = 'none';
}

function toggleBoss(bossLoot) {
    if (bossLoot.style.display === 'none') {
        bossLoot.style.display = 'block';
    } else {
        bossLoot.style.display = 'none';
        hidePandaCoffers();
    }
}

function toggleLoot(lootElement) {
    // Hide all loot elements
    head.style.display = 'none';
    hands.style.display = 'none';
    feet.style.display = 'none';
    tome.style.display = 'none';
    shine.style.display = 'none';;

    // Show the specific loot element
    lootElement.style.display = 'block';
}


document.getElementById('pandaemonium').addEventListener('click', function() {
    toggleBoss(lootTen);
});

document.getElementById('head').addEventListener('click', function() {
    toggleLoot(head);
});

document.getElementById('hands').addEventListener('click', function() {
    toggleLoot(hands);
});

document.getElementById('feet').addEventListener('click', function() {
    toggleLoot(feet);
});

document.getElementById('tome').addEventListener('click', function() {
    toggleLoot(tome);
});

document.getElementById('shine').addEventListener('click', function() {
    toggleLoot(shine);
});

})();