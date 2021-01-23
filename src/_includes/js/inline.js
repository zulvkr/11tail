function submit(event) {
    const formData = new FormData(document.querySelector('form'))
    for (var pair of formData.entries()) {
        console.log(pair)
    }

    event.preventDefault();
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', submit);