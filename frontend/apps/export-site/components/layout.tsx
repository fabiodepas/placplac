import React from 'react';
import {
  Experiment,
  LanguageOptions,
  Footer as FooterType,
} from '@algocount/shared/types';
import { Layout as MainLayout } from '@algocount/ui-site';
import Link from '../components/link';

interface LayoutProps {
  children: React.ReactNode;
  experiments: Experiment[];
  language: LanguageOptions;
  footer: FooterType;
}
const Layout = (props: LayoutProps) => {
  const { children, experiments, language, footer } = props;
  return (
    <MainLayout
      footer={footer}
      language={language}
      experiments={experiments}
      basePath="/"
      linkComponent={Link}
    >
      {children}
    </MainLayout>
  );
};
export default Layout;