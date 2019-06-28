export function htmlEscape(input) {
    const el = document.createElement('span');
    el.textContent = input;
    return el.innerHTML;
}