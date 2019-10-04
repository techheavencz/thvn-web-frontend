export function htmlEscape(input) {
    const el = document.createElement('span');
    el.textContent = input;
    return el.innerHTML;
}

export function formatDate(date) {
    return new Intl.DateTimeFormat('cs-CZ', {
        weekday: 'long',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'Europe/Prague',
    }).format(date);
}
