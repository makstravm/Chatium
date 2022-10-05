import { FC, useState } from "react";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FieldsTypes } from "constants/fieldsTypes";
import { IPasswordField } from "./types";

const { TEXT, PASSWORD } = FieldsTypes;

const PasswordField: FC<IPasswordField> = ({
  name,
  label,
  handleChange,
  errors,
  touched,
}) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  return (
    <FormControl
      size="small"
      variant="outlined"
      fullWidth
      error={!!(touched[name] && errors[name])}
    >
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        name={name}
        type={isShowPassword ? TEXT : PASSWORD}
        onChange={handleChange}
        endAdornment={
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setIsShowPassword(!isShowPassword)}
            edge="end"
          >
            {isShowPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        }
        label={label}
      />
      {!!touched[name] && (
        <FormHelperText id="component-error-text">
          {errors[name]}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default PasswordField;
