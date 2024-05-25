"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@/components/ui/button';
import { UserCheck2Icon } from 'lucide-react';

const Signup = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>

      <Formik
        initialValues={{ email: '', password: '', username: '' }}
        validate={values => {
          const errors = { email: '', password: '', username: '' };
          // if (!values.email) {
          !values.email ? errors.email = 'Required' : !values.password ? errors.password = 'Required' : !values.username ? errors.username = 'Required' : '';

          // } 
          if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="bg-sky-700 flex flex-col justify-evenly font-poppins p-4 h-[85vh] rounded-md w-2/3 dark:bg-slate-800">
            <h2 className='uppercase leading-4 tracking-wide text-6xl font-semibold text-white mb-5 px-4'>Running Log</h2>
            <div className='mt-9'>
              <div className='relative w-full h-44 flex gap-2 items-end text-white'>

                <div className='flex flex-col gap-3 px-4'>
                  <label className='text-white ml-2 text-xl font-medium' htmlFor="userphoto">User Photo</label>
                  <Field className='w-44 h-44 rounded-full bg-white' type="file" name="userphoto" />
                </div>

                <p className='text-lg w-1/3 font-adlam'>Please select a user photo or default will be provided</p>
              </div>

              <ErrorMessage className="font-merriweather text-red-600 font-semibold" name="userphoto" component="div" />
            </div>
            <div className='flex flex-col gap-3 px-4'>
              <label className='text-white' htmlFor="username">Username</label>
              <Field className="p-2 rounded-md" type="text" name="username" />
              <ErrorMessage className="font-merriweather text-red-600 font-semibold" name="username" component="div" />
            </div>
            <div className='flex flex-col gap-3 px-4'>
              <label className='text-white' htmlFor="email">Email Address</label>
              <Field className="p-2 rounded-md" type="email" name="email" />
              <ErrorMessage className="font-merriweather text-red-600 font-semibold" name="email" component="div" />
            </div>
            <div className='flex flex-col gap-3 px-4'>
              <label className='text-white' htmlFor="password">Password</label>
              <Field className="p-2 rounded-md" type="password" name="password" />
              <ErrorMessage className="font-merriweather text-red-600 font-semibold" name="password" component="div" />
            </div>

            <Button className='w-1/3 mx-auto hover:bg-slate-600' type='submit' disabled={isSubmitting} variant={'default'} size={'lg'}> <UserCheck2Icon className='mr-2 h-4 w-4' /> Submit</Button>
          </Form>
        )}
      </Formik>

    </div>
  )
}

export default Signup