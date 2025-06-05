import TaskForgeLogo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import useSignIn from "./use-sign-in";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function SignIn() {
  const {
    control,
    form,
    handleSubmit,
    handleSubmitSignIn,
    isVisible,
    togglePassword,
  } = useSignIn();

  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <TaskForgeLogo />
        <h1 className="text-primary text-2xl font-bold">Task Forge</h1>
      </div>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmitSignIn(handleSubmit)}>
              <div className="flex flex-col gap-4">
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
              </div>
              <Button type="submit" className="w-full mt-6">
                Login
              </Button>
              <div className="flex items-center justify-center gap-2 text-xs mt-2">
                <p>Don't have an account?</p>
                <Link to="/sign-up">
                  <Button
                    variant="link"
                    className="px-0 mx-0 text-xs font-semibold"
                  >
                    Sign Up
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
