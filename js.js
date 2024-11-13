const scriptURL = 'https://script.google.com/macros/s/AKfycbz6AhfHUp6Vc3xCgRd6vV74MHOsPuYEFqPDblLFYAZoZ02uzs8Us6okU4G85zvR8tk8/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
