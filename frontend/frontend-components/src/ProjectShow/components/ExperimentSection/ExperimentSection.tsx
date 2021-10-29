import classNames from "classnames";
import React, { ComponentType } from "react";
import { TextShow } from "../../../TextShow";
import { Experiment } from "../../../types";
import { renderUrlImage } from "../../../utils";
import styles from "./ExperimentSection.module.css";

interface ExperimentSectionProps {
  experiment: Experiment;
  backend: boolean;
  basePath: string;
  linkComponent: ComponentType<{ href: string }>;
}
export const ExperimentSection = ({
  experiment,
  backend,
  basePath,
  linkComponent: Link,
}: ExperimentSectionProps) => {
  return (
    <div className={styles.main}>
      <div
        className={classNames(styles.section, styles.cover)}
        style={{
          backgroundImage: `url('${renderUrlImage(
            experiment.cover,
            backend
          )}')`,
        }}
      ></div>
      <div className={classNames(styles.section, styles.content)}>
        <Link href={`${basePath}experiments/${experiment.id}`}>
          <h2>{experiment.title}</h2>
        </Link>
        <TextShow text={experiment.description} />
      </div>
    </div>
  );
};
