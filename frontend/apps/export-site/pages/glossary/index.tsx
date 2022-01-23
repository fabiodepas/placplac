import type { NextPage } from 'next';
import { promises as fs } from 'fs';
import Link from '../../components/link';
import dynamic from 'next/dynamic';

export async function getStaticProps() {
  const filePath = process.env.NX_FILE_PATH!;

  //const filePath = path.join(process.cwd(), process.env.NODE_ENV);
  const fileContents = JSON.parse(await fs.readFile(filePath, 'utf8'));
  return {
    props: {
      experiments: fileContents.experiments,
      glossaryTerms: fileContents.glossary_terms,
      glossaryCategories: fileContents.glossary_categories,
      language: fileContents.language,
      footer: fileContents.footer,
    },
  };
}
const Layout = dynamic(() => import('../../components/layout'), { ssr: false });
const GlossaryShow = dynamic(() => import('../../components/glossaryShow'), {
  ssr: false,
});

const Glossary: NextPage = ({
  glossaryTerms,
  glossaryCategories,
  experiments,
  language,
  footer,
}: any) => {
  return (
    <Layout footer={footer} language={language} experiments={experiments}>
      <GlossaryShow
        language={language}
        glossaryCategories={glossaryCategories}
        glossaryTerms={glossaryTerms}
        basePath=""
        linkComponent={Link}
      />
    </Layout>
  );
};

export default Glossary;