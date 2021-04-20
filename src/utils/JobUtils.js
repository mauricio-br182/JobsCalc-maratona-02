module.exports = {
    remainingDays(job)
{
    // Calcular data:
    const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed()

    //construindo a data de criação 
    const createdDate = new Date(job.createdAt)

    //construindo a data de entrega

    const dueDay = createdDate.getDate() + Number(remainingDays)

    const dueDateInMs = createdDate.setDate(dueDay)

    const timeDiffInms = dueDateInMs - Date.now()

    const dayInMs = 1000 * 60 *60 *24

    const daysDiff = Math.ceil(timeDiffInms / dayInMs)

    return daysDiff
    },
    calculateBudget: (job, valueHour) =>  valueHour * job['total-hours']

}