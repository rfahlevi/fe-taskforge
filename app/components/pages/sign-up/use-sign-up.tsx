import { signUpSchema } from "@/services/auth.service";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { set } from "date-fns";

const useSignUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const togglePassword = () => setIsVisible(!isVisible);

  type SignUpFormData = z.infer<typeof signUpSchema>;

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullname: "",
      departement: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    control,
    formState: { errors },
    handleSubmit: handleSubmitSignUp,
  } = form;

  const handleSubmit = (payload: SignUpFormData) => {
    console.log(payload);
  };

  return {
    control,
    errors,
    form,
    handleSubmit,
    handleSubmitSignUp,
    isVisible,
    togglePassword,
  };
};

export default useSignUp;
