import * as yup from "yup";

import { Box, Button } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

import InputField from "../../../components/commons/input/input-field";
import { SignInPayload } from "../../../models";
import { yupResolver } from "@hookform/resolvers/yup";

export interface ISignInFormProps {
  onSubmit: (data: SignInPayload) => void;
}

export function SignInForm({ onSubmit }: ISignInFormProps) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter email")
      .min(4, "Email is required to have at least 4 characters"),

    password: yup
      .string()
      .required("Please enter password")
      .min(6, "Password is required to have at least 6 characters"),
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<SignInPayload>({
    defaultValues: {
      email: "",
      password: "",
    },

    resolver: yupResolver(schema),
  });

  const signin: SubmitHandler<SignInPayload> = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(signin)}>
      <InputField
        name="email"
        control={control}
        label="Email"
        type="email"
        placeholder="Enter your email"
      />

      <InputField
        name="email"
        control={control}
        label="Password"
        type="password"
        placeholder="Enter your password"
      />

      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <Button
          isLoading={isSubmitting}
          loadingText="Submitting"
          colorScheme="teal"
        >
          Sign In
        </Button>
      </Box>
    </form>
  );
}
