import { Container, Pagination } from "@mui/material";

export default function PaginationComp({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}) {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Pagination
        count={Math.ceil(totalPosts / postsPerPage)}
        variant="outlined"
        shape="rounded"
        size="large"
        page={currentPage}
        color="secondary"
        onChange={(e, value) => setCurrentPage(value)}
        boundaryCount={1}
        siblingCount={1}
      />
    </Container>
  );
}
