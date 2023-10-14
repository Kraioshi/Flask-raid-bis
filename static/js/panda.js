var lootTen = document.querySelector('.pandaemonium-loot');

var head = document.querySelector('.head');
var hands = document.querySelector('.hands');
var feet = document.querySelector('.feet');
var tome = document.querySelector('.tome');
var shine = document.querySelector('.shine');

lootTen.style.display = 'none';

// Hiding coffers and all info when clicking on boss icon again/other boss

function hidePandaCoffers() {
    head.style.display = 'none';
    hands.style.display = 'none';
    feet.style.display = 'none';
    tome.style.display = 'none';
    shine.style.display = 'none';
}

function togglePandaBoss(bossLoot) {
    if (bossLoot.style.display === 'none') {
        bossLoot.style.display = 'block';
    } else {
        bossLoot.style.display = 'none';
        hidePandaCoffers();
    }
}

function togglePandaLoot(lootElement) {
    // Hide all loot elements
    hidePandaCoffers();

    // Show the specific loot element
    lootElement.style.display = 'block';
}

// Set coffers to hidden by default
hidePandaCoffers();

document.getElementById('pandaemonium').addEventListener('click', function() {
    togglePandaBoss(lootTen);
});

document.getElementById('head').addEventListener('click', function() {
    togglePandaLoot(head);
});

document.getElementById('hands').addEventListener('click', function() {
    togglePandaLoot(hands);
});

document.getElementById('feet').addEventListener('click', function() {
    togglePandaLoot(feet);
});

document.getElementById('tome').addEventListener('click', function() {
    togglePandaLoot(tome);
});

document.getElementById('shine').addEventListener('click', function() {
    togglePandaLoot(shine);
});
