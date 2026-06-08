import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import useFetchData from "../hooks/useFetchData";

function Users() {
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/users",
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>
        Users API
      </Typography>

      {data.map((user) => (
        <Card key={user.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">Name: {user.name}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Phone: {user.phone}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Users;
