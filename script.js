function toggleCard(header) {
  const card = header.parentElement;
  card.classList.toggle('active');
}
document.querySelectorAll('.lesson-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
