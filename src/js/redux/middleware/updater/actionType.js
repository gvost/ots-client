
export default function updaterActionType(baseType) {
  return {
    pending: baseType + '/pending',
    update:  baseType + '/update',
    error:   baseType + '/error'
  }
}