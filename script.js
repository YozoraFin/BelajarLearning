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
            count += 5
            if(count <= 784) review.textContent = count
            if(count <= 7*100) experience.textContent = Math.round(count/100)
            if(count <= 245*3) student.textContent = Math.round(count/3)
            if(count <= 120*6) material.textContent = Math.round(count/6)
            if(count === 1000) clearInterval(countdown)
        }, 25) 
        counterTrigger = false
    }
})