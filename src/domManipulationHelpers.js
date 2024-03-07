/**
 * Add a CSS class to an element.
 * @param {HTMLElement} element - The element to add the class to.
 * @param {string} className - The class name to add.
 */
function addClass(element, className) {
    if (element.classList) {
        element.classList.add(className);
    } else {
        element.className = (element.className ? element.className + ' ' : '') + className;
    }
}

/**
 * Remove a CSS class from an element.
 * @param {HTMLElement} element - The element to remove the class from.
 * @param {string} className - The class name to remove.
 */
function removeClass(element, className) {
    if (element.classList) {
        element.classList.remove(className);
    } else {
        element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}

/**
 * Toggle a CSS class on an element.
 * @param {HTMLElement} element - The element to toggle the class on.
 * @param {string} className - The class name to toggle.
 */
function toggleClass(element, className) {
    if (element.classList) {
        element.classList.toggle(className);
    } else {
        var classes = element.className.split(' ');
        var existingIndex = classes.indexOf(className);

        if (existingIndex >= 0) {
            classes.splice(existingIndex, 1);
        } else {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }
}

// Export the functions
module.exports = {
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass
};
