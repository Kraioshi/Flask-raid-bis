// Hide kokytos loot
var p9Text = document.querySelector('.kokytos-loot');
p9Text.style.display = 'none';

document.getElementById('kokytos').addEventListener('click', function() {
    if (p9Text.style.display === 'none') {
        p9Text.style.display = 'block';
    } else {
        p9Text.style.display = 'none';
    }
});