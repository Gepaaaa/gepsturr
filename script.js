document.addEventListener('DOMContentLoaded', () => {
    // Set Tahun
    const yy = document.getElementById('yy');
    if (yy) yy.textContent = new Date().getFullYear();

    // Efek Ripple Klik
    document.querySelectorAll('.item').forEach(el => {
        el.addEventListener('pointerdown', (e) => {
            const rect = el.getBoundingClientRect();
            const r = document.createElement('span');
            r.className = 'ripple';
            r.style.left = (e.clientX - rect.left) + 'px';
            r.style.top = (e.clientY - rect.top) + 'px';
            el.appendChild(r);
            setTimeout(() => r.remove(), 600);
        });
    });
});