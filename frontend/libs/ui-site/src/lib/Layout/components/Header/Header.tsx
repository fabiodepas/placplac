import classnames from 'classnames';
import React, { ComponentType, useEffect, useRef, useState } from 'react';
import { translations } from '../../../translations';
import { Experiment, LanguageOptions } from '@algocount/shared/types';
import styles from './Header.module.css';

interface HeaderProps {
  basePath: string;
  linkComponent: ComponentType<{ href: string }>;
  experiments: Experiment[];
  language: LanguageOptions;
}
export const Header = (props: HeaderProps) => {
  const { basePath, linkComponent: Link, experiments, language } = props;
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (submenuVisible && ref.current && !ref.current.contains(e.target)) {
        setSubmenuVisible(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [submenuVisible]);

  useEffect(() => {
    // define callback as separate function so it can be removed later with cleanup function
    setSubmenuVisible(false);
  }, [window.location.pathname]);

  return (
    <div className={styles.header} id="header">
      <div ref={ref} className={classnames(styles.header_menu, styles.left)}>
        <div className={styles.item}>
          <Link href={basePath}>Home</Link>
        </div>
        <div className={styles.item}>
          <span onClick={() => setSubmenuVisible((old) => !old)}>
            {translations[language].experiments_title}
          </span>
          <div
            style={{ visibility: submenuVisible ? 'visible' : 'hidden' }}
            className={styles.submenu}
          >
            <ul>
              {experiments.map((experiment) => (
                <Link
                  key={experiment.id}
                  href={`${basePath}experiments/${experiment.id}`}
                >
                  <li>{experiment.title}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.item}>
          <Link href={`${basePath}#abouttheproject`}>
            {translations[language].abouttheproject_menu}
          </Link>
        </div>
      </div>
      <div className={classnames(styles.header_menu, styles.right)}>
        <div className={styles.item}>
          <Link href={`${basePath}glossary`}>
            {translations[language].glossary_menu}
          </Link>
        </div>
      </div>
    </div>
  );
};