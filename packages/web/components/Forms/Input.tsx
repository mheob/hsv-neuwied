import { Field, FieldProps, ErrorMessage as FormikErrorMessage } from 'formik';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export type FormInputType =
  | 'checkbox'
  | 'email'
  | 'number'
  | 'password'
  | 'radio'
  | 'search'
  | 'tel'
  | 'text'
  | 'textarea'
  | 'url';

const InputMain = styled.div`
  width: 100%;
`;

const InputBox = styled.div`
  position: relative;
`;

const inputStyles = css`
  width: 100%;
  padding: 1.5rem 1rem 0.5rem;
  cursor: pointer;

  &:focus {
    outline: none;
    cursor: text;
  }
`;

const Textarea = styled.textarea<{ textareaHeight?: string }>`
  ${inputStyles}

  ${({ textareaHeight }) => textareaHeight && `height: ${textareaHeight};`}
`;

const Input = styled.input`
  ${inputStyles}
`;

const Checkbox = styled.input`
  + span {
    position: relative;
    display: inline-block;
    width: calc(100% - 2rem);
    height: 25px;
    padding-left: 35px;
    font-size: 1rem;
    line-height: 25px;
    cursor: pointer;
    user-select: none;
  }

  + span:before,
  &:not(.filled-in) + span:after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 18px;
    height: 18px;
    margin-top: 3px;
    border: 2px solid ${({ theme }) => theme.colors.gray.dark};
    border-radius: 1px;
    transition: 0.2s;
    content: '';
  }

  &:disabled + span:before {
    border-right: 2px solid ${({ theme }) => theme.colors.form.input.disabled};
    border-bottom: 2px solid ${({ theme }) => theme.colors.form.input.disabled};
  }

  &:not(.filled-in) + span:after {
    border: 0;
    transform: scale(0);
  }

  &:checked {
    + span:before {
      top: -4px;
      left: -5px;
      width: 12px;
      height: 22px;
      border-top: 2px solid transparent;
      border-right: 2px solid ${({ theme }) => theme.colors.form.input.focus};
      border-bottom: 2px solid ${({ theme }) => theme.colors.form.input.focus};
      border-left: 2px solid transparent;
      transform: rotate(40deg);
      transform-origin: 100% 100%;
      backface-visibility: hidden;
    }
  }

  &:not(:checked):disabled + span:before {
    background-color: ${({ theme }) => theme.colors.form.input.disabled};
    border: none;
  }

  &.tabbed:focus + span:after {
    background-color: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 50%;
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);
    transform: scale(1);
  }

  &:not(:checked),
  &:checked {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
`;

const Label = styled.label<{ isError: boolean }>`
  position: absolute;
  top: 1.5rem;
  left: 1rem;
  display: block;
  color: ${({ isError, theme }) => (isError ? theme.colors.error : theme.colors.brand.base)};
  transform-origin: top left;
  transition: 200ms ease transform;
  pointer-events: none;

  *:focus + &,
  *:not(:placeholder-shown) + & {
    transform: translate(0, -1.5rem) scale(0.75);
    transform-origin: top left;
  }
`;

const CheckBoxLabel = styled.label`
  padding-right: 1rem;
  padding-left: 1rem;
  cursor: pointer;
`;

const Asterisk = styled.i<{ isError: boolean }>`
  &::after {
    color: ${({ isError, theme }) => (isError ? theme.colors.error : theme.colors.brand.base)};
    content: '*';
  }
`;

const Border = styled.div<{ isError: boolean }>`
  position: relative;
  border-bottom: 1px solid
    ${({ isError, theme }) => (isError ? theme.colors.error : theme.colors.gray.base)};

  &::after {
    position: absolute;
    right: 0;
    bottom: -0.05rem;
    left: 0;
    border-bottom: 2px solid
      ${({ isError, theme }) => (isError ? theme.colors.error : theme.colors.brand.base)};
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    content: '';
    pointer-events: none;
  }

  *:focus ~ &::after {
    transform: scaleX(1);
  }
`;

const ErrorMessage = styled.div`
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.8em;
`;

type Props = {
  children: ReactNode;
  className?: string;
  name: string;
  isRequired?: boolean;
  textareaHeight?: string;
  type?: FormInputType;
};

export default function FormInput({
  children,
  className,
  name,
  isRequired = true,
  textareaHeight,
  type = 'text',
}: Props) {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const isError = !!(meta.touched && meta.error);

        return (
          <InputMain className={className}>
            {type === 'textarea' ? (
              <InputBox>
                <Textarea
                  textareaHeight={textareaHeight}
                  required={isRequired}
                  placeholder=" "
                  aria-label={children?.toString()}
                  {...field}
                />
                <Label isError={isError}>
                  {children} {isRequired && <Asterisk isError={isError} />}
                </Label>
                <Border isError={isError} />
                {isError && (
                  <ErrorMessage>
                    <FormikErrorMessage name={name} />
                  </ErrorMessage>
                )}
              </InputBox>
            ) : type === 'checkbox' ? (
              <CheckBoxLabel>
                <Checkbox type="checkbox" required={isRequired} {...field} />
                <span>
                  {children} {isRequired && <Asterisk isError={isError} />}
                </span>
                {isError && (
                  <ErrorMessage>
                    <FormikErrorMessage name={name} />
                  </ErrorMessage>
                )}
              </CheckBoxLabel>
            ) : (
              <InputBox>
                <Input
                  type={type}
                  required={isRequired}
                  placeholder=" "
                  aria-label={children?.toString()}
                  {...field}
                />
                <Label isError={isError}>
                  {children} {isRequired && <Asterisk isError={isError} />}
                </Label>
                <Border isError={isError} />
                {isError && (
                  <ErrorMessage>
                    <FormikErrorMessage name={name} />
                  </ErrorMessage>
                )}
              </InputBox>
            )}
          </InputMain>
        );
      }}
    </Field>
  );
}
