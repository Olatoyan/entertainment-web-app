import styled from "styled-components";
import { useLogout } from "./useLogout";
import { CiLogout } from "react-icons/ci";
import MiniSpinner from "../../ui/MiniSpinner";

const Button = styled.button`
  background: none;
  border: none;
  transition: all 0.2s;
  margin-top: auto;

  &:hover svg {
    fill: var(--red);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
  }
`;

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <Button onClick={logout}>
      {isLoading ? <MiniSpinner /> : <CiLogout />}
    </Button>
  );
}

export default Logout;
