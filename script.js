function togglemode() {
    const html = document.documentElement
    html.classList.toggle("light")

    /* if (html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    } */

    /*substituir a imagem no light e dark mode*/

    const img = document.querySelector("#profile img") 

        if (html.classList.contains("light")) {
            img.setAttribute("src", "./assets/avatar-light.png")
        }  else {
            img.setAttribute("src", "./assets/avatar.png")
        }
        
}