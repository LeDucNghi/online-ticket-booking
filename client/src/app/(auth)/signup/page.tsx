import * as React from 'react';

import AuthLayout from '@/components/Layouts/auth/auth-layout';
import SignUpForm from '../components/signup-form';

export interface ISignupPageProps {
}

export default function SignupPage(props: ISignupPageProps) {
    return (
        <AuthLayout form='signup' title='welcome' subtitle='to bolero'>
            <SignUpForm />
        </AuthLayout>
    );
}
