
utils.setup()
utils.setStyles()
utils.setGlobals()

var su = 0
var lastTime = 0
var delta = 0

var page = "password"

let loadedPassword = localStorage.getItem("password")

function savePassword(password) {
    localStorage.setItem("password", password)
}

function update(timestamp) {
    requestAnimationFrame(update)

    utils.getDelta(timestamp)
    ui.resizeCanvas()
    ui.getSu()
    input.setGlobals()

    ui.rect(canvas.width/2, canvas.height/2, canvas.width, canvas.height, [22, 22, 22, 1])

    if (page == "password") {
        passwordTick()
    }
    if (page == "main") {
        mainTick()
    }

    if (wConnect && !document.hidden) {
        wConnect = false
        connectToServer()
    }

    input.updateInput()
}

input.checkInputs = (event) => {
    input.cistart()

    if (page == "password") {
        passwordBox.checkFocus(event)
    }
    if (page == "main") {
        msgBox.checkFocus(event)
    }

    input.ciend()
}

input.keyPressAlways = (event) => {
    if (input.focused == passwordBox) {
        if (event.key == "Enter") {
            // passwordBox.text = ""
            sendMsg({login: passwordBox.text})
        }
    }
    if (input.focused == msgBox) {
        if (event.key == "Enter") {
            sendMsg({msg: msgBox.text})
            lines.push(">>> "+msgBox.text)
            updateConsole()
            msgBox.text = ""
        }
    }
}

input.scroll = (x, y) => {
    if (page == "main" && cmdC.hovered()) cmdC.scroll(x, y)
}

requestAnimationFrame(update)