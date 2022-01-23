import React from 'react';
import styles from './Footer.module.css';
import { Footer as FooterType, LanguageOptions } from '@algocount/shared/types';
import { translations } from '../../../translations';

interface FooterProps {
  language: LanguageOptions;
  footer?: FooterType;
}
export const Footer = (props: FooterProps) => {
  const { language, footer } = props;
  return (
    <div className={styles.main}>
      <div className={styles.platform}>
        <b>
          <u>PlaPlac</u>
        </b>
        - a dissemination platform designed within the Algocount project by the
        Università degli Studi di Milano and DensityDesign Lab from Design
        Dipartment of Politecnico di Milano, funded by Fondazione Cariplo.
        License CC-by 2021.
      </div>

      {footer && footer.founded_by && footer.founded_by.length > 0 && (
        <>
          <div className={styles.divider} />
          <div className={styles.column}>
            <span>{translations[language].foundedby_footer}:</span>
            <div className={styles.founded_by}>
              {footer.founded_by.map((founder, index) => (
                <a key={index} href={founder.link}>
                  <img src={founder.image} />
                </a>
              ))}
            </div>
          </div>
        </>
      )}
      {footer && footer.partners && footer.partners.length > 0 && (
        <>
          <div className={styles.divider} />

          <div className={styles.column}>
            <span>{translations[language].partners_footer}:</span>
            <div className={styles.partners}>
              {footer.partners.map((founder, index) => (
                <a key={index} href={founder.link}>
                  <img src={founder.image} />
                </a>
              ))}
            </div>
          </div>
        </>
      )}
      {footer && footer.socials && (
        <>
          <div className={styles.divider} />
          <div className={styles.column}>
            <span>{translations[language].contacts_footer}:</span>
            <div className={styles.contacts}>
              {footer && footer.socials && footer.socials.facebook && (
                <img src={'/assets/facebook-logo-white.png'} />
              )}
              {footer && footer.socials && footer.socials.twitter && (
                <img src={'/assets/twitter-icon-18-256.png'} />
              )}
              {footer && footer.socials && footer.socials.mail && (
                <img src={'/assets/email.png'} />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};