// src/components/TopHeader/TopHeader.tsx
import React from 'react';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';
import LanguageSelector from './LanguageSelector';
import './styles.scss';

const TopHeader: React.FC = () => {
    return (
      <header className="top-header top-header-bg">
          <div className="container">
              <div className="top-header-content">
                  {/* Seção Esquerda */}
                  <ContactInfo />

                  {/* Seção Direita */}
                  <div className="header-right-wrapper">
                      <SocialLinks />
                      <LanguageSelector />
                  </div>
              </div>
          </div>
      </header>
    );
};

export default TopHeader;
