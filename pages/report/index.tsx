import { useRouter } from 'next/router'

export default function Report() {
  const router = useRouter()

  return (
    <div>
      <h1>레포트</h1>
      <button onClick={() => router.push('/')}>홈으로 가기</button>
    </div>
  )
}
