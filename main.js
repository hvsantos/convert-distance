const $select = document.querySelector('.select-option')
const $input = document.querySelector('.inputvalue')
const $answer = document.querySelector('.answer')
const $button = document.querySelector('.main-button')
$button.addEventListener('click', clickConvert)
function clickConvert(event) {
  event.preventDefault()
  let value = Number($input.value)
  let option = $select.value
  if (option == 'anosluztokm' && option != '' && value) {
    let finalResult = value / 0.0000000000001057
    $answer.textContent =
      'O resultado é de ' + value + ' Anos-Luz equivale à ' + finalResult + 'KM'
  } else if (option == 'kmtoanosluz' && option != '' && value) {
    let finalResult = value * 0.0000000000001057
    $answer.textContent =
      'O resultado é de ' +
      value +
      ' KM equivale à ' +
      finalResult +
      ' Anos-Luz'
  } else {
    if (value) {
      $answer.textContent = 'Favor selecionar uma opção válida'
    } else {
      $answer.textContent = 'Favor inserir um valor válido'
    }
  }
}
