import { z } from 'zod';

const regex = /^[a-zA-Z\s-]+$/;

const LocationSchema = z.object({
  country: z.string().min(2, { message: 'Please provide a valid country name' }),
  city: z.string().min(2, { message: 'Please provide a valid city name' }),
  street: z.string().min(2, { message: 'Please provide a valid street name' }),
  houseNumber: z.number().min(1, { message: 'Please provide a valid house number' }),
  postalCode: z
    .string()
    .min(5, { message: 'Postal code must contain 5 characters' })
    .regex(/^([0-9]{2})(-[0-9]{3})?$/, {
      message: 'Please provide a valid Polish postal code'
    })
});

export type LocationType = z.infer<typeof LocationSchema>;

const PetCharacteristicsSchema = z.object({
  sex: z.union([z.literal('male'), z.literal('female')]),
  age: z.number().nonnegative({ message: "Pet's age cannot be negative" }).max(99, {
    message: 'Are you sure your pet is older than 99 years? If so contact the support'
  }),
  breed: z
    .string()
    .max(100, { message: 'Please describe type of breed using less than 100 characters' })
    .regex(regex, { message: 'Breed must only contain letters, spaces, and hyphens' }),
  color: z
    .string()
    .max(50, { message: 'Please describe pet color using less than 50 characters' })
    .regex(regex, { message: 'Color must only contain letters, spaces, and hyphens' })
});

export type PetCharacteristicsType = z.infer<typeof PetCharacteristicsSchema>;

const ContactDetailsSchema = z.object({
  email: z.string().email({ message: 'Please provide a valid email address' }),
  phone: z.string().regex(/^\d{9}$/, { message: 'Please provide a 9-digit phone number' })
});

export type ContactDetailsType = z.infer<typeof ContactDetailsSchema>;

const OwnerSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'Owner first name must be at least 6 characters long' })
    .max(50, { message: 'Owner first name cannot be longer than 50 characters' }),
  lastName: z
    .string()
    .min(2, { message: 'Owner last name must be at least 6 characters long' })
    .max(50, { message: 'Owner last cannot be longer than 50 characters' }),
  avatarUrl: z.string(),
  contactDetails: ContactDetailsSchema.required({ email: true })
});
export type OwnerType = z.infer<typeof OwnerSchema>;

export const PetSchema = z.object({
  id: z.string(),
  petName: z
    .string()
    .min(2, { message: "Pet's first name must be at least 6 characters long" })
    .max(50, { message: "Pet's first name cannot be longer than 50 characters" }),
  price: z.number().min(0.01, { message: 'Price must be a valid number greater than zero' }),
  imageUrl: z.array(z.string()).min(1, { message: 'At least one image URL is required' }),

  location: LocationSchema,
  characteristics: PetCharacteristicsSchema,
  description: z.string().max(500, { message: 'Description must contain max 500 characters' }),

  owner: OwnerSchema
});
export type PetType = z.infer<typeof PetSchema>;

export const PetsSchema = z.array(PetSchema);
export type PetsType = z.infer<typeof PetsSchema>;
