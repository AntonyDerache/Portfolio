export const hideElement = (item, classToRemove, classToAdd) => {
    if (item.classList.contains(classToRemove))
        item.classList.remove(classToRemove);
    item.classList.add(classToAdd);
}

export const getYScrollAmount = () => {
    return document.documentElement.scrollTop;
}

export const hidePresScreen = (img, title, chevron, scrollAmount = getYScrollAmount()) => {
    if (!img || !title || !chevron)
        return;
    title.style.transform = `translateY(-${(scrollAmount * 1.5).toString()}px)`;
    if (scrollAmount > 100) {
        hideElement(img, "show-img", "hide-img");
        hideElement(title, "show", "hide");
        hideElement(chevron, "show", "hide");
    } else {
        hideElement(img, "hide-img", "show-img");
        hideElement(title, "hide", "show");
        hideElement(chevron, "hide", "show");
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