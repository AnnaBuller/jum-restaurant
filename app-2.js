// ZAMKNIĘCIE MENU NA KLIKNIĘCIE NA POZYCJĘ MENU LUB POZA MENU

const menu = document.querySelector('.menu__open');
const body = document.querySelector('body');

function closeMenu(e) {
	if (menu.checked == true && e.target != menu) {
		return (menu.checked = false); //odznacz checkbox (wyłącz menu)
	}
}

body.addEventListener('click', closeMenu);

// ---------------------------------------------------------------------

// ZMIANA DNIA TYGODNIA W HEADERZE ZALEŻNIE OD DATY

let date = new Date();
let day = date.getDay(); //dzisiejszy dzień tygodnia
const headerSlogan = document.querySelector('.header__slogan'); //cały slogan w headerze
const secondSentence = document.querySelector('.header__2nd-sentence'); //drugie zdanie w headerze

let weekDay = document.createElement('span');
weekDay.className = 'header__day'; //stworzenie <span> z ostylowującą go klasą

//wpisanie wartości dnia tygodnia do tekstu <span>
switch (day) {
	case 0:
		weekDay.innerHTML = 'niedzielę';
		break;
	case 1:
		weekDay.innerHTML = 'poniedziałek';
		break;
	case 2:
		weekDay.innerHTML = 'wtorek';
		break;
	case 3:
		weekDay.innerHTML = 'środę';
		break;
	case 4:
		weekDay.innerHTML = 'czwartek';
		break;
	case 5:
		weekDay.innerHTML = 'piątek';
		break;
	case 6:
		weekDay.innerHTML = 'sobotę';
		break;
}

headerSlogan.insertBefore(weekDay, secondSentence); //umieszczenie dnia tyg. w headerze

// ---------------------------------------------------------------------

// ROZWINIĘCIE POLA Z TEKSTEM PO KLIKNIĘCIU 'CZYTAJ DALEJ'

const paragraph = document.querySelector('.section-1__paragraph');
const readMore = document.querySelector('.section-1__btn');

function revealText() {
	paragraph.classList.toggle('section-1__paragraph--mobile'); //usuwaj/dodawaj klasę

	if (paragraph.classList.contains('section-1__paragraph--mobile') == false) {
		readMore.innerHTML = 'zwiń tekst';
	} else {
		readMore.innerHTML = 'czytaj dalej';
	}
}

readMore.addEventListener('click', revealText);

// ---------------------------------------------------------------------

// POWIĘKSZENIE OBRAZKA DANIA PO KLIKNIĘCIU

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
