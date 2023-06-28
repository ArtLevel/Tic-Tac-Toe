// Находим нужные элементы
const board = document.querySelector('#board')
const fields = board.querySelectorAll('td')

// Вешаем на каждое поле event 'click'
fields.forEach(el => {
	el.addEventListener('click', () => setFieldXOrO(el))
})

// Находим нужные элементы
const moveXOrO = document.querySelector('#move-x-or-o')
const textWin = document.querySelector('#text-win')

// Функция отвечает за - определить кто ходит
function setMove(moveXOrO) {
	return moveXOrO.querySelector('span').textContent
}

// Функция отвечает за заполнение полей и проверку кто победил
function setFieldXOrO(el) {
	const move = setMove(moveXOrO)

	if(el.innerHTML === '') {
		el.append(move)

		// Смотрим кто сходим, и меняем значение на противоположное
		if(moveXOrO.querySelector('span').textContent === 'X') {
			moveXOrO.querySelector('span').textContent = 'O'
		} else {
			moveXOrO.querySelector('span').textContent = 'X'
		}

		// Проверяем кто победил
		// Выводим победителя с задержкой, для того, чтобы крестик или нолик успел записался в поле
		if(fields[0].textContent === 'X' && fields[1].textContent === 'X' && fields[2].textContent === 'X') {
			setTimeout(() => {
				alert('Победил X')
				window.location.reload()
				}, 10)
		} else if(fields[0].textContent === 'O' && fields[1].textContent === 'O' && fields[2].textContent === 'O') {
			setTimeout(() => {
			alert('Победил O')
			window.location.reload()
			}, 10)
		}

		if(fields[0].textContent === 'X' && fields[3].textContent === 'X' && fields[6].textContent === 'X') {
			setTimeout(() => {
			alert('Победил X')
			window.location.reload()
			}, 10)
		} else if(fields[0].textContent === 'O' && fields[3].textContent === 'O' && fields[6].textContent === 'O') {
			setTimeout(() => {
			alert('Победил O')
			window.location.reload()
			}, 10)
		}

		if(fields[0].textContent === 'X' && fields[4].textContent === 'X' && fields[8].textContent === 'X') {
			setTimeout(() => {
			alert('Победил X')
			window.location.reload()
			}, 10)
		} else if(fields[0].textContent === 'O' && fields[4].textContent === 'O' && fields[8].textContent === 'O') {
			setTimeout(() => {
			alert('Победил O')
			window.location.reload()
			}, 10)
		}

		if(fields[2].textContent === 'X' && fields[4].textContent === 'X' && fields[6].textContent === 'X') {
			setTimeout(() => {
			alert('Победил X')
			window.location.reload()
			}, 10)
		} else if(fields[2].textContent === 'O' && fields[4].textContent === 'O' && fields[6].textContent === 'O') {
			setTimeout(() => {
			alert('Победил O')
			window.location.reload()
			}, 10)
		}

		if(fields[2].textContent === 'X' && fields[5].textContent === 'X' && fields[8].textContent === 'X') {
			setTimeout(() => {
			alert('Победил X')
			window.location.reload()
			}, 10)
		} else if(fields[2].textContent === 'O' && fields[5].textContent === 'O' && fields[8].textContent === 'O') {
			setTimeout(() => {
			alert('Победил O')
			window.location.reload()
			}, 10)
		}

		if(fields[3].textContent === 'X' && fields[4].textContent === 'X' && fields[5].textContent === 'X') {
			setTimeout(() => {
			alert('Победил X')
			window.location.reload()
			}, 10)
		} else if(fields[3].textContent === 'O' && fields[4].textContent === 'O' && fields[5].textContent === 'O') {
			setTimeout(() => {
			alert('Победил O')
			window.location.reload()
			}, 10)
		}

		if(fields[6].textContent === 'X' && fields[7].textContent === 'X' && fields[8].textContent === 'X') {
			setTimeout(() => {
			alert('Победил X')
			window.location.reload()
			}, 10)
		} else if(fields[6].textContent === 'O' && fields[7].textContent === 'O' && fields[8].textContent === 'O') {
			setTimeout(() => {
			alert('Победил O')
			window.location.reload()
			}, 10)
		}

		if(fields[1].textContent === 'X' && fields[4].textContent === 'X' && fields[7].textContent === 'X') {
			setTimeout(() => {
			alert('Победил X')
			window.location.reload()
			}, 10)
		} else if(fields[1].textContent === 'O' && fields[4].textContent === 'O' && fields[7].textContent === 'O') {
			setTimeout(() => {
			alert('Победил O')
			window.location.reload()
			}, 10)
		}

		// Данный блок кода, отвечает за ничью
		let filledFields = 0

		for(const field of fields) {
			if(field.textContent === 'X' || field.textContent === 'O') {
				filledFields++
			}
		}

		if(filledFields === 9) {
			setTimeout(() => {
				alert('Ничья')
				window.location.reload()
				}, 10)
		}

	}
}