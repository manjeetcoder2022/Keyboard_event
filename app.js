canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

var alpha_key = 'Alpkey.png'
var arrow_key= 'Arrkey.png'
var num_key='numkey.png'
var other_key='otherkey.png'
var Special_key='spkey.png'

draw_alpha = new Image()
draw_alpha.src = alpha_key

draw_arrow= new Image()
draw_arrow.src=arrow_key

draw_num= new Image()
draw_num.src=num_key

draw_other= new Image()
draw_other.src=other_key

draw_Special= new Image()
draw_Special.src=Special_key


window.addEventListener("keydown", mybuttondown)

function mybuttondown(e) {
    keypressed = e.keyCode

    if (keypressed >= '65' && keypressed <= '90' || keypressed >= '97' && keypressed <= '122') {
        
        text_1 = 'You pressed Alphabet Key'
        ctx.drawImage(draw_alpha, 100, 100, 400, 150)
    

    } else if (keypressed >= 48 && keypressed <= 57) {
        text_1 = 'You pressed Number Key'
        ctx.drawImage(draw_num, 100, 100, 400, 150)

    } else if (keypressed >= 37 && keypressed <= 40) {


        text_1 = 'You pressed Arrow Key'
        ctx.drawImage(draw_arrow, 100, 100, 400, 150)

    } else if (keypressed == '17' || keypressed == '18' || keypressed == '27') {
        text_1 = 'You pressed Special  Key'
        ctx.drawImage(draw_Special, 100, 100, 400, 150)
    } else {
        text_1 = 'You pressed Other Key'
        ctx.drawImage(draw_other, 100, 100, 400, 150)
    }
    user_prees = document.getElementById("user_press").innerHTML = text_1
}


