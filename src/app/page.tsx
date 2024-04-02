import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

import logo from '/public/logo.png'


export default function Home() {

  
  return (
    <div className="flex flex-row w-screen h-screen">
        <div className="p-10 w-1/2">
            <Image 
            src={logo}
            height={500}
            width={500}
            alt="logo"
            />
        </div>
        <div className="w-1/2 flex flex-col items-start justify-center gap-2">
            <h1 className="text-8xl font-black text-black">ShareSurplus</h1>
            <p className="text-lg ml-5">Companies donated products delivered at ease</p>
            <div className="flex flex-col gap-1 w-96 ml-32 mt-10 items-center justify-center">
              <Button className="w-full bg-blue-400"><Link href='/auth/login'>Login</Link></Button>
              <div className="flex flex-row gap-2 items-center justify-center"> 
                <Separator  className="w-48"/>
                <p className="font-sm">or</p>
                <Separator  className="w-48"/>
              </div>
              <Button className="w-full bg-blue-400"><Link href='/auth/register'>Make an Account</Link></Button>
              <p className="text-sm text-muted-foreground">A platform for companies and organization to connect.</p>
            </div>
            
        </div>
    </div>
  );
}
