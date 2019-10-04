export function htmlEscape(input) {
    const el = document.createElement('span');
    el.textContent = input;
    return el.innerHTML;
}

export function formatDate(date) {
    let timezone = 'Europe/Prague';
    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) { // safari workaround
        timezone = 'UTC';
    }
    return new Intl.DateTimeFormat('cs', {
        weekday: 'long',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: timezone,
    }).format(date);
}

export function pad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

export const days = ['pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota', 'neděle'];
