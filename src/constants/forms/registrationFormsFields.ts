import { v1 } from "uuid";

export const registrationFormFields = [
  {
    id: v1(),
    name: "name",
    type: "text",
  },

  {
    id: v1(),
    name: "email",
    type: "text",
  },
  {
    id: v1(),
    name: "password",
    type: "password",
  },
  {
    id: v1(),
    name: "confirmPassword",
    type: "password",
  },
];
