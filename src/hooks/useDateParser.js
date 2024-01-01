import { monthShortSchema } from "../assets/schemas"

const useDateParser = (dateIn) => {
    const { months } = monthShortSchema
    const yearIn = Number(dateIn?.slice(0, 4))
    const monthIn = Number(dateIn?.slice(5, 7))
    const dayIn = Number(dateIn?.slice(8, 10))

    return `${dayIn}-${months[monthIn - 1]}-${yearIn}`
}

export default useDateParser