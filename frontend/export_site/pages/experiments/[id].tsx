import type { NextPage } from "next";
import { ExperimentShow } from "frontend-components";
import path from "path";
import { promises as fs } from "fs";
import Link from "../../components/link";
import dynamic from "next/dynamic";

export async function getStaticPaths() {
  //const filePath = path.join(process.cwd(), "data.json");
  const filePath = process.env.FILE_PATH!;

  const fileContents = await fs.readFile(filePath, "utf8");
  const experiments = JSON.parse(fileContents).experiments.map(
    (experiment: any) => ({ params: { id: experiment.id.toString() } })
  );
  return {
    paths: experiments,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: number } }) {
  const filePath = path.join(process.cwd(), "data.json");
  const fileContents = JSON.parse(await fs.readFile(filePath, "utf8"));
  const experiment = fileContents.experiments.find(
    (experiment: any) => experiment.id.toString() === params.id.toString()
  );

  return {
    props: {
      experiment,
      glossaryCategories: fileContents.glossary_categories,
      experiments: fileContents.experiments,
    },
  };
}
const Layout = dynamic(() => import("../../components/layout"), { ssr: false });

const Experiment: NextPage = ({
  experiment,
  glossaryCategories,
  experiments,
}: any) => {
  return (
    <Layout experiments={experiments}>
      <ExperimentShow
        glossaryCategories={glossaryCategories}
        basePath="/"
        experiment={experiment}
        linkComponent={Link}
      />
    </Layout>
  );
};

export default Experiment;
