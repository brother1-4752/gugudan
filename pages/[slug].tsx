import { useRouter } from 'next/router'

export default function Step() {
  const router = useRouter()
  const { slug } = router.query

  return <div>HOME{slug}</div>
}
