import { useRouter } from 'next/router'

export default function Report() {
  const router = useRouter()

  const goToHome = () => {
    sessionStorage.removeItem('reportData')

    router.push('/')
  }

  return (
    <div>
      <h1>레포트</h1>
      <button onClick={goToHome}>홈으로 가기</button>
    </div>
  )
}
