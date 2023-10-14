var lootNine = document.querySelector('.kokytos-loot');

var earring = document.querySelector('.earring');
var necklace = document.querySelector('.necklace');
var bracelet = document.querySelector('.bracelet');
var ring = document.querySelector('.ring');

lootNine.style.display = 'none';

// Hiding coffers and all info when clicking on boss icon again/other boss

function hideKokytosCoffers() {
    earring.style.display = 'none';
    necklace.style.display = 'none';
    bracelet.style.display = 'none';
    ring.style.display = 'none';
}

function toggleKokytosBoss(bossLoot) {
    if (bossLoot.style.display === 'none') {
        bossLoot.style.display = 'block';
    } else {
        bossLoot.style.display = 'none';
        hideKokytosCoffers();
    }
}

function toggleKokytosLoot(lootElement) {
    // Hide all loot elements
    hideKokytosCoffers();

    // Show the specific loot element
    lootElement.style.display = 'block';
}

// Set P9S coffers to hidden by default
hideKokytosCoffers();

document.getElementById('kokytos').addEventListener('click', function() {
    toggleKokytosBoss(lootNine);
});

document.getElementById('earring').addEventListener('click', function() {
    toggleKokytosLoot(earring);
});

document.getElementById('necklace').addEventListener('click', function() {
    toggleKokytosLoot(necklace);
});

document.getElementById('bracelet').addEventListener('click', function() {
    toggleKokytosLoot(bracelet);
});

document.getElementById('ring').addEventListener('click', function() {
    toggleKokytosLoot(ring);
});
