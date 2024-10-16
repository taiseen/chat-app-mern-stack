// Helper function to pad single-digit numbers with a leading zero
const padZero = (number) => number.toString().padStart(2, "0");

export const extractTime = (dateString) => {
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());

    return `${hours}:${minutes}`;
}
