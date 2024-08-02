import { AuthLayout } from "../../../components/layouts/auth-layout/auth-layout";
import { SignInForm } from "../components/sign-in-form";
import { SignInPayload } from "../../../models";
import { signin } from "../auth-thunk";
import { useAppDispatch } from "../../../app/store";

export default function SignIn() {
  const dispatch = useAppDispatch();

  const onSubmit = (data: SignInPayload) => {
    dispatch(signin(data));
  };

  return (
    <AuthLayout
      title="Welcome to Bolero"
      subtitle="Sign in by entering information below"
    >
      <SignInForm onSubmit={onSubmit} />
    </AuthLayout>
  );
}
