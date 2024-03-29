'use client';

import Image from 'next/image';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { BUTTON_SUCCESS_TIMEOUT_MS } from '@/constants/forms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '@/components/shared/button';
import { BUTTON_STATES } from '@/components/shared/button/button';

import bg from '@/svgs/pages/home/subscribe/bg.svg';

interface SubscribeProps {
  tagline: string;
  title: string;
  text: string;
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email')
    .required('Email is a required field'),
});

function Subscribe({ tagline, title, text }: SubscribeProps) {
  const [buttonState, setButtonState] = useState(BUTTON_STATES.DEFAULT);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async () => {
    setButtonState(BUTTON_STATES.LOADING);

    try {
      setTimeout(() => {
        setButtonState(BUTTON_STATES.SUCCESS);
      }, 2000);

      setTimeout(() => {
        setButtonState(BUTTON_STATES.DEFAULT);
        reset();
      }, BUTTON_SUCCESS_TIMEOUT_MS);
    } catch (error) {
      setButtonState(BUTTON_STATES.DEFAULT);
    }
  };

  return (
    <section className="subscribe mt-[196px] overflow-hidden px-safe lg:mt-32">
      <div className="container relative grid max-w-[1388px] grid-cols-12 gap-x-[52px] lg:flex lg:justify-end">
        <Image
          className="pointer-events-none absolute left-8 top-0 -z-10 lg:left-16 lg:h-[342px] lg:w-[1060px]"
          width={1324}
          height={431}
          src={bg}
          alt=""
        />
        <div className="col-span-6 col-start-5 pb-[126px] pt-[55px] lg:mr-[90px] lg:max-w-[560px] lg:pb-[69px] lg:pt-[45px]">
          <p className="leading-snug text-primary-red">{tagline}</p>
          <h2 className="mt-5 text-48 font-semibold leading-dense tracking-tight lg:mt-4 lg:text-40">
            {title}
          </h2>
          <p className="mt-4 text-18 font-light text-white/80 lg:text-16">{text}</p>
          <form
            className="relative mt-9 max-w-[496px]"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="remove-autocomplete-styles h-[48px] w-full rounded-full pl-5 pr-48 font-medium text-black shadow-[0px_8px_30px_0px_#FF462B4D] outline-none transition-shadow duration-300 placeholder:text-grey-50 lg:pl-6"
              type="email"
              placeholder="Your favorite email adress"
              {...register('email')}
            />
            <Button
              className="absolute right-0 top-0 !min-w-[178px]"
              theme="red-filled"
              size="lg"
              state={buttonState}
            >
              Subscribe now
            </Button>
            {errors?.email?.message !== '' && (
              <span className="absolute left-0 top-[calc(100%+8px)] text-14 leading-tight tracking-snug text-primary-red">
                {errors?.email?.message}
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
