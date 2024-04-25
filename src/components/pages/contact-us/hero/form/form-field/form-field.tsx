import React from 'react';

type FormFieldProps = {
  label: string;
  type: 'text' | 'email' | 'textarea';
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
  const isError = errors[fieldName]?.message;

  const sharedStyles = `remove-autocomplete-styles appearance-none focus:outline-none w-full rounded border bg-grey-70/5 px-3 text-15 font-light leading-none tracking-snug text-white transition-colors duration-200 placeholder:text-grey-70 ${
    isError ? 'border-primary-red' : 'border-grey-20 hover:border-grey-30 focus:border-grey-40'
  }`;

  return (
    <label className={className}>
      <span className="block text-14 font-medium leading-none tracking-snug text-grey-94">
        {label}
      </span>
      <div className="relative mt-2">
        {type !== 'textarea' ? (
          <input
            className={`${sharedStyles} h-10`}
            type={type}
            placeholder={placeholder}
            {...register(fieldName)}
          />
        ) : (
          <textarea
            className={`${sharedStyles} block min-h-[171px] py-3 sm:min-h-20`}
            placeholder={placeholder}
            {...register(fieldName)}
          />
        )}
        {isError && (
          <span className="absolute left-0 top-[calc(100%+2px)] whitespace-nowrap text-12 leading-tight tracking-snug text-primary-red">
            {errors[fieldName]?.message}
          </span>
        )}
      </div>
    </label>
  );
}

export default FormField;
