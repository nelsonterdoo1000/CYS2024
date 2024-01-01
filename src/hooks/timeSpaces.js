export const isItOnGoing = (program) => {
    const date = new Date()
    const currentMonth = date.getMonth() + 1
    const end_datetime = program?.end_datetime;
    const start_datetime = program?.start_datetime;

    const isThisYear = Number(end_datetime?.slice(0, 4)) == date.getFullYear()

    const isThisMonth = Number(end_datetime?.slice(5, 7)) == date.getMonth() + 1

    const isToday = Number(end_datetime?.slice(8)) >= date.getDate() &&
        Number(start_datetime?.slice(8)) <= date.getDate()
        || Number(start_datetime?.slice(5, 7)) <= currentMonth
        && Number(end_datetime?.slice(5, 7)) >= currentMonth
        && Number(end_datetime?.slice(8)) >= date.getDate()
        && Number(start_datetime?.slice(8)) <= date.getDate()

    const amIOngoing = isThisYear && isThisMonth && isToday && true

    return amIOngoing
}

export const whenWillI = (program) => {
    const end_datetime = program?.end_datetime;
    const start_datetime = program?.start_datetime;
    const date = new Date()
    const currentMonth = date.getMonth() + 1

    const yearsRemaining = () => {
        return Number(start_datetime?.slice(0, 4)) <= date.getFullYear() ?
            Number(end_datetime?.slice(0, 4)) - date.getFullYear() : Number(start_datetime?.slice(0, 4)) - date.getFullYear()
    }
    const monthsRemaining = () => {
        return Number(start_datetime?.slice(5, 7)) <= currentMonth ?
            Number(start_datetime?.slice(5, 7)) - currentMonth : Number(end_datetime?.slice(5, 7)) - currentMonth
    }

    const daysRemaining = () => {
        return Number(start_datetime?.slice(8)) <= date.getDate() ?
            Number(end_datetime?.slice(8)) - date.getDate() : Number(start_datetime?.slice(8)) - date.getDate()
    }

    const returnSpeechDays = daysRemaining() < 0 ? `day${daysRemaining() !== -1 ? 's' : ''} ago` : `day${daysRemaining() !== 1 ? 's' : ''}  remaining`;

    const returnSpeechMonths = monthsRemaining() < 0 ? `month${monthsRemaining() !== -1 ? 's' : ''}  ago` : `month${monthsRemaining() !== 1 ? 's' : ''}  remaining`;

    const returnSpeechYears = yearsRemaining() < 0 ? `year${yearsRemaining() !== -1 ? 's' : ''}  ago` : `year${yearsRemaining() !== 1 ? 's' : ''}  remaining`

    const resovle = yearsRemaining() ? `${yearsRemaining() < 0 ? yearsRemaining().toString()?.slice(1) : yearsRemaining()} ${returnSpeechYears}`
        : monthsRemaining() ? `${monthsRemaining() < 0 ? monthsRemaining().toString()?.slice(1) : monthsRemaining()} ${returnSpeechMonths}`
            : !yearsRemaining() && !monthsRemaining() &&
            daysRemaining() && `${daysRemaining() < 0 ? daysRemaining().toString()?.slice(1) : daysRemaining()} ${returnSpeechDays}`

    return resovle
}

// export const calculateRemainingTime = (program) => {
//     const start = new Date(program?.start_date);
//     const end = new Date(program?.end_date);

//     const years = end.getFullYear() - start.getFullYear();
//     const months = end.getMonth() - start.getMonth();
//     const days = end.getDate() - start.getDate();

//     return {
//         years: years,
//         months: months,
//         days: days
//     };
// }

// // Example usage
// const startDate = '2022-01-15';
// const endDate = '2023-02-10';

// const remainingTime = calculateRemainingTime(startDate, endDate);
// console.log(remainingTime);
