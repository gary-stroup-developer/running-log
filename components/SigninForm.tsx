"use client"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@/components/ui/button';
import { UserCheck2Icon } from 'lucide-react';
import { Separator } from '@radix-ui/react-separator';
import Link from 'next/link';

const SigninForm = () => {
    return (
        <section className='flex flex-col justify-center items-center w-full h-screen bg-gradient-to-r from-modernPrimary to-cyan-600'>
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
                    <Form className="flex flex-col justify-evenly font-poppins p-4 h-[85vh] rounded-md w-2/3 dark:bg-slate-800">
                        <h2 className='uppercase leading-4 tracking-wide text-6xl font-semibold text-white mb-5 px-4'>Running Log</h2>


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

                        <Button className='w-1/3 mx-auto text-md font-semibold bg-modernPrimary hover:bg-modernSecondary' type='submit' disabled={isSubmitting} size={'lg'}> <UserCheck2Icon className='mr-2 h-4 w-4' /> Sign In</Button>
                    </Form>
                )}

            </Formik>
            <Separator className="my-4" />
            <Link href={"/sign-up"} className='text-white text-lg p-3 rounded-lg hover:border hover:scale-125'>Not a member? Sign-up here!</Link>
        </section>
    )
}

export default SigninForm