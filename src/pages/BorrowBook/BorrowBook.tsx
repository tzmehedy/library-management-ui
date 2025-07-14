import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useCreateBorrowMutation } from "@/redux/api/bookApis";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import z from "zod";

const formSchema = z.object({
  quantity: z.coerce
    .number()
    .gt(0, "The number of book copies must be greater than 0"),
  dueDate: z.date(),
});

const BorrowBook = () => {
  const params = useParams();
  const id = params.bookId;
  const navigate = useNavigate()

  const [createBorrow, { isLoading }] = useCreateBorrowMutation();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const borrowInfo = {
      ...values,
      book: id,
    };
    const result = await createBorrow(borrowInfo);
    if(result?.data?.success === true){
        toast.success(result?.data?.message)
        navigate("/books")
    }
    else{
        toast.error("The number of book copies is not available at this moment");
    }


  }

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <LoaderCircle className="text-blue-600 font-bold"></LoaderCircle>
      </div>
    );

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          <span className="underline">Borrow Book</span> 📘
        </h1>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-8">
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl">No Of Copies</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          className="w-[300px]"
                          placeholder="Enter title"
                          {...field}
                          value={field.value as number | undefined}
                        />
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Due Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                " pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date <= new Date()}
                            captionLayout="dropdown"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                // disabled={isLoading}
                className="bg-blue-600 text-white font-bold"
              >
                Borrow Book
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BorrowBook;
