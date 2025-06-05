import TaskForgeLogo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";
import useSignUp from "./use-sign-up";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Combobox } from "@/components/ui/combobox";
import { cn } from "@/lib/utils";

const departements = [
  {
    value: "IT",
    label: "IT",
  },
  {
    value: "HR",
    label: "HR",
  },
  {
    value: "GA",
    label: "GA",
  },
  {
    value: "Finance",
    label: "Finance",
  },
  {
    value: "Marketing",
    label: "Marketing",
  },
];

export default function SignUp() {
  const {
    control,
    errors,
    form,
    handleSubmit,
    handleSubmitSignUp,
    isVisible,
    togglePassword,
  } = useSignUp();

  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <TaskForgeLogo />
        <h1 className="text-primary text-2xl font-bold">Task Forge</h1>
      </div>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create an Account</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmitSignUp(handleSubmit)}>
              <div className="flex flex-col gap-4">
                <FormField
                  control={control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fullname</FormLabel>
                      <FormControl>
                        <Input
                          type="fullname"
                          placeholder="John Doe"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="departement"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Departement</FormLabel>
                      <FormControl>
                        <Combobox
                          values={departements}
                          dataLabel="departement"
                          className={cn({
                            "border-destructive": errors.password,
                          })}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="mail@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="flex w-full relative items-center gap-1">
                          <Input
                            type={isVisible ? "text" : "password"}
                            placeholder="********"
                            className={cn({
                              "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20":
                                errors.password,
                            })}
                            {...field}
                          />
                          <Button
                            size="icon"
                            type="button"
                            className="absolute right-1 top-[18px] hover:bg-transparent -translate-y-1/2"
                            onClick={() => togglePassword()}
                            variant="ghost"
                          >
                            {isVisible ? <EyeIcon /> : <EyeOffIcon />}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          type={isVisible ? "text" : "password"}
                          placeholder="********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full mt-6">
                Create Account
              </Button>
              <div className="flex items-center justify-center gap-2 text-xs mt-2">
                <p>Already have an account?</p>
                <Link to="/sign-in">
                  <Button
                    variant="link"
                    className="px-0 mx-0 text-xs font-semibold"
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
