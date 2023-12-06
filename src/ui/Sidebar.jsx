import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledSidebar = styled.aside`
  border-radius: 2rem;
  background-color: var(--semi-dark-blue);
  min-height: 96rem;
  padding: 4rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.5rem;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Svg = styled.svg`
  width: 2rem;
  height: 2rem;
  fill: var(--greyish-blue);

  &:hover {
    fill: var(--red);
  }

  &:active {
    fill: #fff;
  }
`;

const Avatar = styled.img`
  margin-top: auto;
  width: 4rem;
  height: 4rem;
  border: 1px solid #fff;
  border-radius: 4rem;
`;

// const StyledNavLink = styled(NavLink)``;

function Sidebar() {
  return (
    <StyledSidebar>
      <img src="./logo.svg" alt="Logo" />

      <nav>
        <NavList>
          <Link to="/">
            <Svg>
              <use xlinkHref="./icon-nav-home.svg#nav-home"></use>
            </Svg>
          </Link>

          <Link to="/movies">
            <Svg>
              <use xlinkHref="./icon-nav-movies.svg#nav-movies"></use>
            </Svg>
          </Link>

          <Link to="/series">
            <Svg>
              <use xlinkHref="./icon-nav-tv-series.svg#nav-series"></use>
            </Svg>
          </Link>

          <Link to="/bookmark">
            <Svg>
              <use xlinkHref="./icon-nav-bookmark.svg#nav-bookmark"></use>
            </Svg>
          </Link>
        </NavList>
      </nav>

      <Avatar src="./image-avatar.png" alt="Avatar" />
    </StyledSidebar>
  );
}

export default Sidebar;
