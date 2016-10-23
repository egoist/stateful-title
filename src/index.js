export default (oldTitle, set) => {
  if (set) document.title = oldTitle
  return newTitle => {
    document.title = (newTitle === false || newTitle === undefined) ?
      oldTitle :
      newTitle
  }
}
