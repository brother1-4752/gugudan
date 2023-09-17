import { problems_dataset } from '@/lib/constants/problemDataset'

export type danType = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export const generate_problem = (dan: danType) => {
  const randomNum = Math.floor(Math.random() * 9)
  return problems_dataset[dan - 2][randomNum]
}
