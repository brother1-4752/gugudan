import { useRecoilState, useResetRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

import { reportDataState, stepState } from '@/recoil/step/atom'
import { StepType } from './Step.type'
import { PROBLEM_LENGTH } from '@/lib/constants/problemDataset'
import { generate_orders } from '@/lib/utils/problems/generateOrders'

export default function Step() {
  const [reportData, setReportData] = useRecoilState(reportDataState)
  const [step, setStep] = useRecoilState(stepState)
  const resetReportData = useResetRecoilState(reportDataState)
  const resetStep = useResetRecoilState(stepState)
  const router = useRouter()
  const firsthalf_problems_list = localStorage.getItem(
    'preloaded_firsthalf_problems'
  )
  const [isSubmitted, setIsSubmitted] = useState(false)

  const options_orders = generate_orders([0, 2, 4, 5])

  const handleStep = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
    setIsSubmitted(false)
    if (step === 10) {
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
        {step}단계 / {PROBLEM_LENGTH / 2}
      </h1>

      <form onSubmit={handleStep}>
        {firsthalf_problems_list && (
          <h3>{JSON.parse(firsthalf_problems_list)[step - 1][0][0]}</h3>
        )}

        {!isSubmitted &&
          firsthalf_problems_list &&
          options_orders.map((_number_to_add) => (
            <span key={_number_to_add}>
              <input type="radio" name="options" defaultChecked={isSubmitted} />
              {JSON.parse(firsthalf_problems_list)[step - 1][0][1] +
                _number_to_add}
            </span>
          ))}

        <button>
          {step === PROBLEM_LENGTH / 2 ? '시험 종료' : '다음 문제'}
        </button>
      </form>
    </>
  )
}
