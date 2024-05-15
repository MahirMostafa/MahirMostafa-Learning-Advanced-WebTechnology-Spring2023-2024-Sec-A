import { redirect } from "next/navigation";

export default function Home() {
  redirect('/profile');
  return (
    <main>
      <h1>Welcome, Our to Our Online Job Site</h1>
    </main>
  )
}
