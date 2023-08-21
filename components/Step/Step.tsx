import { useRecoilState, useResetRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'

import { reportDataState, stepState } from '@/recoil/step/atom'
import { StepType } from './Step.type'

export default function Step() {
  const [reportData, setReportData] = useRecoilState(reportDataState)
  const [step, setStep] = useRecoilState(stepState)
  const resetReportData = useResetRecoilState(reportDataState)
  const resetStep = useResetRecoilState(stepState)
  const router = useRouter()

  const PROBLEM_LENGTH = 20

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    //매 step마다 setReportData으로 최신화

    //TODO: 1 / 20 잠깐 깜빡이는 에러 해결하기
    if (step === 20) {
      sessionStorage.setItem('reportData', JSON.stringify(reportData))
      resetReportData()
      resetStep()
      router.push('/report')
      return <></>
    }

    setStep((prev: StepType) => (prev + 1) as StepType)
  }

  return (
    <>
      <h1>
        {step}단계 / {PROBLEM_LENGTH}
      </h1>

      <button onClick={handleClick}>
        {step === PROBLEM_LENGTH ? '시험 종료' : '다음 문제'}
      </button>
    </>
  )
}
