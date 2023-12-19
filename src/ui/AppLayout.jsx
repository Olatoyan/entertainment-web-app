import styled from "styled-components";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Main } from "./BoxStyles";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;
  gap: 3.6rem;
  padding: 2rem 3.2rem;
  align-items: start;

  @media (max-width: 62.5em) {
    grid-template-columns: 1fr;
    gap: 0;
  }

  @media (max-width: 31.25em) {
    padding: 0 2rem 2rem;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />

      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
