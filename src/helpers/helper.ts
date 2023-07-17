export function cleanText(text: String) {
  return text.replace(/'''[\w\s]+'''/g, '')
}

export const getCurrentDate = () => {
  return new Date().toLocaleString('en-US', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
  })
}

export const getCurrentTime = () => {
  return new Date().toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}
