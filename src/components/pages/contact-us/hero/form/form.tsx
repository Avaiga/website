'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { BUTTON_SUCCESS_TIMEOUT_MS, FORM_REQUEST_LIST_ID, STATE } from '@/constants/forms';
import { ROUTES } from '@/constants/routes';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '@/components/shared/button';
import ErrorTooltip from '@/components/shared/error-tooltip';
import Link from '@/components/shared/link';

import { emailRegexp, sendBrevoFullFormData } from '@/lib/forms';

import FormField from './form-field';

interface FormProps {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  message: string;
  checkAgree: boolean;
}

const fieldsData = [
  {
    className: 'sm:col-span-full',
    label: 'First Name *',
    type: 'text',
    placeholder: 'Angel',
    fieldName: 'firstName',
  },
  {
    className: 'sm:col-span-full',
    label: 'Last Name *',
    type: 'text',
    placeholder: 'Philips',
    fieldName: 'lastName',
  },
  {
    className: 'sm:col-span-full',
    label: 'Work Email *',
    type: 'email',
    placeholder: 'name@company.com',
    fieldName: 'email',
  },
  {
    className: 'sm:col-span-full',
    label: 'Company *',
    type: 'text',
    placeholder: 'Company',
    fieldName: 'company',
  },
  {
    className: 'col-span-full',
    label: 'Job Title *',
    type: 'text',
    placeholder: 'CEO',
    fieldName: 'jobTitle',
  },
  {
    className: 'col-span-full',
    label: 'Message *',
    type: 'textarea',
    placeholder: 'Type your query',
    fieldName: 'message',
  },
];

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
  email: yup
    .string()
    .trim()
    .required('Email is required')
    .matches(emailRegexp, { message: 'Enter a valid email' }),
  company: yup.string().trim().required('Company is required'),
  jobTitle: yup.string().trim().required('Job title is required'),
  message: yup.string().required('Message is required'),
  checkAgree: yup.boolean().oneOf([true], 'Agreement is required').required(),
});

function Form() {
  const [formState, setFormState] = useState<STATE>(STATE.DEFAULT);
  const [serverError, setServerError] = useState<null | string>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormProps>({ resolver: yupResolver(validationSchema) });

  const onSubmit: SubmitHandler<FormProps> = async (data) => {
    setFormState(STATE.LOADING);

    try {
      const response = await sendBrevoFullFormData({
        listId: FORM_REQUEST_LIST_ID,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        company: data.company,
        jobTitle: data.jobTitle,
        message: data.message,
        checkAgree: data.checkAgree,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          error.message ?? 'Something went wrong. Please reload the page and try again.',
        );
      }
      setFormState(STATE.SUCCESS);
      reset();

      setTimeout(() => {
        setFormState(STATE.DEFAULT);
      }, BUTTON_SUCCESS_TIMEOUT_MS);
    } catch (err) {
      setFormState(STATE.ERROR);
      if (err instanceof Error) {
        setServerError(err?.message ?? err);
        setTimeout(() => {
          setServerError(null);
        }, BUTTON_SUCCESS_TIMEOUT_MS);
      }
      setTimeout(() => {
        setFormState(STATE.DEFAULT);
      }, BUTTON_SUCCESS_TIMEOUT_MS);
    }
  };

  return (
    <form
      className="relative z-10 w-full gap-6 rounded-3xl bg-grey-10 px-8 py-10 lg:px-7 md:py-9 sm:px-[18px] sm:pb-[29px] sm:pt-6"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-2 gap-x-5 gap-y-6 lg:gap-x-5 md:gap-y-6 sm:gap-y-5">
        {fieldsData.map(({ label, type, placeholder, fieldName, className }) => (
          <FormField
            key={fieldName}
            label={label}
            type={type}
            placeholder={placeholder}
            register={register}
            fieldName={fieldName}
            errors={errors}
            className={className}
          />
        ))}
      </div>
      <label className="mt-4 flex cursor-pointer items-center gap-x-3 sm:mt-3.5">
        <div className="relative flex">
          <input
            className={`remove-autocomplete-styles relative h-6 w-6 appearance-none rounded 
            border  bg-grey-70/5 transition-colors duration-200 before:absolute 
            before:inset-0 
            before:z-10 before:bg-center before:bg-no-repeat checked:border-grey-20 checked:before:bg-[url('/images/svgs/check-icon.svg')] 
            checked:before:bg-[length:16px_16px] focus:outline-none md:h-[18px] md:w-[18px] md:checked:before:bg-[length:12px_12px] ${
              errors?.checkAgree?.message
                ? 'border-primary-red'
                : 'border-grey-20 hover:border-grey-30 '
            }`}
            type="checkbox"
            placeholder=""
            {...register('checkAgree')}
          />
          <ErrorTooltip message={errors?.checkAgree?.message} />
        </div>
        <span className="block text-15 font-light leading-snug tracking-snug text-grey-70 sm:text-14 ">
          I agree to receive further communications from taipy.io *
        </span>
      </label>
      <div className="relative mt-5 flex items-center justify-between lg:mt-6 sm:mt-4 sm:flex-col-reverse">
        <p className="max-w-72 text-15 font-light leading-snug tracking-snug text-grey-70 sm:mt-3.5 sm:text-center sm:text-14">
          By submitting this, I confirm that I have read and understood the&nbsp;
          <Link className="font-medium text-secondary-blue" href={ROUTES.PRIVACY}>
            Privacy Policy.
          </Link>
        </p>
        <Button
          className="w-64 shadow-btn lg:w-[184px] md:w-64 sm:w-72 2xs:w-full"
          size="lg"
          theme="red-filled"
          state={formState}
        >
          Submit
        </Button>
        {serverError !== null && (
          <span className="absolute right-0 top-[calc(100%+8px)] text-14 leading-tight tracking-snug text-primary-red">
            {serverError}
          </span>
        )}
      </div>
    </form>
  );
}

export default Form;
