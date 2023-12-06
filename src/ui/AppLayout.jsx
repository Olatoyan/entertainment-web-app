import styled from "styled-components";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;
  gap: 3.6rem;
  padding: 2rem 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />

      <Outlet />
    </StyledAppLayout>
  );
}

export default AppLayout;
