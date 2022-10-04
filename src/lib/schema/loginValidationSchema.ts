import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\S+$/, "Field can't contain spaces")
    .email("Invalid email")
    .required("Field required"),
  password: Yup.string()
    .matches(/^\S+$/, "Field can't contain spaces")
    .required("Field required")
    .min(6, "Password has to be longer than 6 characters!")
    .matches(/[a-z]+/, "password must contain at least 1 lower case letter")
    // .matches(/[A-Z]+/, "password must contain at least 1 upper case letter")
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
});
