import { CardContent, CardHeader } from '@mui/material';

import AuthLayout from '@/components/Layouts/auth/auth-layout';
import { SignInForm } from '../components/signin-form';

export interface ISignInProps {

}

export default function SignIn(props: ISignInProps) {

    return (
        <AuthLayout form='signin' title='hello' subtitle='welcome back' >
            <SignInForm />
        </AuthLayout>
    );
}
