export const hideElement = (item, classToRemove, classToAdd) => {
    if (item.classList.contains(classToRemove))
        item.classList.remove(classToRemove);
    item.classList.add(classToAdd);
}

export const showElement = (item, classToRemove, classToAdd) => {
    if (item.classList.contains(classToRemove))
        item.classList.add(classToAdd);
    item.classList.remove(classToRemove);
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
        showElement(img, "hide-img", "show-img");
        showElement(title, "hide", "show");
        showElement(chevron, "hide", "show");
    }
}

export const switchNav = (header, scrollAmount = getYScrollAmount()) => {
    if (header) {
        if (scrollAmount > 50) {
            header.classList.add("hide-nav");
            header.classList.remove("show-nav");
        } else {
            header.classList.remove("hide-nav");
            header.classList.add("show-nav");
        }
    }
}