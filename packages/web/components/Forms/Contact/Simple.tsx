import { Form, Formik, FormikProps } from 'formik';
import Link from 'next/link';
import styled from 'styled-components';
import * as Yup from 'yup';

import Button from '../../Forms/Button';
import FormInput from '../../Forms/Input';

const requiredMessage = 'Diese Angabe ist erforderlich!';

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Gebe bitte deinen Namen an, damit wir dich ansprechen können!')
    .max(50, 'Dein Name scheint zu lang zu sein.')
    .required(requiredMessage),
  email: Yup.string()
    .email('Bitte gebe deine korrekte E-Mail-Adresse an, damit wir antworten können!')
    .required(requiredMessage),
  message: Yup.string()
    .min(50, 'Deine Nachricht muss einen vernünftigen Inhalt haben!')
    .required(requiredMessage),
  privacy: Yup.boolean().required(requiredMessage).oneOf([true], requiredMessage),
});

const Input = styled(FormInput)`
  margin-top: 1.25rem;
  font-size: ${({ theme }) => theme.sizes.font.xl};
`;

const Checkbox = styled(FormInput)`
  margin-top: 1.25rem;
  font-size: ${({ theme }) => theme.sizes.font.lg};
`;

const ButtonStyled = styled(Button)`
  width: 100%;
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.sizes.font.xl};
`;

type FormValues = { name: string; email: string; message: string; privacy: boolean };

export default function Simple() {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '', privacy: false }}
      onSubmit={(values: FormValues, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      validateOnBlur
      validationSchema={ValidationSchema}
    >
      {({ isValid, touched }: FormikProps<FormValues>) => (
        <Form>
          <Input name="name">Name</Input>

          <Input name="email" type="email">
            E-Mail
          </Input>

          <Input name="message" type="textarea" textareaHeight="10rem">
            Nachricht
          </Input>

          <Checkbox name="privacy" type="checkbox">
            {/* TODO: Use a modal for the privacy instructions. */}
            Die Informationen zum{' '}
            <Link href="/privacy" as="/datenschutz">
              <a>Datenschutz</a>
            </Link>{' '}
            sind mir bekannt und habe ich verstanden.
          </Checkbox>

          <ButtonStyled type="submit" disabled={!touched?.name || !isValid} size="small">
            Absenden
          </ButtonStyled>
        </Form>
      )}
    </Formik>
  );
}
