const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navLists = document.querySelector("nav")
}

window.anbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")){
        form.reset();
    }
}