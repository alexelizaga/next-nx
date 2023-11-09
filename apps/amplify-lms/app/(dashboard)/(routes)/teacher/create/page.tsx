'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Button,
  Flex,
  Input,
  Label,
  useAuthenticator
} from '@aws-amplify/ui-react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';

import { API } from 'aws-amplify';
import { createCourse } from '@/amplify-lms/graphql/mutations';

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required'
  })
});

const CreatePage = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ''
    }
  });

  const { register } = form;
  const { isSubmitting, isValid, errors } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const newCourse = await API.graphql({
      query: createCourse,
      variables: {
        input: {
          userId: user.getUsername(),
          ...values
        }
      }
    });

    console.log({ newCourse });

    // try {
    //   const response = await axios.post('/api/courses', {
    //     ...values,
    //     userId: user.getUsername()
    //   });
    //   router.push(`teacher/courses/${response.data.id}`);
    // } catch (error) {
    //   toast.error('Something went wrong');
    // }
  };

  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">Name your course</h1>
        <p className="text-sm text-slate-600">
          What would you like to name your course? Don&apos;t worry you can
          change this later.
        </p>

        <Flex
          as="form"
          direction="column"
          gap={32}
          marginTop={32}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Flex direction="column" gap="small">
            <Label htmlFor="title">Course title</Label>
            <Input
              id="title"
              hasError={!!errors.title}
              disabled={isSubmitting}
              placeholder="e.g. 'Advanced web development'"
              {...register('title')}
            />
            {errors.title?.message && (
              <p className="text-sm text-red-800">{errors.title?.message}</p>
            )}
          </Flex>
          <div className="flex items-center gap-x-2">
            <Link href="/">
              <Button type="button" variation="link">
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Continue
            </Button>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default CreatePage;
