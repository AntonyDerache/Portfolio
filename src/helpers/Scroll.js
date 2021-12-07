export const getYScrollAmount = () => {
    return document.documentElement.scrollTop;
}

export const hidePresScreen = (img, title, scrollAmount = getYScrollAmount()) => {
    if (!img || !title)
        return;
    title.style.transform = `translateY(-${(scrollAmount * 1.5).toString()}px)`;
    if (scrollAmount > 100) {
        if (img.classList.contains("show-img"))
            img.classList.remove("show-img");
        img.classList.add("hide-img");
        if (title.classList.contains("show"))
            title.classList.remove("show");
        title.classList.add("hide");
    } else {
        if (img.classList.contains("hide-img"))
            img.classList.add("show-img");
        img.classList.remove("hide-img");
        if (title.classList.contains("hide"))
            title.classList.add("show");
        title.classList.remove("hide");
    }
}

export const switchNav = (nav, scrollAmount = getYScrollAmount()) => {
    if (nav) {
        if (scrollAmount > 50) {
            nav.classList.add("hide-nav");
            nav.classList.remove("show-nav");
        } else {
            nav.classList.remove("hide-nav");
            nav.classList.add("show-nav");
        }
    }
}