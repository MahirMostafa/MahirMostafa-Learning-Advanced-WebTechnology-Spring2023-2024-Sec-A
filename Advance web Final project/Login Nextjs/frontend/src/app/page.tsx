import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
return(
  <div>
      <div className="flex items-center justify-between bg-gray-900 p-4">
          <div className="flex items-center space-x-4">
          <Link href="/">
              <span className="text-orange-400 font-bold text-lg">Online Job Site</span>
          </Link>
          </div>

          <div className="flex items-center space-x-4">
          <Link href="/login">
              <span className="text-white font-semibold cursor-pointer">Login</span>
          </Link>
          <Link href="/signup">
              <span className="text-white font-semibold cursor-pointer">Signup</span>
          </Link>
          </div>
      </div>
      <main>
   <h1>Welcome, Our to Our Online Job Site</h1>
     </main>
  </div>
  );
}