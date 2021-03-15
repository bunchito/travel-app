const validatePropertiesObj = (requiredProperties = [], obj = {}) => {
  for (let element of requiredProperties) {
    if (!obj[element]) return false
  }
  return true
}

const validateResponse = (data = {}, subKey = '') => {
  if (!data[subKey] || data[subKey] === 0) return false
}

const warningForMaxDaysForecastAPI = (days) => {
  return days > 16 ? { warning: 'We only support forecast for 16 days' } : null
}

export { validatePropertiesObj, validateResponse, warningForMaxDaysForecastAPI }
