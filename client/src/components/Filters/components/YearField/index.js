import { Field } from "react-final-form";
import { FormattedMessage } from "react-intl";
import TextField from "@mui/material/TextField";

export const YearField = () => {
  return (
    <Field
      name="year"
      render={({ input }) => {
        const { value, onChange, ...restInput } = input;
        const validatedValue = isNaN(value) ? "" : value;

        return (
          <TextField
            id="outlined-basic"
            label={<FormattedMessage id="filters.year" />}
            variant="outlined"
            type="number"
            inputProps={{ min: 1800, max: 2030 }}
            value={validatedValue}
            onChange={(e) => {
              const numericValue =
                e.target.value === "" ? "" : parseInt(e.target.value, 10);
              onChange(numericValue);
            }}
            {...restInput}
          />
        );
      }}
    />
  );
};
