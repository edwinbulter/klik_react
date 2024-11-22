export function getPrettyUsername (username) {
    if (!username) return '';
    const firstChar = username.charAt(0).toUpperCase();
    const remainingChars = username.slice(1).toLowerCase();
    return firstChar + remainingChars;
}
