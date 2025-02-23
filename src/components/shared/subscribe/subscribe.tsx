'use client';

import Image from 'next/image';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { BUTTON_SUCCESS_TIMEOUT_MS, NEWSLETTER_LIST_ID, STATE } from '@/constants/forms';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import * as yup from 'yup';

import Button from '@/components/shared/button';

import { ClassName } from '@/types/classname';

import { emailRegexp, sendBrevoFormData } from '@/lib/forms';

import SendIcon from '@/svgs/icons/send.inline.svg';
import bg from '@/svgs/pages/home/subscribe/bg.svg';

interface SubscribeProps extends ClassName {
  tagline: string;
  title: string;
  text: string;
}

interface FormFields {
  email: string;
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .matches(emailRegexp, { message: 'Please enter a valid email' })
    .required('Email is a required field'),
});

function Subscribe({
  tagline,
  title,
  text,
  className = 'mt-[196px] lg:mt-[124px] md:mt-[92px]',
}: SubscribeProps) {
  const [formState, setFormState] = useState<STATE>(STATE.DEFAULT);
  const [serverError, setServerError] = useState<null | string>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({ resolver: yupResolver(validationSchema) });

  const handleError = (error: string) => {
    setFormState(STATE.ERROR);
    setServerError(error);

    setTimeout(() => {
      setServerError(null);
    }, BUTTON_SUCCESS_TIMEOUT_MS);

    setTimeout(() => {
      setFormState(STATE.DEFAULT);
    }, BUTTON_SUCCESS_TIMEOUT_MS);
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setFormState(STATE.LOADING);

    try {
      const response = await sendBrevoFormData({ listId: NEWSLETTER_LIST_ID, email: data.email });

      if (response.status === 'error') {
        handleError(response?.message);

        return;
      }

      setFormState(STATE.SUCCESS);
      reset();

      setTimeout(() => {
        setFormState(STATE.DEFAULT);
      }, BUTTON_SUCCESS_TIMEOUT_MS);
    } catch (err) {
      handleError('Something went wrong. Please reload the page and try again.');
    }
  };

  return (
    <section className={clsx('subscribe overflow-hidden px-safe', className)}>
      <div className="container relative grid max-w-[1388px] grid-cols-12 gap-x-[52px] lg:flex lg:justify-end sm:justify-center">
        <Image
          className="pointer-events-none absolute left-8 top-0 -z-10 lg:left-16 lg:h-full lg:w-auto lg:max-w-none md:left-[-88px] sm:left-[-70px]"
          width={1324}
          height={431}
          src={bg}
          alt=""
        />
        <div className="col-span-6 col-start-5 pb-[126px] pt-[55px] lg:mr-[90px] lg:max-w-[560px] lg:pb-[69px] lg:pt-[45px] md:mr-12 md:max-w-[496px] sm:mr-0">
          <span className="leading-snug text-primary-red md:text-14">{tagline}</span>
          <h2
            id="subscribe-to-newsletter"
            className="mt-5 text-48 font-semibold leading-dense tracking-tight lg:mt-4 lg:text-40 md:mt-4 md:text-36 sm:text-28"
          >
            {title}
          </h2>
          <p className="mt-4 text-18 font-light text-white/80 lg:text-16 md:text-14">{text}</p>
          <form
            className="relative mt-9 max-w-[496px] md:max-w-[472px] sm:mt-7 sm:max-w-full"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="remove-autocomplete-styles h-12 w-full rounded-full pl-5 pr-48 font-medium text-black shadow-[0px_8px_30px_0px_#FF462B4D] outline-none transition-shadow duration-300 placeholder:text-grey-50 lg:pl-6 md:h-11 md:pl-5 md:text-16 sm:pr-14"
              type="email"
              placeholder="Your email address"
              {...register('email')}
            />
            <Button
              className="absolute right-0 top-0 !min-w-[178px] md:!min-w-[164px] sm:!min-w-11 sm:px-0"
              theme="red-filled"
              size="lg"
              state={formState}
              aria-label="Subscribe"
            >
              <span className="sm:hidden">Subscribe now</span>
              <SendIcon className="hidden h-[18px] w-5 fill-white sm:ml-0.5 sm:block" />
            </Button>
            {errors?.email?.message !== '' && (
              <span className="absolute left-0 top-[calc(100%+8px)] text-14 leading-tight tracking-snug text-primary-red">
                {errors?.email?.message}
              </span>
            )}
            {serverError !== null && (
              <span className="absolute left-0 top-[calc(100%+8px)] text-14 leading-tight tracking-snug text-primary-red">
                {serverError}
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
