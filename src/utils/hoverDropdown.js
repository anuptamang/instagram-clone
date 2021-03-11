export const hoverDropdown = () => {
  let timerOpen, timerClose
  const handlePopupOpen = (popup, boolean) => {
    clearTimeout(timerClose)
    timerOpen = setTimeout(() => {
      popup(boolean)
    }, 500)
  }

  const handlePopupClose = (popup, boolean) => {
    clearTimeout(timerOpen)
    timerClose = setTimeout(() => {
      popup(boolean)
    }, 500)
  }

  return {
    handlePopupOpen,
    handlePopupClose,
  }
}
