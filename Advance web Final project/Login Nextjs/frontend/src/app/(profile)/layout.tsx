import { IsAdmin } from "@/components/Auth/AuthCheck";
import { LogoutComponent } from "@/components/Auth/Logout";
import { GetCookieObject } from "@/components/Cookies/CookiesLocal";
import Link from "next/link";

export default function ProfileLayout({children}:{children:any}){

    if(IsAdmin()){ 
        return(
            <div>          
                <AdminProfile/>
                {children}
            </div>
          );
      }else if (IsLoggedIn()){
        return(
            <div>
                <UserProfile/>
                {children}
            </div>
          );
      }else{
        return(
            <div>
                <div className="flex items-center justify-between bg-gray-900 p-4">
                    <div className="flex items-center space-x-4">
                    <Link href="/profile">
                        <span className="text-orange-400 font-bold text-lg">Online Job Site</span>
                    </Link>
                    </div>
              
                    <div className="flex items-center space-x-4">
                    <Link href="/login">
                        <span className="text-sky-400 cursor-pointer">Login</span>
                    </Link>
                    <Link href="/signup">
                        <span className="text-sky-400 cursor-pointer">Signup</span>
                    </Link>
                    <Link href="/profile">
                        <span className="text-sky-400 cursor-pointer">Profile</span>
                    </Link>
                    </div>
                </div>
                {children}
            </div>
        );
      }
}

export const AdminProfile = () => {
    return(
        <div className="flex items-center justify-between bg-gray-900 p-4">
            <div className="flex items-center space-x-4">
            <Link href="/profile">
                <span className="text-orange-400 font-bold text-lg">Online Job Site</span>
            </Link>
            </div>
  
            <div className="flex items-center space-x-4">
            <Link href="">
                <span className="text-white font-semibold cursor-pointer">Salary</span>
            </Link>
            <Link href="">
                <span className="text-white font-semibold cursor-pointer">User</span>
            </Link>
            <Link href="">
                <span className="text-white font-semibold cursor-pointer">Management</span>
            </Link>
            <LogoutComponent/>
            </div>
        </div>
  );
  }

  export const UserProfile = () => {
  
    return(
        <div className="flex items-center justify-between bg-gray-900 p-4">
            <div className="flex items-center space-x-4">
            <Link href="/profile">
                <span className="text-orange-400 font-bold text-lg">Online Job Site</span>
            </Link>
            </div>
  
            <div className="flex items-center space-x-4">
            <Link href="">
                <span className="text-white font-semibold cursor-pointer">Jobs</span>
            </Link>
            <Link href="">
                <span className="text-white font-semibold cursor-pointer">Payment</span>
            </Link>
            <Link href="">
                <span className="text-white font-semibold cursor-pointer">History</span>
            </Link>
            <LogoutComponent/>
            </div>
        </div>
  );
  }

function IsLoggedIn() {
    const user = GetCookieObject('user');
    return user !== null;
}