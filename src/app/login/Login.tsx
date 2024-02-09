'use client'
import { useSession, signIn, signOut } from "next-auth/react"
export default function LoginPage() {
    const { data: session } = useSession()
    // const decoded = await decode({
    //     token: sessionToken!,
    //     secret: process.env.JWT_SECRET!,
    // });
    // user exists 
    console.log(session);

    if (session) {
        return (
            <>
                <button type="button" onClick={() => signOut()}>Sign out</button>
                {/* <UserCard user={session?.user} /> */}
            </>
        )
    } else {
        return (
            <button type="button" onClick={() => signIn()}>Sign in</button>
        )
    }

}
