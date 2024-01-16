
import Header from '@/app/components/homePage/header';
import SignInForm from '@/app/components/loginPage/sign-in-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Login"
}
export default function SignInPage() {
    return (
        <div>

            <Header
                title="Welcome to MasterMinds!"
                isHome={false}
            />
            <SignInForm />
        </div>
    )
}
