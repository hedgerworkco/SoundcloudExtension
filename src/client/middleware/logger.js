export default function logger (next) {
  return action => {
    console.log(action)
    next(action)
  }
}