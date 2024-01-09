export const generateRandomLetter = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

export const generateHash = () => generateRandomLetter() + Math.floor(Math.random() * 9999)

export const uriGenerator = (input) => `${input.toLowerCase().replace(/\s+/g, '').substr(0, 4)}-${generateHash()}`
