'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
const formSchema = z.object({
  url: z
    .string()
    .min(2)
    .refine((value) => urlRegex.test(value), {
      message: 'Invalid URL format example :- https://www.facebook.com/',
    }),
});

export const UrlForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: '',
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const encodedValue = encodeURIComponent(values.url);
    router.push(`/seo/${encodedValue}`);
  };
  return (
    <Form {...form}>
      <form
        className="flex mt-8 w-full flex-col md:flex-row  gap-4 "
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="https://twitter.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
