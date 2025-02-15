let counterTrigger = true
$(document).on("scroll", () => {
    const counter = document.getElementById("counter")
    const counterPos = counter.offsetTop - counter.scrollTop - counter.clientHeight
    const review = document.getElementById("review")
    const experience = document.getElementById("experience")
    const student = document.getElementById("student")
    const material = document.getElementById("material")
    var count = 0
    
    if($(this).scrollTop() > counterPos - 200 && counterTrigger) {
        const countdown = setInterval(() => {
            count++
            if(count <= 784/3) review.textContent = count*3
            if(count <= 7*10) experience.textContent = Math.round(count/10)
            if(count <= 245) student.textContent = count
            if(count <= 120) material.textContent = count
            if(count === 1000) clearInterval(countdown)
        }, 20)
        console.log("Trigger!!")
        counterTrigger = false
    }
})