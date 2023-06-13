document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');
  
    button.addEventListener('click', () => {
      const chapter = input.value.trim();
  
      if (chapter !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
  
        li.textContent = chapter;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
  
        deleteButton.addEventListener('click', () => {
          li.remove();
        });
  
        li.appendChild(deleteButton);
        list.appendChild(li);
  
        input.value = '';
        input.focus();
      } else {
        input.focus();
      }
    });
  });
  