import { Field, Form, Formik, FormikProps } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

import Button from '../../Forms/Button';

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

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
`;

const ButtonStyled = styled(Button)`
  width: 100%;
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
      {({ errors, isValid, touched }: FormikProps<FormValues>) => (
        <Form>
          <Field name="name">
            {errors.name && touched.name ? <ErrorMessage>{errors.name}</ErrorMessage> : null}
          </Field>

          <Field name="email" type="email">
            {errors.email && touched.email ? <ErrorMessage>{errors.email}</ErrorMessage> : null}
          </Field>

          <Field name="message" as="textarea">
            {errors.message && touched.message ? (
              <ErrorMessage>{errors.message}</ErrorMessage>
            ) : null}
          </Field>

          <label>
            <Field name="privacy" type="checkbox">
              {errors.privacy && touched.privacy ? (
                <ErrorMessage>{errors.privacy}</ErrorMessage>
              ) : null}
            </Field>
            {/* // TODO: Add the Link to the privacy page */}
            Die Informationen zum <a>Datenschutz</a> sind mir bekannt und habe ich verstanden.
          </label>

          <ButtonStyled type="submit" disabled={!isValid} mt="8">
            Absenden
          </ButtonStyled>
        </Form>
      )}
    </Formik>
  );
}
