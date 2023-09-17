import { danType } from './generateProblem'

export const generate_orders = (array: number[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

export const generate_problem_orders = () => {
  const dans: danType[] = [2, 3, 4, 5, 6, 7, 8, 9]

  generate_orders(dans)

  dans.push((Math.floor(Math.random() * 8) + 2) as danType)
  dans.push((Math.floor(Math.random() * 8) + 2) as danType)

  return dans
}
