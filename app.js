const body = document.querySelector('body')

const switch_theme = ( e ) =>
  { body.className = e.currentTarget.id }

document
  .querySelectorAll('input[type=radio][name=theme]')
  .forEach( e => e.onchange = switch_theme )
