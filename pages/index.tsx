import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <h1>Riiid Frontend Engineer 과제</h1>
      <p>구구단</p>

      <button onClick={() => router.push('/main')}>시작하기</button>
    </div>
  )
}
