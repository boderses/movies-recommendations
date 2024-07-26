import { useSearchParams } from "react-router-dom";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { MovieCard } from "../../components";
import { useQuery } from "@apollo/client";
import { MOVIES_BY_IDS_QUERY } from "./queries";

const Recommend = () => {
  const [searchParams] = useSearchParams();

  const ids =
    searchParams
      .get("ids")
      ?.split(",")
      .map((id) => parseInt(id, 10)) || [];

  const { loading, error, data } = useQuery(MOVIES_BY_IDS_QUERY, {
    variables: { ids },
  });

  if (loading) {
    <div>Loading...</div>;
  }

  if (error) {
    <div>Error. Try again!</div>;
  }

  return (
    <>
      <Typography variant="h1" component="h1" gutterBottom>
        {searchParams.get("title")}
      </Typography>

      {data?.moviesByIds && (
        <Grid container spacing={2}>
          {data.moviesByIds.map((movie) => (
            <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} isPreviewMode />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Recommend;
