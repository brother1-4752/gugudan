import { atom } from 'recoil'
import { ReportDataType, StepType } from '@/components/Step/Step.type'

export const stepState = atom<StepType>({
  key: 'step',
  default: 1,
})

export const reportDataState = atom<ReportDataType[]>({
  key: 'reportData',
  default: [{}],
})
