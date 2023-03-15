import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  const footerStyle = {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#f5f5f5',
    marginTop:'16px'
  };

  const leftSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#777',
    fontSize: '14px',
    marginRight: '16px',
  };

  const rightSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: '16px',
  };

  const iconStyle = {
    color: '#777',
    marginLeft: '8px',
  };

  return (
    <BottomNavigation style={footerStyle}>
      <div style={leftSectionStyle}>
        <span>
          © 2023, made with by Creative Tim for a better web.
        </span>
      </div>
      <div style={rightSectionStyle}>
        <BottomNavigationAction
          label="Facebook"
          icon={<Facebook style={iconStyle} />}
        />
        <BottomNavigationAction
          label="Twitter"
          icon={<Twitter style={iconStyle} />}
        />
        <BottomNavigationAction
          label="Instagram"
          icon={<Instagram style={iconStyle} />}
        />
        <BottomNavigationAction
          label="LinkedIn"
          icon={<LinkedIn style={iconStyle} />}
        />
      </div>
    </BottomNavigation>
  );
};

export default Footer;
