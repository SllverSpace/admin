
var passwordBox = new ui.TextBox("Password")
passwordBox.hide = true
passwordBox.outlineColour = [255, 255, 255, 1]
passwordBox.colour = [10, 10, 10, 1]

function passwordTick() {
    passwordBox.set(canvas.width/2, canvas.height/2, 400*su, 100*su)
    passwordBox.outlineSize = 20*su
    passwordBox.hover()
    passwordBox.draw()
}