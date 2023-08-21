export type StepType =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20

type danDataType = {
  time_to_solve_sum: number
  is_right_count: number
  is_wrong_count: number
}

export type ReportDataType = {
  description_of_problem?: string
  is_right?: boolean
  time_to_solve?: number
  which_dan?: danDataType
}
