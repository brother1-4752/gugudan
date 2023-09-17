const LEFT_FACTERS = [2, 3, 4, 5, 6, 7, 8, 9]
const RIGHT_FACTERS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const problems_dataset = LEFT_FACTERS.map((left) =>
  RIGHT_FACTERS.map((right) => [[`${left} x ${right} = ?`, left * right]])
)

export const PROBLEM_LENGTH = 20
