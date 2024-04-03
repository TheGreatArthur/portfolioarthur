document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('portfolio-text');
    const textContent = 'Ma veille technologique';
    let displayIndex = 0;
    let direction = 1; // 1 pour écrire, -1 pour effacer
  
    function updateText() {
      textElement.textContent = textContent.slice(0, displayIndex);
  
      if (direction === 1) {
        displayIndex++;
        if (displayIndex > textContent.length) {
          direction = -1;
          setTimeout(updateText, 2000); // Délai avant de recommencer à effacer
        } else {
          setTimeout(updateText, 400); // Délai avant la prochaine mise à jour de l'écriture
        }
      } else {
        displayIndex--;
        if (displayIndex < 0) {
          direction = 1;
          setTimeout(updateText, 200); // Délai avant de recommencer à écrire
        } else {
          setTimeout(updateText, 300); // Délai avant la prochaine mise à jour de l'effacement
        }
      }
    }
  
    // Commencez le processus
    updateText();
  });
  
