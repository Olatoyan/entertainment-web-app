import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

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

const NavList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const StyledNavLink = styled(NavLink)`
  &:not(.active):hover svg {
    fill: var(--red);
  }

  &.active svg {
    fill: #fff;
  }

  & svg {
    width: 2rem;
    height: 2rem;
    fill: var(--greyish-blue);
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
  const listItemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    transition: { type: "spring" },
  };

  const staggerContainerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const staggeredChildrenTransition = {
    variants: staggerContainerVariants,
    initial: "hidden",
    animate: "visible",
  };

  return (
    <StyledSidebar>
      <motion.img
        src="./logo.svg"
        alt="Logo"
        whileHover={{
          scale: 2,
        }}
      />

      <nav>
        <NavList {...staggeredChildrenTransition}>
          <motion.li variants={listItemVariants}>
            <StyledNavLink to="/">
              <svg>
                <use xlinkHref="./icon-nav-home.svg#nav-home"></use>
              </svg>
            </StyledNavLink>
          </motion.li>

          <motion.li variants={listItemVariants}>
            <StyledNavLink to="/movies">
              <svg>
                <use xlinkHref="./icon-nav-movies.svg#nav-movies"></use>
              </svg>
            </StyledNavLink>
          </motion.li>

          <motion.li variants={listItemVariants}>
            <StyledNavLink to="/series">
              <svg>
                <use xlinkHref="./icon-nav-tv-series.svg#nav-series"></use>
              </svg>
            </StyledNavLink>
          </motion.li>

          <motion.li variants={listItemVariants}>
            <StyledNavLink to="/bookmark">
              <svg>
                <use xlinkHref="./icon-nav-bookmark.svg#nav-bookmark"></use>
              </svg>
            </StyledNavLink>
          </motion.li>
        </NavList>
      </nav>

      <Avatar src="./image-avatar.png" alt="Avatar" />
    </StyledSidebar>
  );
}

export default Sidebar;
