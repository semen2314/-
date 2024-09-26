document.querySelectorAll('.plitButton').forEach(button => {
    button.addEventListener('mousedown', () => {
      button.classList.add('pressed'); 
    });
  
    button.addEventListener('mouseup', () => {
      button.classList.remove('pressed'); 
    });
  
    button.addEventListener('mouseleave', () => {
      button.classList.remove('pressed'); 
    });
  });
  
  