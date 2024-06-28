"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "@/schemas/userSchema"
import { useForm } from "react-hook-form"
import { z } from "zod"


import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "../input"
import { Button } from "../button"


export const MyForm = () => {
    
 // 1. Define your form.
 const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
   // createLorem(values)
  }
    return (
        
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8 ">
          <FormField 
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>MVC</FormLabel>
                <FormControl>
                  <Input className=" bg-white w-[500px]" placeholder="Enter Input here" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="bg-black border hover:bg-gray-400 border-white text-white hover:text-black" type="submit">Add Task Here</Button>
        </form>
      </Form>
  )
}