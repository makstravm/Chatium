import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("required").matches(/^\S+$/, "space"),
  email: Yup.string()
    .matches(/^\S+$/, "space")
    .email("email")
    .required("required"),
  password: Yup.string()
    .required("required")
    .matches(/^\S+$/, "space")
    .min(6, "shortPassword")
    .max(16, "longPassword")
    .matches(/[a-z]+/, "lowerCase")
    .matches(/[A-Z]+/, "upperCase")
    .matches(/\d+/, "number")
    .test("not special symbols", function array(value) {
      const checkSymbolInPassword =
        /^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/.test(value as string);

      if (checkSymbolInPassword) {
        throw this.createError({
          path: this.path,
          message: "symbols",
        });
      }

      return true;
    }),
  confirmPassword: Yup.string()
    .matches(/^\S+$/, "space")
    .oneOf([Yup.ref("password")], "passwordDoesNotMatch")
    .required("required"),
});
