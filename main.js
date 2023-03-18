// ukol 1
const car = document.querySelector(".car")

const goRight = () => {
    car.style.marginLeft = "30px"
}

const goLeft = () => {
    car.style.marginLeft = "0px"
}

const handleCarMovement = (event) => {
    if (event.key === "ArrowRight") {
        goRight();
    } else if (event.key === "ArrowLeft") {
        goLeft()
    }
}

document.addEventListener("keydown", handleCarMovement);

//ukol 2
const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}

const formElement = document.querySelector("#login")

const verifyUser = (event) => {
    event.preventDefault()
    const emailInput = document.querySelector("#email")
    const passwordInput = document.querySelector("#password")
    if (emailInput.value === user.email && passwordInput.value === user.password) {
        formElement.textContent = `Přihlášený uživatel: ${user.name}`
    } else {
        const message = document.querySelector(".message")
        message.textContent = `Neplatné přihlašovací údaje.`
        message.style.color = "red"
        passwordInput.value = ""
    }
}

formElement.addEventListener("submit", verifyUser)

// ukol 3
const formularNewsletter = document.querySelector('#newsletter');
const input = document.querySelector('#input')

const prihlaseniOdberu = (event) => {
    event.preventDefault()
	const email = input.value
	formularNewsletter.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`
}

formularNewsletter.addEventListener('submit', prihlaseniOdberu)

const isItInputEmpty = () => {
    const zavinac = "@"
    if (input.value === "") {
        input.classList.add("input-warning")
    } else if (!input.value.includes(zavinac)) {
        input.classList.add("input-warning")
    } else {
        input.classList.remove("input-warning")
    }
}

input.addEventListener('input', isItInputEmpty)


