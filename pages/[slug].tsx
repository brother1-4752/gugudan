import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  const { slug } = router.query;

  return <div>HOME{slug}</div>;
}
