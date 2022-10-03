import { FC, useState } from "react";

import {
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
        type={showPassword ? TEXT : PASSWORD}
        onChange={handleChange}
        endAdornment={
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setShowPassword(!showPassword)}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
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
