addMovieBtn.addEventListener('click', () => modal.showModal());

function handleAddMovieForm() {
  let formData = new FormData(addMovieForm);
  let formObj = Object.fromEntries(formData);
  console.table(formObj);
  addMovieForm.reset();
}

addMovieForm.addEventListener('submit', handleAddMovieForm);