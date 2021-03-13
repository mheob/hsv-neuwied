import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { Field, FieldProps, Form, Formik, FormikProps } from 'formik';
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
      {({ isValid }: FormikProps<FormValues>) => (
        <Form>
          <Field name="name">
            {({ field, form }: FieldProps) => (
              <FormControl isInvalid={!!(form.errors.name && form.touched.name)} isRequired>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input {...field} id="name" variant="filled" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="email">
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!(form.errors.email && form.touched.email)}
                isRequired
                mt="8"
              >
                <FormLabel htmlFor="email">E-Mail</FormLabel>
                <Input {...field} type="email" id="email" variant="filled" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="message">
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!(form.errors.message && form.touched.message)}
                isRequired
                mt="8"
              >
                <FormLabel htmlFor="message">Nachricht</FormLabel>
                <Textarea {...field} id="message" variant="filled" />
                <FormErrorMessage>{form.errors.message}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="privacy">
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!(form.errors.privacy && form.touched.privacy)}
                isRequired
                mt="8"
              >
                <Checkbox
                  {...field}
                  isInvalid={!!(form.errors.privacy && form.touched.privacy)}
                  isRequired
                  id="privacy"
                  variant="filled"
                  colorScheme="brand"
                >
                  {/* // TODO: Add the Link to the privacy page */}
                  Die Informationen zum <a>Datenschutz</a> sind mir bekannt und habe ich verstanden.
                </Checkbox>
                <FormErrorMessage>{form.errors.privacy}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button type="submit" disabled={!isValid} mt="8" w="full">
            Absenden
          </Button>
        </Form>
      )}
    </Formik>
  );
}
