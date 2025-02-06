import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";
const LoaderWrapper = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 99999,
  width: "100%",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.1)",
});
const PageLoader = () => (
  <LoaderWrapper>
    <LinearProgress />
  </LoaderWrapper>
);

export default PageLoader;
