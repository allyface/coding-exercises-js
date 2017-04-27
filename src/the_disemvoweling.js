export default function theDisemvoweling(string) {
  let disemvoweledStr = string.replace(/[aeiou]/g, "")
                              .replace(/\s/g, "")
  return disemvoweledStr
}
