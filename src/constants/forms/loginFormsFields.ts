import { v1 } from "uuid";

export const loginFormFields = [
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
];
