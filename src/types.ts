import { z } from 'zod';

const LocationSchema = z.object({
  country: z.string(),
  countryCode: z.string().max(3, { message: 'Country code cannot be longer than 3 chars' }),
  street: z.string(),
  houseNumber: z.number(),
  postalCode: z.number()
});
export type LocationType = z.infer<typeof LocationSchema>;

const PetCharacteristicsSchema = z.object({
  sex: z.union([z.literal('male'), z.literal('female')]),
  age: z.number().max(99),
  breed: z.string(),
  color: z.string()
});
export type PetCharacteristicsType = z.infer<typeof PetCharacteristicsSchema>;

const ContactDetailsSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional()
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

const PetSchema = z.object({
  id: z.string(),
  petName: z
    .string()
    .min(2, { message: "Pet's first name must be at least 6 characters long" })
    .max(50, { message: "Pet's first name cannot be longer than 50 characters" }),
  price: z.number(),
  imageUrl: z.array(z.string()),
  location: LocationSchema,
  characteristics: PetCharacteristicsSchema,
  owner: OwnerSchema
});
export type PetType = z.infer<typeof PetSchema>;

export const PetsSchema = z.array(PetSchema);
export type PetsType = z.infer<typeof PetsSchema>;
