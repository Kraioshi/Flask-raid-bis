var bisDiv = document.querySelector('.bis');

function toggleVisibility(targetDiv) {
    if (targetDiv.style.display === 'none') {
        targetDiv.style.display = 'flex';
    } else {
        targetDiv.style.display = 'none';
    }
}

document.getElementById('99').addEventListener('click', function() {
    toggleVisibility(bisDiv);
});
