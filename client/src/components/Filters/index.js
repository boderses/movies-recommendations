import { Form } from "react-final-form";
import Box from "@mui/material/Box";
import {
  SortField,
  SortDirectionField,
  AdultField,
  SubmitField,
  ReleaseYearField,
  GenreField,
} from "./components";
import { GENRES_QUERY } from "./queries";
import { useQuery } from "@apollo/client";

export const Filters = ({ onSubmit, initialValues }) => {
  const { loading, data } = useQuery(GENRES_QUERY);

  if (loading) {
    return "Loading ...";
  }

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                  gap: 2,
                }}
              >
                <Box sx={{ mr: { sm: 3 }, minWidth: "70px" }}>
                  <ReleaseYearField />
                </Box>

                <Box sx={{ mr: { sm: 3 } }}>
                  <GenreField data={data} />
                </Box>

                <AdultField />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                  gap: 2,
                  mt: { xs: 2, sm: 0 },
                }}
              >
                <Box sx={{ mr: { sm: 3 } }}>
                  <SortField />
                </Box>
                <SortDirectionField />
              </Box>
            </Box>
            <Box
              sx={{
                mt: 2,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <SubmitField />
            </Box>
          </form>
        )}
      />
    </div>
  );
};
