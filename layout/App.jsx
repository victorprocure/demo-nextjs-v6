import Link from "next/link"

export default ({ children }) => {
  return (
    <div>
      <Link href={"/"}><a>Home</a></Link>&nbsp;
      <Link href={"/ping"}><a>Ping</a></Link>&nbsp;

      {children}
    </div>
  )
}
