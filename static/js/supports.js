var supportsJobs = document.querySelector('.supports-role');

supportsJobs.style.display = 'none';

function toggleSupportsJobs() {
    if (supportsJobs.style.display === 'none') {
        supportsJobs.style.display = 'block';
    } else {
        supportsJobs.style.display = 'none';
    }
}

document.getElementById('supports').addEventListener('click', function () {
    toggleSupportsJobs();
});
