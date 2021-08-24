import React, { useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Header from "./Navigation/Header";
import Footer from "./Footer/Footer";

const Layout = ({
  children,
  headerStyle,
  headerLinkColor,
  headerHasBorder,
  modalTabIndex,
}) => {
  return (
    <div>
      <Helmet></Helmet>
      <Header
        headerStyle={headerStyle}
        headerLinkColor={headerLinkColor}
        headerHasBorder={headerHasBorder}
      />
      <main id="body-content" className="bg-white">
        {children}
      </main>
      <Footer modalTabIndex={modalTabIndex} />
    </div>
  );
};

Layout.propTypes = {
  headerStyle: PropTypes.string,
  headerLinkColor: PropTypes.string,
  headerHasBorder: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
