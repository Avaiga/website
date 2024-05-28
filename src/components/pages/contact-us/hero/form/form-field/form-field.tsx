import React from 'react';

import ErrorTooltip from '@/components/shared/error-tooltip';

type FormFieldProps = {
  label: string;
  type: string;
  placeholder: string;
  // eslint-disable-next-line
  register: Function;
  fieldName: string;
  errors: { [key: string]: { message?: string } };
  className?: string;
};

function FormField({
  label,
  type,
  placeholder,
  register,
  fieldName,
  errors,
  className,
}: FormFieldProps) {
  const errorMessage = errors[fieldName]?.message;

  const sharedStyles = `remove-autocomplete-styles appearance-none w-full rounded border bg-grey-70/5 px-3 text-15 font-light leading-none tracking-snug text-white transition-colors duration-200 placeholder:text-grey-70 focus:outline-none ${
    errorMessage ? 'border-primary-red' : 'border-grey-20 hover:border-grey-30 focus:border-grey-40'
  }`;

  return (
    <label className={className}>
      <span className="block text-14 font-medium leading-none tracking-snug text-grey-94">
        {label}
      </span>
      <div className="relative mt-2">
        {type !== 'textarea' ? (
          <>
            <input
              className={`${sharedStyles} h-10`}
              type={type}
              placeholder={placeholder}
              {...register(fieldName)}
            />
            <ErrorTooltip message={errorMessage} />
          </>
        ) : (
          <>
            <textarea
              className={`${sharedStyles} block min-h-[171px] py-3 sm:min-h-20`}
              placeholder={placeholder}
              {...register(fieldName)}
            />
            <ErrorTooltip message={errorMessage} />
          </>
        )}
      </div>
    </label>
  );
}

export default FormField;
