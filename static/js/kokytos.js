(function() {

var lootNine = document.querySelector('.kokytos-loot');

var earring = document.querySelector('.earring');
var necklace = document.querySelector('.necklace');
var bracelet = document.querySelector('.bracelet');
var ring = document.querySelector('.ring');

lootNine.style.display = 'none';

earring.style.display = 'none';
necklace.style.display = 'none';
bracelet.style.display = 'none';
ring.style.display = 'none';

// Hiding coffers and all info when clicking on boss icon again/other boss

function hideKokytosCoffers() {
    earring.style.display = 'none';
    necklace.style.display = 'none';
    bracelet.style.display = 'none';
    ring.style.display = 'none';
}

function toggleBoss(bossLoot) {
    if (bossLoot.style.display === 'none') {
        bossLoot.style.display = 'block';
    } else {
        bossLoot.style.display = 'none';
        hideKokytosCoffers();
    }
}

function toggleLoot(lootElement) {
    // Hide all loot elements
    earring.style.display = 'none';
    necklace.style.display = 'none';
    bracelet.style.display = 'none';
    ring.style.display = 'none';

    // Show the specific loot element
    lootElement.style.display = 'block';
}


document.getElementById('kokytos').addEventListener('click', function() {
    toggleBoss(lootNine);
});

document.getElementById('earring').addEventListener('click', function() {
    toggleLoot(earring);
});

document.getElementById('necklace').addEventListener('click', function() {
    toggleLoot(necklace);
});

document.getElementById('bracelet').addEventListener('click', function() {
    toggleLoot(bracelet);
});

document.getElementById('ring').addEventListener('click', function() {
    toggleLoot(ring);
});


})();

