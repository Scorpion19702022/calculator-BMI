const yourHight = document.querySelector('#bmiHight')
const yourWeight = document.querySelector('#bmiWeight')
const yourBmi = document.querySelector('#bmiResults')

const bmiErros = document.querySelector('.bmi__error')
const bmiAdvice = document.querySelector('.bmi__info-advice')
const bmiInfo = document.querySelector('.bmi__info-text')

const btnResult = document.querySelector('.bmi__btn-results')
const btnClean = document.querySelector('.bmi__btn-clean')

// let masa = 58
// let wzrost = 173

// let resultat = (masa / Math.pow(wzrost / 100, 2)).toFixed(2)
// console.log(resultat)

const bmi = () => {
	yourBmi.value = (yourWeight.value / Math.pow(yourHight.value / 100, 2)).toFixed(2)
}

const clear = () => {
	yourHight.value = ''
	yourWeight.value = ''
	yourBmi.value = 0
	bmiErros.classList.remove('actionError')
	bmiAdvice.classList.remove('actionAdvice')
	bmiInfo.classList.remove('actionInfo')
}

const actionOne = () => {
	if ((yourHight.value !== '', yourWeight.value !== '')) {
		bmi()
		bmiErros.classList.remove('actionError')
		bmiAdvice.classList.remove('actionAdvice')
		bmiInfo.classList.add('actionInfo')
	} else {
		bmiErros.classList.add('actionError')
		bmiAdvice.classList.add('actionAdvice')
		bmiInfo.classList.remove('actionInfo')
	}
}

const actionAll = () => {
	actionOne()
	if (yourBmi.value <= 16) {
		bmiInfo.textContent = `Twoje BMI to: ${yourBmi.value}. Masa ciała jest zbyt niska. Skontaktuj się ze swoim lekarzem, który przeprowadzi wywiad medyczny i być może zleci wykonanie badań diagnostycznych i/lub modyfikację diety.`
	} else if (yourBmi.value > 16 && yourBmi.value <= 16.9) {
		bmiInfo.textContent = `Twoje BMI to: ${yourBmi.value}. Masa ciała jest zbyt niska. Skontaktuj się ze swoim lekarzem, który przeprowadzi wywiad medyczny i być może zleci wykonanie badań diagnostycznych i/lub modyfikację diety.`
	} else if (yourBmi.value > 16.9 && yourBmi.value <= 18.5) {
		bmiInfo.textContent = `Twoje BMI to: ${yourBmi.value}. Masa ciała jest zbyt niska. Rozważ konsultację lekarską i wzbogać dietę w zdrowe tłuszcze roślinne, białko oraz węglowodany złożone.`
	} else if (yourBmi.value > 18.5 && yourBmi.value <= 24.9) {
		bmiInfo.textContent = `Twoje BMI to: ${yourBmi.value}. Masa ciała jest prawidłowa. Dbaj o bogatą w warzywa i owoce dietę oraz codzienną dawkę sportu, aby utrzymać dobrą formę. `
	} else if (yourBmi.value > 24.9 && yourBmi.value <= 29.9) {
		bmiInfo.textContent = `Twoje BMI to: ${yourBmi.value}. Masa ciała jest zbyt wysoka. Rozważ konsultację lekarską i modyfikację stylu życia.`
	} else if (yourBmi.value > 29.9 && yourBmi.value <= 34.9) {
		bmiInfo.textContent = `Twoje BMI to: ${yourBmi.value}. Otyłość I stopnia!!! Masa ciała jest zbyt wysoka, wartości BMI wskazuje na rozwijającą się otyłość I stopnia. Skontaktuj się ze swoim lekarzem, który zarekomenduje modyfikację diety i wprowadzenie codziennej dawki ruchu. Wdrażając zmiany, unikniesz powikłań otyłości i zachowasz zdrowie na dłużej.`
	} else if (yourBmi.value > 34.9 && yourBmi.value <= 39) {
		bmiInfo.textContent = `Twoje BMI to: ${yourBmi.value}. Otyłość II stopnia!!! Masa ciała jest zbyt wysoka, wartości BMI wskazuje na rozwijającą się otyłość II stopnia. Skontaktuj się ze swoim lekarzem, który zarekomenduje modyfikację diety i wprowadzenie codziennej dawki ruchu. Wdrażając zmiany, unikniesz powikłań otyłości i zachowasz zdrowie na dłużej.`
	} else {
		bmiInfo.textContent = `Twoje BMI to: ${yourBmi.value}. Otyłość III stopnia!!! Masa ciała jest zbyt wysoka, wartości BMI wskazuje na rozwijającą się otyłość III stopnia. Skontaktuj się ze swoim lekarzem, który zarekomenduje modyfikację diety i wprowadzenie codziennej dawki ruchu. Być może konieczne będzie wprowadzenie leczenia farmakologicznego. Wdrażając zmiany i przestrzegając zaleceń lekarza, unikniesz powikłań otyłości i zachowasz zdrowie na dłużej.`
	}
}

btnResult.addEventListener('click', actionAll)
btnClean.addEventListener('click', clear)
