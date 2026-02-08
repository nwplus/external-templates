export const parseIsoDateString = value => {
  if (!value || typeof value !== 'string') return null
  const timestamp = Date.parse(value)
  return Number.isNaN(timestamp) ? null : timestamp
}

export const msToUnits = timeInMs => {
  const days = Math.floor(timeInMs / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeInMs % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeInMs % (1000 * 60)) / 1000)

  if (days < 0 || hours < 0 || seconds < 0) {
    return [0, 0, 0, 0]
  }

  return [days, hours, minutes, seconds]
}
