export const celsius = (x) => (x - 273).toFixed(2)

export const myToast = (toast, title, status, description) =>
  toast({
    title,
    description,
    status,
    duration: 5000,
    isClosable: true,
  })

export const dateFormat = (dt) => {
  const milliseconds = dt * 1000

  let current = new Date()
  let myDate = new Date(milliseconds)

  let dateTime = current.toLocaleString()

  let date = current.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  let time = current.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })

  let sunrise = myDate.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })

  let sunset = myDate.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })

  let hourly = myDate.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })
  let daily = myDate.toLocaleString('en-US', { weekday: 'short' })

  return { sunrise, sunset, dateTime, date, time, daily, hourly }
}
