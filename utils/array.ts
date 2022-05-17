export const removeItemAtIndex = (arr: any[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

export const editItemAtIndex = (arr: any[], index: number | undefined, editedText: string) => {
  if (index === undefined) return []
  return [...arr.slice(0, index), editedText, ...arr.slice(index + 1)]
}
