export function htmlEscape(input) {
    const el = document.createElement('span');
    el.textContent = input;
    return el.innerHTML;
}

export function formatDate(date) {
    const month = date.getMonth() + 1;
    const day = days[date.getDay() - 1];
    const time = `${pad(date.getUTCHours(), 2)}:${pad(date.getUTCMinutes(), 2)}`;
    return `${day} ${date.getDate()}. ${month}. ${time}`;
}

export function pad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

export const days = ['pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota', 'neděle'];
