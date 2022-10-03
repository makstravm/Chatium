import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Field required"),
  email: Yup.string()
    .email("Invalid email")
    .trim("Field cann't contain spaces")
    .required("Field required"),
  password: Yup.string()
    .required("Field required")
    .trim("Field cann't contain spaces")
    .min(6, "Password has to be longer than 6 characters!")
    .matches(/[a-z]+/, "password must contain at least 1 lower case letter")
    .matches(/[A-Z]+/, "password must contain at least 1 upper case letter")
    .matches(/\d+/, "password must contain at least 1 number")
    .test("not special symbols", function array(value) {
      const checkSymbolInPassword =
        /^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/.test(value as string);

      if (checkSymbolInPassword) {
        throw this.createError({
          path: this.path,
          message: "must not contain special characters",
        });
      }

      return true;
    }),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password don't match")
    .trim("Field cann't contain spaces")
    .required("Field required"),
  checkbox: Yup.boolean().oneOf([true], "To continue you must agree"),
});
