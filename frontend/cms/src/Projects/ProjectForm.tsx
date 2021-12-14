import {
  Datagrid,
  DeleteButton,
  EditButton,
  FormTab,
  maxLength,
  ReferenceArrayField,
  required,
  SaveButton,
  SelectField,
  SelectInput,
  TabbedForm,
  TabbedFormProps,
  TextField,
  TextInput,
  Toolbar,
  ToolbarProps,
} from "react-admin";
import { CustomFileField } from "../components/CustomFileField";
import { CustomRichTextInput } from "../components/CustomRichTextInput";
import { Tabs } from "../components/Tabs";
import { AddCollaboratorButton } from "./AddCollaboratorButton";
import { AddExperimentButton } from "./AddExperimentButton";
import { AddGlossaryTermButton } from "./AddGlossaryTermButton";

const ProjectFormToolbar = (props: ToolbarProps) => (
  <Toolbar
    style={{ display: "flex", justifyContent: "space-between" }}
    {...props}
  >
    <SaveButton />
    {props.record && props.record.id && props.record.user_level === "1" && (
      <DeleteButton />
    )}
  </Toolbar>
);
export const ProjectForm = (props: Omit<TabbedFormProps, "children">) => {
  return (
    <TabbedForm
      tabs={<Tabs />}
      {...props}
      redirect="edit"
      margin="dense"
      toolbar={<ProjectFormToolbar />}
    >
      <FormTab label="summary">
        <SelectInput
          defaultValue="2"
          choices={[
            { name: "Published", id: "1" },
            { name: "Draft", id: "2" },
          ]}
          source="status"
          helperText="Is the project ready?"
        />
        <SelectInput
          defaultValue="en"
          choices={[
            { name: "Italian", id: "it" },
            { name: "English", id: "en" },
          ]}
          source="language"
          helperText="The language of the project"
        />
        <TextInput
          source="title"
          label="Title (100)"
          fullWidth
          validate={[required(), maxLength(255)]}
          helperText="The project title"
        />

        <TextInput
          fullWidth
          placeholder="A good idea is to fill this area with a short but effective description"
          label="Description (255)"
          source="short_description"
          multiline
          helperText={"A small summary description"}
        />
        <CustomRichTextInput
          placeholder="A good idea is to fill this area with the main concept of the project."
          helperText={"Describe the project"}
          label="About the project"
          source="long_description"
        />
      </FormTab>

      {props.record.id && (
        <FormTab label="Experiments">
          <CustomRichTextInput
            source="experiments_description"
            helperText={"Describe what the experiments consist of"}
            placeholder="Describe briefly the experiments"
            small
          />
          <AddExperimentButton />
          <ReferenceArrayField
            label=""
            reference="experiments"
            source="experiment_set"
            fullWidth
          >
            <Datagrid>
              <TextField source="title" />
              <EditButton />
              <DeleteButton redirect={false} mutationMode="optimistic" />
            </Datagrid>
          </ReferenceArrayField>
        </FormTab>
      )}

      {props.record.id && (
        <FormTab label="Glossary">
          <AddGlossaryTermButton />
          <ReferenceArrayField
            label=""
            reference="glossary-terms"
            source="glossaryterm_set"
            fullWidth
          >
            <Datagrid>
              <TextField source="title" />
              <TextField source="category_title" />
              <EditButton />
              <DeleteButton redirect={false} mutationMode="optimistic" />
            </Datagrid>
          </ReferenceArrayField>
        </FormTab>
      )}
      {props.record.id && (
        <FormTab label="Media">
          {/* <AddGlossaryTermButton /> */}
          <ReferenceArrayField
            label=""
            reference="media"
            source="projectmedia_set"
            fullWidth
          >
            <Datagrid>
              <CustomFileField source="file" title="name" />
              <TextField source="type" />
              <TextField source="description" />
              <EditButton />
              <DeleteButton redirect={false} mutationMode="optimistic" />
            </Datagrid>
          </ReferenceArrayField>
        </FormTab>
      )}
      {props.record.id && props.record.user_level === "1" && (
        <FormTab label="Collaborators">
          <AddCollaboratorButton />
          <ReferenceArrayField
            label=""
            reference="project-collaborators"
            source="projectuser_set"
            fullWidth
          >
            <Datagrid>
              <TextField source="user" />
              <SelectField
                choices={[
                  { name: "Author", id: "1" },
                  { name: "Collaborator", id: "2" },
                ]}
                source="level"
              />
              <DeleteButton redirect={false} mutationMode="pessimistic" />
            </Datagrid>
          </ReferenceArrayField>
        </FormTab>
      )}
    </TabbedForm>
  );
};
