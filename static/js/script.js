// HTML divs
var lootNine = document.querySelector('.kokytos-loot');
var lootTen = document.querySelector('.pandaemonium-loot');
var lootEleven = document.querySelector('.themis-loot');

// Hide by default
lootNine.style.display = 'none';
lootTen.style.display = 'none';
lootEleven.style.display = 'none';

// Toggle loot function
function toggleLoot(lootElement) {
    if (lootElement.style.display === 'none') {
        lootElement.style.display = 'block';
    } else {
        lootElement.style.display = 'none';
    }
}

// Call functions

document.getElementById('kokytos').addEventListener('click', function() {
    toggleLoot(lootNine);
});

document.getElementById('pandaemonium').addEventListener('click', function() {
    toggleLoot(lootTen);
});

document.getElementById('themis').addEventListener('click', function() {
    toggleLoot(lootEleven);
});
