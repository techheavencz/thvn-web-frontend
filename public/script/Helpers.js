export function htmlEscape(input) {
    const el = document.createElement('span');
    el.textContent = input;
    return el.innerHTML;
}

export function formatDate(date) {
    return new Intl.DateTimeFormat('cs', {
        weekday: 'long',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'Europe/Prague',
    }).format(date);
}

export function pad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

export const days = ['pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota', 'neděle'];
