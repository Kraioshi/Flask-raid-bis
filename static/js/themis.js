
let lootEleven = document.querySelector('.themis-loot');

let chest = document.querySelector('.chest');
let legs = document.querySelector('.legs');
let solvent = document.querySelector('.solvent');
let twine = document.querySelector('.twine');

lootEleven.style.display = 'none';

chest.style.display = 'none';
legs.style.display = 'none';
solvent.style.display = 'none';
twine.style.display = 'none';

// Hiding coffers and all info when clicking on boss icon again/other boss

function hideThemisCoffers() {
    chest.style.display = 'none';
    legs.style.display = 'none';
    solvent.style.display = 'none';
    twine.style.display = 'none';
}

function toggleThemisBoss(bossLoot) {
    if (bossLoot.style.display === 'none') {
        bossLoot.style.display = 'block';
    } else {
        bossLoot.style.display = 'none';
        hideThemisCoffers();
    }
}

function toggleThemisLoot(lootElement) {
    // Hide all loot elements
    chest.style.display = 'none';
    legs.style.display = 'none';
    solvent.style.display = 'none';
    twine.style.display = 'none';

    // Show the specific loot element
    lootElement.style.display = 'block';
}


document.getElementById('themis').addEventListener('click', function() {
    toggleThemisBoss(lootEleven);
});

document.getElementById('chest').addEventListener('click', function() {
    toggleThemisLoot(chest);
});

document.getElementById('legs').addEventListener('click', function() {
    toggleThemisLoot(legs);
});

document.getElementById('solvent').addEventListener('click', function() {
    toggleThemisLoot(solvent);
});

document.getElementById('twine').addEventListener('click', function() {
    toggleThemisLoot(twine);
});
