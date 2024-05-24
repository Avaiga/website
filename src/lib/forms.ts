import { FORM_REQUEST_LIST_ID, NEWSLETTER_LIST_ID } from '@/constants/forms';

export const emailRegexp =
  // eslint-disable-next-line no-control-regex, no-useless-escape
  /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

export const sendBrevoFormData = async ({ listId, email }: { listId: number; email: string }) => {
  const response = await fetch(`https://api.brevo.com/v3/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY!,
    },
    body: JSON.stringify({
      email,
      listIds: [listId],
    }),
  });

  return response;
};

export const sendBrevoFullFormData = async ({
  listId,
  email,
  firstName,
  lastName,
  company,
  jobTitle,
  message,
  checkAgree,
}: {
  listId: number;
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  message: string;
  checkAgree: boolean;
}) => {
  const contactInfo = await getContactInfo({ email });

  if (contactInfo && contactInfo.listIds) {
    const { listIds } = contactInfo;

    if (listIds.includes(NEWSLETTER_LIST_ID) || listIds.includes(FORM_REQUEST_LIST_ID)) {
      const resp = await updateContact({
        email,
        firstName,
        lastName,
        company,
        jobTitle,
        message,
        listId: FORM_REQUEST_LIST_ID,
      });

      return resp;
    }
  }

  const response = await fetch(`https://api.brevo.com/v3/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY!,
    },
    body: JSON.stringify({
      email,
      listIds: [listId],
      attributes: {
        FNAME: firstName,
        LNAME: lastName,
        JOB_TITLE: jobTitle,
        COMPANY_NAME: company,
        MESSAGE: message,
        AGREE_TO_PROCEED: checkAgree,
      },
    }),
  });

  return response;
};

export const getContactInfo = async ({ email }: { email: string }) => {
  const response = await fetch(`https://api.brevo.com/v3/contacts/${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY!,
    },
  });

  const data = await response.json();

  return data;
};

export const updateContact = async ({
  email,
  firstName,
  lastName,
  company,
  jobTitle,
  message,
  listId,
}: {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  message: string;
  listId: number;
}) => {
  const response = await fetch(`https://api.brevo.com/v3/contacts/${email}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY!,
    },
    body: JSON.stringify({
      listIds: [listId],
      attributes: {
        FNAME: firstName,
        LNAME: lastName,
        JOB_TITLE: jobTitle,
        COMPANY_NAME: company,
        MESSAGE: message,
      },
    }),
  });

  return response;
};
