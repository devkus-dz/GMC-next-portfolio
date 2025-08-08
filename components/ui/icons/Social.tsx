import Link from "next/link";

export default function Social({size}:{size:string}) {

  return (
    <div className='flex flex-row gap-8 text-info'>
        <Link href="#"><i className={`bi bi-github hover:text-base-300 text-slate-50 text-${size}`}></i></Link>
        <Link href="#"><i className={`bi bi-twitter-x hover:text-base-300 text-slate-50 text-${size}`}></i></Link>
        <Link href="#"><i className={`bi bi-linkedin hover:text-base-300 text-slate-50 text-${size}`}></i></Link>
    </div>
  )
}
