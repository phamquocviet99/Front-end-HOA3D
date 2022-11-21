import { useState, React, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import { TbPoint } from "react-icons/tb";
import { NavLink } from "react-router-dom";
const menuAnimation = {
  hidden: {
    height: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
    opacity: 0,
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};
const menuItemAnimation = {
  hidden: (i) => ({
    padding: 0,
    x: "-100%",
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.11,
    },
  }),
};
const SideBarMenu = ({ showAnimation, route, isOpen, setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);
  return (
    <>
      <div className="menu" onClick={toggleMenu}>
        <div className="menu-item">
          <div className="icon-sidebar">{route.icon}</div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="link_text"
              >
                {route.name}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {isOpen && (
          <motion.div animate={isMenuOpen ? { rotate: -90 } : { rotate: 0 }}>
            <FaAngleDown />
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="menu-container"
          >
            {route.subRoutes.map((subRoute, i) => (
              <motion.div variants={menuItemAnimation} custom={i} key={i}>
                <NavLink
                  activeClassName="active"
                  to={subRoute.path}
                  className="link none-decoration"
                >
                  <div className="icon-sidebar">
                    <TbPoint />
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        className="link_text"
                      >
                        {subRoute.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBarMenu;
