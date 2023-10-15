var dpsJobs = document.querySelector('.dps-role');

dpsJobs.style.display = 'none';

function toggleDpsJobs() {
    if (dpsJobs.style.display === 'none') {
        dpsJobs.style.display = 'block';
    } else {
        dpsJobs.style.display = 'none';
    }
}

document.getElementById('dps').addEventListener('click', function () {
    toggleDpsJobs();
});
