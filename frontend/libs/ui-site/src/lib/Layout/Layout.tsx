import classnames from 'classnames';
import React, { ComponentType } from 'react';
import { Header } from './components/Header';
import styles from './Layout.module.css';
import {
  Experiment,
  Footer as FooterType,
  LanguageOptions,
  Project,
} from '@algocount/shared/types';
import { Footer } from './components/Footer';
import { BackToTopButton } from '../components/BackToTopButton';

interface LayoutProps {
  basePath: string;
  linkComponent: ComponentType<{ href: string }>;
  children: React.ReactNode;
  experiments: Experiment[];
  language: LanguageOptions;
  footer?: FooterType;
}

export const Layout = (props: LayoutProps) => {
  const { basePath, linkComponent, children, experiments, language, footer } =
    props;
  return (
    <div
      id="main-application"
      className={classnames(styles.main, 'main-application')}
    >
      <Header
        language={language}
        experiments={experiments}
        basePath={basePath}
        linkComponent={linkComponent}
      />
      <div className={styles.content_wrapper}>{children}</div>
      <Footer footer={footer} language={language} />
      <BackToTopButton />
    </div>
  );
};
