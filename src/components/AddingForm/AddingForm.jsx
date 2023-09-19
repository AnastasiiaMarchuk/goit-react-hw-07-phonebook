import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, Title } from './AddingForm.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { useContacts } from 'redux/hooks';

const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
      .required(),
    number: yup
      .string()
      .matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)
      .required(),
  })
  .required();

export default function AddingForm() {
  const { addContact, contacts } = useContacts();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = newContact => {
    const oldContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
    );

    if (oldContact) {
      toast.error(`${oldContact.name} already exists`, {
        autoClose: 2000,
      });
      return;
    }

    const contact = { ...newContact, id: nanoid() };
    addContact(contact);

    toast.success('Contact added successfully', {
      position: 'top-right',
      autoClose: 2000,
    });
    reset();
  };

  return (
    <>
      <Title>Add new contact</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name
          <input {...register('name')} placeholder="Enter name" />
          {errors.name && <span>Name is required</span>}
        </label>
        <label>
          Number
          <input {...register('number')} placeholder="xxx-xxx-xx-xx" />
          {errors.number && <span>Number is required</span>}
        </label>
        <button type="submit">Add contact</button>
        <ToastContainer />
      </Form>
    </>
  );
}
