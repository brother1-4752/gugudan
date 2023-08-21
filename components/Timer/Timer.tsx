import { useRecoilState, useRecoilValue } from 'recoil'
import { timeState } from '@/recoil/timer/atom'
import { stepState } from '@/recoil/step/atom'
import { useCallback, useEffect } from 'react'

export default function Timer() {
  const [time, setTime] = useRecoilState(timeState)
  const step = useRecoilValue(stepState)

  const startTimer = useCallback(() => {
    let timer = setInterval(() => {
      setTime((prev) => prev + 0.005)
    }, 10)

    if (step === 20) {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    startTimer()
  }, [startTimer])

  const refinedTime = time.toFixed(2)

  return <div>{refinedTime}</div>
}
