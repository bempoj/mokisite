document.querySelector('.cta').addEventListener('click', () => {
    alert('Puszi 😘');
});

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${scrollPercent}%`;
});

const themeToggle = document.getElementById('theme-toggle');

const userPrefersDark = localStorage.getItem('dark-mode');
if (userPrefersDark === 'enabled') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️ Day Mode';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Day Mode';
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        themeToggle.textContent = '🌙 Night Mode';
        localStorage.setItem('dark-mode', 'disabled');
    }
});

document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', () => {
        const label = item.querySelector('.item-label').textContent;

        if (label === 'Notes') {
            const overlay = document.getElementById('notes-overlay');
            overlay.style.display = 'flex';
        } else {
            alert(`You clicked on ${label}`);
        }
    });
});

const overlay = document.getElementById('notes-overlay');
overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.classList.contains('close-overlay')) {
        overlay.style.display = 'none';
    }
});