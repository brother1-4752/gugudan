import { useRecoilState, useRecoilValue } from 'recoil'
import { timeState } from '@/recoil/timer/atom'
import { stepState } from '@/recoil/step/atom'
import { useCallback, useEffect } from 'react'
import useInterval from '@/hooks/useInterval'

export default function Timer() {
  const [time, setTime] = useRecoilState(timeState)
  const step = useRecoilValue(stepState)

  // const startTimer = useCallback(() => {
  //   let timer = useInterval(() => {
  //     setTime((prev) => prev + 0.05)
  //   }, 10)

  //   if (step === 20) {
  //     clearInterval(timer)
  //   }
  // }, [])

  // useEffect(() => {
  //   startTimer()
  // }, [startTimer])

  useInterval(() => {
    setTime((prev) => prev + 0.005)
  }, 10)

  const refinedTime = time.toFixed(2)

  return <div>{refinedTime}</div>
}
