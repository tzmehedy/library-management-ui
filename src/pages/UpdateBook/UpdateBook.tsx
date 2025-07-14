import { useGetBookByIdQuery, useUpdateBookMutation } from "@/redux/api/bookApis";
import { LoaderCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";
import { toast } from "react-toastify";


const formSchema = z.object({
  title: z.string().min(1, "The title is required"),
  author: z.string().min(1, "The author name is required"),
  genre: z.string().min(1, "The genre is required"),
  isbn: z.string().min(1, "The isbn number is required"),
  description: z.string().min(1, "The description is required"),
  copies: z.coerce
    .number()
    .gt(0, "The number of book copies must be greater than 0"),
  available: z.boolean().optional(),
});

const UpdateBook = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate()

  const { data, isLoading } = useGetBookByIdQuery(id);
  const [updateBook] = useUpdateBookMutation()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      description: "",
      copies: "",
      available: true,
    },
  });

  useEffect(() => {
    if (data?.data) {
      form.reset({
        title: data.data.title,
        author: data.data.author,
        genre: data.data.genre,
        isbn: data.data.isbn,
        description: data.data.description,
        copies: data.data.copies,
        available: data.data.available,
      });
    }
  }, [data?.data, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
  
    const result = await updateBook({body:values, id})

    if(result?.data?.success === true){
        toast.success(result?.data?.message)
        navigate(`/books/${id}`)
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
        <h1 className="text-3xl underline font-bold">
          Update Your Book Info!!!...
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <div className="my-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1  lg:grid-cols-2 gap-10">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl">Title</FormLabel>
                      <FormControl>
                        <Input
                          className="w-[300px]"
                          placeholder="Enter title"
                          
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="author"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl">Author Name</FormLabel>
                      <FormControl>
                        <Input
                          className="w-[300px]"
                          placeholder="Enter author name"
                          
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="genre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl">Genre</FormLabel>
                      <FormControl>
                        <Input
                          className="w-[300px]"
                          placeholder="Enter the genre of the book"
                         
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="isbn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl">ISBN</FormLabel>
                      <FormControl>
                        <Input
                          className="w-[300px]"
                          placeholder="Enter isbn number"
                          
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl">Description</FormLabel>
                      <FormControl>
                        <Textarea
                          className="w-[300px]"
                          placeholder="Enter a description"
                          
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="copies"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl">No. Of Copies</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          className="w-[300px]"
                          placeholder="Enter number of copies"
                          {...field}
                          value={field.value as number | string | undefined}
                        />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="available"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl">Availability</FormLabel>
                      <FormControl>
                        <Input
                          type="checkbox"
                          className="w-5 h-5"
                          checked={field.value ?? false}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          name={field.name}
                          ref={field.ref}
                        />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 text-white font-bold cursor-pointer"
              >
                Update Book
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
