import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SignInForm from "./components/sign-in-form";
import SignUpForm from "./components/sign-up-form";

const Authentication = async () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 p-5">
      <Tabs defaultValue="sign-in">
        <TabsList>
          <TabsTrigger value="sign-in">Entrar</TabsTrigger>
          <TabsTrigger value="sign-up">Criar conta</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <SignInForm />
        </TabsContent>
        <TabsContent value="sign-up">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Authentication;
