import { generate_problem_orders } from '@/lib/utils/problems/generateOrders'
import { generate_problem } from '@/lib/utils/problems/generateProblem'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  const dans_orders = generate_problem_orders()
  const preloaded_firsthalf_problems = dans_orders.map((dan) =>
    generate_problem(dan)
  )
  useEffect(() => {
    localStorage.setItem(
      'preloaded_firsthalf_problems',
      JSON.stringify(preloaded_firsthalf_problems)
    )
    localStorage.setItem('dans_orders', JSON.stringify(dans_orders))
  }, [])

  return (
    <div>
      <h1>Riiid Frontend Engineer 과제</h1>
      <p>구구단</p>
      <button onClick={() => router.push('/main')}>시작하기</button>
    </div>
  )
}
