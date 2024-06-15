
var msgBox = new ui.TextBox("type here")
msgBox.outlineColour = [255, 255, 255, 1]
msgBox.colour = [10, 10, 10, 1]
var lines = []

var cmdC = new ui.Canvas()

function updateConsole(scroll=true) {
    msgBox.set(canvas.width/2, canvas.height-125*su, canvas.width-200*su, 50*su)
    let x = canvas.width/2
    let y = canvas.height/2-msgBox.height/2
    let w = canvas.width-200*su - 20*su
    let h = canvas.height-200*su-msgBox.height - 20*su
    cmdC.set(x, y, w, h)
    let lines2 = ui.measureText(30*su, lines.join(" \n"), {wrap: w}).lines
    cmdC.bounds.minY = -lines2*30*su*ui.fontSizeMul*ui.spacingMul+cmdC.height-30*su
    if (scroll) {
        cmdC.off.y = cmdC.bounds.minY
    }
    cmdC.update()
}

function mainTick() {
    ui.text(canvas.width/2, 50*su, 50*su, "Admin Console", {align: "center"})
    
    let x = canvas.width/2
    let y = canvas.height/2-msgBox.height/2
    let w = canvas.width-200*su
    let h = canvas.height-200*su-msgBox.height

    ui.rect(x, y, w, h, [0, 0, 0, 0.5])

    // let lines2 = ui.measureText(30*su, lines.join(" \n"), {wrap: w}).lines

    // cmdC.set(x, y, w, h)
    ui.setC(cmdC)
    // cmdC.bounds.minY = -lines2*30*su*ui.fontSizeMul*ui.spacingMul+cmdC.height
    // cmdC.scrollY = cmdC.bounds.minY
    // cmdC.update()

    ui.text(0, 15*su, 30*su, lines.join(" \n"), {wrap: w-20*su}).lines

    ui.setC()

    msgBox.set(canvas.width/2, canvas.height-100*su-40*su/2, canvas.width-200*su, 40*su)
    msgBox.hover()
    msgBox.draw()

    
}