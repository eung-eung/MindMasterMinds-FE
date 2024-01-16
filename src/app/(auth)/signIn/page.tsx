
import Footer from '@/app/components/homePage/footer';
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
                title="Welcome back!"
                isHome={false}
            />
            <SignInForm />
            <Footer />
        </div>
    )
}
