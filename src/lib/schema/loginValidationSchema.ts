import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\S+$/, "space")
    .email("email")
    .required("required"),
  password: Yup.string()
    .matches(/^\S+$/, "space")
    .required("required")
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
});
