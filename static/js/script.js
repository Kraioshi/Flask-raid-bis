// Hide kokytos loot
var lootNine = document.querySelector('.kokytos-loot');
lootNine.style.display = 'none';

var lootTen = document.querySelector('.pandaemonium-loot');
lootTen.style.display = 'none';

document.getElementById('kokytos').addEventListener('click', function() {
    if (lootNine.style.display === 'none') {
        lootNine.style.display = 'block';
    } else {
        lootNine.style.display = 'none';
    }
});

document.getElementById('pandaemonium').addEventListener('click', function() {
    if (lootTen.style.display === 'none') {
        lootTen.style.display = 'block';
    } else {
        lootTen.style.display = 'none';
    }
});