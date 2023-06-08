import mongoose, { Document, Model, Schema } from "mongoose";
import { AddressInput } from "../../graphql/dtos/inputs/create-user-input";

// export interface IAddress extends Document {
//   street: string;
//   city: string;
//   state: string;
//   zip: string;
//   country: string;
// }

const AddressSchema = new Schema<AddressInput>({
  street: {
    type: String,
    required: [true, 'address must have a street']
  },

  city: {
    type: String,
    required: [true, 'address must have a city']
  },

  state: {
    type: String,
    required: [true, 'address must have a state']
  },

  zip: {
    type: String,
    required: [true, 'address must have a zip']
  },

  country: {
    type: String,
    required: [true, 'address must have a country']
  }
});

export const AddressModel: Model<AddressInput> = mongoose.models.Address || mongoose.model<AddressInput>('Address', AddressSchema);


