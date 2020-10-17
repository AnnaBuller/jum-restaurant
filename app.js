startJS();
document.addEventListener('DOMContentLoad', startJS);

function startJS() {
	// ZAMKNIĘCIE MENU NA KLIKNIĘCIE NA POZYCJĘ MENU LUB POZA MENU

	function closeMenu(e) {
		const menu = document.querySelector('.menu__open');
		if (menu.checked === true && e.target !== menu) {
			return (menu.checked = false); //odznacz checkbox (wyłącz menu)
		}
	}

	document.body.addEventListener('click', closeMenu);

	// ---------------------------------------------------------------------

	// ZMIANA DNIA TYGODNIA W HEADERZE ZALEŻNIE OD DATY

	const date = new Date();
	const day = date.getDay(); //dzisiejszy dzień tygodnia

	const weekDay = document.createElement('span');
	weekDay.className = 'header__day'; //stworzenie <span> z ostylowującą go klasą

	//wpisanie wartości dnia tygodnia do tekstu <span>
	switch (day) {
		case 0:
			weekDay.textContent = 'niedzielę';
			break;
		case 1:
			weekDay.textContent = 'poniedziałek';
			break;
		case 2:
			weekDay.textContent = 'wtorek';
			break;
		case 3:
			weekDay.textContent = 'środę';
			break;
		case 4:
			weekDay.textContent = 'czwartek';
			break;
		case 5:
			weekDay.textContent = 'piątek';
			break;
		case 6:
			weekDay.textContent = 'sobotę';
			break;
	}

	document
		.querySelector('.header__slogan')
		.insertBefore(weekDay, document.querySelector('.header__2nd-sentence')); //umieszczenie dnia tyg. w headerze przed drugim zdaniem

	// ---------------------------------------------------------------------

	// ROZWINIĘCIE POLA Z TEKSTEM PO KLIKNIĘCIU 'CZYTAJ DALEJ'

	const paragraph = document.querySelector('.section-1__paragraph');
	const readMore = document.querySelector('.section-1__btn');

	function revealText() {
		paragraph.classList.toggle('section-1__paragraph--mobile'); //usuwaj/dodawaj klasę

		if (paragraph.classList.contains('section-1__paragraph--mobile') == false) {
			readMore.textContent = 'zwiń tekst';
		} else {
			readMore.textContent = 'czytaj dalej';
		}
	}

	readMore.addEventListener('click', revealText);

	// ---------------------------------------------------------------------

	// TO DO -> POWIĘKSZENIE OBRAZKA DANIA PO KLIKNIĘCIU

	// ---------------------------------------------------------------------

	// ALERT INFORMUJĄCY O ILOŚCI OBIADÓW

	const dinnerInput = document.querySelectorAll('.amount__input');

	function showAlert(e) {
		if (e.target.value > 20)
			alert('Nie można zamówić więcej niż 20 sztuk jednego dania');
	}

	dinnerInput.forEach((item) => {
		item.addEventListener('input', showAlert);
	});

	// ---------------------------------------------------------------------

	// DODANIE DANIA DO KOSZYKA

	const toCart = document.querySelectorAll('.dinner__btn'); //przycisk "DO KOSZYKA"
	const cartArea = document.querySelector('.basket__field'); //pole z zamówieniami
	const dinnerList = document.createElement('ol'); //stworzenie ordered list
	dinnerList.className = 'basket__list'; //nadanie klasy ordered list

	function addToCart(e) {
		const dinner = document.createElement('li');
		dinner.className = 'basket__dinner'; //stworzenie elementu ordered list - zamówionego dania

		const dinnerName =
			e.target.previousElementSibling.previousElementSibling
				.previousElementSibling;
		dinner.innerHTML = dinnerName.innerHTML; //namierzenie nazwy konkretnego dania

		dinnerList.appendChild(dinner); //dodanie dania do listy obiadów
	}
	cartArea.appendChild(dinnerList); //dodanie listy do obiadów do pola koszyka

	toCart.forEach((item) => item.addEventListener('click', addToCart)); //dodanie obiadu do koszyka na klik

	// ---------------------------------------------------------------------
}
