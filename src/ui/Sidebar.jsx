import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

// import { CiLogout } from "react-icons/ci";
import Logout from "../features/authentication/Logout";

const StyledSidebar = styled.aside`
  border-radius: 2rem;
  background-color: var(--semi-dark-blue);
  min-height: 96rem;
  padding: 4rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.5rem;

  @media (max-width: 62.5em) {
    flex-direction: row;
    justify-content: space-between;
    min-height: auto;
    padding: 2.4rem;
    gap: 0;
    width: 97vw;
  }

  @media (max-width: 31.25em) {
    padding: 1.6rem;
  }
`;

const NavList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 62.5em) {
    flex-direction: row;
  }
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

// const Avatar = styled.img`
//   margin-top: auto;
//   width: 4rem;
//   height: 4rem;
//   border: 1px solid #fff;
//   border-radius: 4rem;

//   @media (max-width: 31.25em) {
//     width: 2.4rem;
//     height: 2.4rem;
//   }
// `;

const Logo = styled(motion.img)`
  width: 3rem;
  height: 2.7rem;

  @media (max-width: 31.25em) {
    width: 2.5rem;
    height: 2rem;
  }
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
      <Logo
        src="./logo.svg"
        alt="Logo"
        whileHover={{
          scale: 1.5,
        }}
      />

      <nav>
        <NavList {...staggeredChildrenTransition}>
          <motion.li variants={listItemVariants}>
            <motion.div
              whileHover={{
                scale: 1.5,
                transition: { type: "spring", stiffness: 300, damping: 30 },
              }}
            >
              <StyledNavLink to="/all">
                <svg>
                  <use xlinkHref="./icon-nav-home.svg#nav-home"></use>
                </svg>
              </StyledNavLink>
            </motion.div>
          </motion.li>

          <motion.li variants={listItemVariants}>
            <motion.div
              whileHover={{
                scale: 1.5,
                transition: { type: "spring", stiffness: 300, damping: 30 },
              }}
            >
              <StyledNavLink to="/movies">
                <svg>
                  <use xlinkHref="./icon-nav-movies.svg#nav-movies"></use>
                </svg>
              </StyledNavLink>
            </motion.div>
          </motion.li>

          <motion.li variants={listItemVariants}>
            <motion.div
              whileHover={{
                scale: 1.5,
                transition: { type: "spring", stiffness: 300, damping: 30 },
              }}
            >
              <StyledNavLink to="/series">
                <svg>
                  <use xlinkHref="./icon-nav-tv-series.svg#nav-series"></use>
                </svg>
              </StyledNavLink>
            </motion.div>
          </motion.li>

          <motion.li variants={listItemVariants}>
            <motion.div
              whileHover={{
                scale: 1.5,
                transition: { type: "spring", stiffness: 300, damping: 30 },
              }}
            >
              <StyledNavLink to="/bookmark">
                <svg>
                  <use xlinkHref="./icon-nav-bookmark.svg#nav-bookmark"></use>
                </svg>
              </StyledNavLink>
            </motion.div>
          </motion.li>
        </NavList>
      </nav>

      <Logout />
    </StyledSidebar>
  );
}

export default Sidebar;
