var lootTwelve = document.querySelector('.athena-loot');

var weapon = document.querySelector('.weapon');
var arm = document.querySelector('.arm');
var minion = document.querySelector('.minion');
var mount = document.querySelector('.mount');
var roll = document.querySelector('.roll');

lootTwelve.style.display = 'none';

// Hiding coffers and all info when clicking on boss icon again/other boss

function hideAthenaCoffers() {
    weapon.style.display = 'none';
    arm.style.display = 'none';
    minion.style.display = 'none';
    mount.style.display = 'none';
    roll.style.display = 'none';
}

function toggleAthenaBoss(bossLoot) {
    if (bossLoot.style.display === 'none') {
        bossLoot.style.display = 'block';
    } else {
        bossLoot.style.display = 'none';
        hideAthenaCoffers();
    }
}

function toggleAthenaLoot(lootElement) {
    // Hide all loot elements
    hideAthenaCoffers();

    // Show the specific loot element
    lootElement.style.display = 'block';
}

// Set P12S coffers to hidden by default
hideAthenaCoffers();

document.getElementById('athena').addEventListener('click', function() {
    toggleAthenaBoss(lootTwelve);
});

document.getElementById('weapon').addEventListener('click', function() {
    toggleAthenaLoot(weapon);
});

document.getElementById('arm').addEventListener('click', function() {
    toggleAthenaLoot(arm);
});

document.getElementById('minion').addEventListener('click', function() {
    toggleAthenaLoot(minion);
});

document.getElementById('mount').addEventListener('click', function() {
    toggleAthenaLoot(mount);
});

document.getElementById('roll').addEventListener('click', function() {
    toggleAthenaLoot(roll);
});
