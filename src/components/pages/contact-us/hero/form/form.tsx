import { useForm } from 'react-hook-form';

import { ROUTE } from '@/constants/routes';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '@/components/shared/button';
import Link from '@/components/shared/link';

// import { emailRegexp, sendBrevoFormData } from '@/lib/forms';

interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  message: string;
  newsletter: boolean;
}

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required('First Name is required')
    .max(50, 'First Name must not exceed 50 characters'),
  lastName: yup
    .string()
    .trim()
    .required('Last Name is required')
    .max(50, 'Last Name must not exceed 50 characters'),
  email: yup.string().trim().required('Email is required').email('Email is invalid'),
  company: yup.string().trim().required('Company is required'),
  jobTitle: yup.string().trim().required('Job title is required'),
  message: yup.string().required('Message is required'),
  newsletter: yup.boolean().required('consent is required to proceed with the application'),
});

function Form() {
  const { register, handleSubmit } = useForm<FormFields>({
    resolver: yupResolver(validationSchema),
  });
  /* eslint-disable */
  const onSubmit = (data: any) => {
    // console.log(data); will change to real logic after implementing a submiting event
  };

  return (
    <form
      className="relative z-10 w-full gap-6 rounded-3xl bg-grey-10 px-8 py-10 lg:px-[28px] md:py-9 sm:px-[18px] sm:pb-[29px] sm:pt-6"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-2 gap-x-5 gap-y-6 lg:gap-x-5 md:gap-y-6 sm:gap-y-5">
        {/* TODO: create universal ui-component for input */}
        <label className="sm:col-span-full">
          <span className="block text-14 font-medium leading-none tracking-snug text-grey-94">
            First Name
          </span>
          <div className="mt-2 items-start">
            <input
              className="remove-autocomplete-styles h-10 w-full rounded border border-grey-30 bg-grey-20 px-3 text-15 font-light leading-none tracking-snug text-grey-70 transition-colors duration-200 placeholder:text-grey-60"
              type="text"
              placeholder="Angel"
              {...register('firstName')}
            />
          </div>
        </label>
        <label className="sm:col-span-full">
          <span className="block text-14 font-medium leading-none tracking-snug text-grey-94">
            Last Name
          </span>
          <div className="mt-2">
            <input
              className="remove-autocomplete-styles h-10 w-full rounded border border-grey-30 bg-grey-20 px-3 text-15 font-light leading-none tracking-snug text-grey-70 transition-colors duration-200 placeholder:text-grey-60"
              type="text"
              placeholder="Philips"
              {...register('lastName')}
            />
          </div>
        </label>
        <label className="sm:col-span-full">
          <span className="block text-14 font-medium leading-none tracking-snug text-grey-94">
            Work Email
          </span>
          <div className="mt-2">
            <input
              className="remove-autocomplete-styles h-10 w-full rounded border border-grey-30 bg-grey-20 px-3 text-15 font-light leading-none tracking-snug text-grey-70 transition-colors duration-200 placeholder:text-grey-60"
              type="email"
              placeholder="name@company.com"
              {...register('email')}
            />
          </div>
        </label>
        <label className="sm:col-span-full">
          <span className="block text-14 font-medium leading-none tracking-snug text-grey-94">
            Company
          </span>
          <div className="mt-2">
            <input
              className="remove-autocomplete-styles h-10 w-full rounded border border-grey-30 bg-grey-20 px-3 text-15 font-light leading-none tracking-snug text-grey-70 transition-colors duration-200 placeholder:text-grey-60"
              type="text"
              placeholder="Company"
              {...register('company')}
            />
          </div>
        </label>
        <label className="col-span-full">
          <span className="block text-14 font-medium leading-none tracking-snug text-grey-94">
            Job Title
          </span>
          <div className="mt-2">
            <input
              className="remove-autocomplete-styles h-10 w-full rounded border border-grey-30 bg-grey-20 px-3 text-15 font-light leading-none tracking-snug text-grey-70 transition-colors duration-200 placeholder:text-grey-60"
              type="text"
              placeholder="CEO"
              {...register('jobTitle')}
            />
          </div>
        </label>
        <label className="col-span-full">
          <span className="block text-14 font-medium leading-none tracking-snug text-grey-94 ">
            Message
          </span>
          <div className="mt-2">
            <textarea
              className="remove-autocomplete-styles min-h-[171px] w-full rounded border border-grey-30 bg-grey-20 px-3 py-3 text-15 font-light leading-none tracking-snug text-grey-70 transition-colors duration-200 placeholder:text-grey-60 sm:min-h-[80px]"
              placeholder="Type your query"
              {...register('message')}
            ></textarea>
          </div>
        </label>
      </div>
      <label className="mt-4 flex cursor-pointer items-center gap-x-3 sm:mt-2">
        <div className="relative flex">
          <input
            className="remove-autocomplete-styles relative h-6 w-6 items-center rounded border border-grey-30 bg-grey-20 transition-colors duration-200 hover:border-grey-50 md:h-[18px] md:w-[18px] "
            type="checkbox"
            placeholder=""
            {...register('newsletter')}
          />
        </div>
        <span className="block text-15 font-light leading-snug tracking-snug text-grey-70 sm:text-14">
          I agree to receive further communications from taipy.io
        </span>
      </label>
      <div className="mt-5 flex items-center justify-between sm:mt-4 sm:flex-col-reverse">
        <p className="max-w-[288px] text-15 font-light leading-snug tracking-snug text-grey-70 sm:mt-3.5 sm:text-center sm:text-14">
          By submitting this, I confirm that I have read and understood the&nbsp;
          <Link className="font-medium text-secondary-blue " href={ROUTE.PRIVACY}>
            Privacy Policy.
          </Link>
        </p>
        <Button
          className="w-[256px] lg:w-[184px] md:w-[256px] sm:w-[284px]"
          size="lg"
          theme="red-filled"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default Form;
