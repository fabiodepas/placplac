import { SelectFile } from "../SelectFile";

interface ReferenceInputImageProps {
  source: string;
  project: number;
  label?: string;
  validate?: any;
  fullWidth?: boolean;
}
export const ReferenceInputImage = (props: ReferenceInputImageProps) => {
  const { source, project, label, validate, fullWidth } = props;

  return (
    <SelectFile
      type="image"
      label={label ? label : "Image"}
      source={source}
      project={project}
      fullWidth={fullWidth}
      validate={validate}
    />
  );
};
