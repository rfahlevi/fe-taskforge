import { signInSchema } from "@/services/auth.service";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { set } from "date-fns";

const useSignIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const togglePassword = () => setIsVisible(!isVisible);

  type SignInFormData = z.infer<typeof signInSchema>;

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { control, handleSubmit: handleSubmitSignIn } = form;

  const handleSubmit = (payload: SignInFormData) => {
    console.log(payload);
  };

  return {
    control,
    form,
    handleSubmit,
    handleSubmitSignIn,
    isVisible,
    togglePassword,
  };
};

export default useSignIn;
