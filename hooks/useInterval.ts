import { stepState } from '@/recoil/step/atom'
import { useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'

interface IUseInterval {
  (callback: () => void, delay: number): void
}

const useInterval: IUseInterval = (callback, delay) => {
  const savedCallback = useRef<(() => void) | null>(null)
  const step = useRecoilValue(stepState)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const executeCallback = () => {
      if (savedCallback.current) {
        savedCallback.current()
      }
    }

    const timerId = setInterval(executeCallback, delay)

    if (step === 10) {
      return clearInterval(timerId)
    }
  }, [])
}

export default useInterval
