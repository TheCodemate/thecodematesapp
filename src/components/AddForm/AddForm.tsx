import { FieldValues, useForm, FormProvider } from 'react-hook-form';
import * as Form from '@radix-ui/react-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

import { addNewAnnouncement } from '@/store/features/announcements/announcements.slice';

import { CustomInput, CustomSelectInput, CustomTextarea } from '../CustomInput/CustomInput';

import styles from './AddForm.module.scss';
import { PetSchema } from '@/types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store/store';

const formDefaultConfig = {
  defaultValues: {
    id: '',
    petName: '',
    price: '',
    imageUrl: [
      'https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80'
    ],
    location: {
      country: '',
      countryCode: '',
      city: '',
      street: '',
      houseNumber: '',
      postalCode: ''
    },
    characteristics: {
      sex: 'male',
      age: '',
      breed: '',
      color: ''
    },
    owner: {
      firstName: 'Peter',
      lastName: 'Pizzaeater',
      contactDetails: {
        email: 'peter.pizzaeater@pizza.com',
        phone: '+48 500 500 500'
      },
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
      description: ''
    },
    resolver: zodResolver(PetSchema)
  }
};

export const AddForm = () => {
  const methods = useForm<FieldValues>(formDefaultConfig);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
    setValue
  } = methods;

  const submitHandler = (data: FieldValues) => {
    dispatch(addNewAnnouncement(data));
    reset();
  };

  const notify = () => {
    toast.success('Announcement submitted successfully! ❤️ 🐶', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      notify();
      setTimeout(() => {
        navigate('/adopt');
      }, 3000);
    }
    setValue('id', uuidv4());
  }, [isSubmitSuccessful]);

  return (
    <FormProvider {...methods}>
      <Form.Root className={styles.formGrid} onSubmit={handleSubmit(submitHandler)}>
        <CustomInput className={styles.gridColSpan2} name={'petName'} label={"Pet's name"} />
        <CustomInput className={styles.gridColSpan2} name={'price'} label={'Price'} type="number" />
        <CustomInput className={styles.gridColSpan2} name={'location.country'} label={'Country'} />
        <CustomInput className={styles.gridColSpan2} name={'location.city'} label={'City'} />
        <CustomInput className={styles.gridColSpan2} name={'location.street'} label={'Street'} />
        <CustomInput name={'location.houseNumber'} label={'House number'} type="number" />
        <CustomInput name={'location.postalCode'} label={'House postalCode'} />

        <CustomSelectInput
          name={'characteristics.sex'}
          label={'Chose gender'}
          options={['male', 'female']}
          defaultValue={'male'}
        />
        <CustomInput name={'characteristics.age'} label={'Age'} type="number" />
        <CustomInput name={'characteristics.breed'} label={'Breed'} />
        <CustomInput name={'characteristics.color'} label={'Color'} />
        <CustomTextarea className={styles.textArea} name={'description'} label={'Description'} />

        <div className={styles.buttonContainer}>
          <Form.Submit className={styles.submitButton} asChild>
            <button>Submit</button>
          </Form.Submit>
        </div>
      </Form.Root>
    </FormProvider>
  );
};
