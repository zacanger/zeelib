const getNiceDate = () =>
  `[${Date(Date.now() * 1000).match(/(\d{2}:\d{2}:\d{2})/)[1]}]`

export default getNiceDate
