/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from 'react';
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme
} from '@aws-amplify/ui-react';
import { fetchByPath, getOverrideProps, validateField } from './utils';
import { generateClient } from '@aws-amplify/api';
import { listCourses } from '@/amplify-lms/graphql/queries';
import { createCategory, updateCourse } from '@/amplify-lms/graphql/mutations';
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles }
      }
    }
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== '' &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={'7rem'}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: 'pointer',
                  alignItems: 'center',
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor: index === selectedBadgeIndex ? '#B8CEF9' : ''
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: 'pointer',
                    paddingLeft: 3,
                    width: 20,
                    height: 20
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: 'M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z',
                      stroke: 'black'
                    }
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? 'Save' : 'Add'}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function CategoryCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    icon: '',
    name: '',
    Courses: []
  };
  const [icon, setIcon] = React.useState(initialValues.icon);
  const [name, setName] = React.useState(initialValues.name);
  const [Courses, setCourses] = React.useState(initialValues.Courses);
  const [CoursesLoading, setCoursesLoading] = React.useState(false);
  const [CoursesRecords, setCoursesRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setIcon(initialValues.icon);
    setName(initialValues.name);
    setCourses(initialValues.Courses);
    setCurrentCoursesValue(undefined);
    setCurrentCoursesDisplayValue('');
    setErrors({});
  };
  const [currentCoursesDisplayValue, setCurrentCoursesDisplayValue] =
    React.useState('');
  const [currentCoursesValue, setCurrentCoursesValue] =
    React.useState(undefined);
  const CoursesRef = React.createRef();
  const getIDValue = {
    Courses: (r) => JSON.stringify({ id: r?.id })
  };
  const CoursesIdSet = new Set(
    Array.isArray(Courses)
      ? Courses.map((r) => getIDValue.Courses?.(r))
      : getIDValue.Courses?.(Courses)
  );
  const getDisplayValue = {
    Courses: (r) => `${r?.title ? r?.title + ' - ' : ''}${r?.id}`
  };
  const validations = {
    icon: [],
    name: [{ type: 'Required' }],
    Courses: []
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const fetchCoursesRecords = async (value) => {
    setCoursesLoading(true);
    const newOptions = [];
    let newNext = '';
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ title: { contains: value } }, { id: { contains: value } }]
        }
      };
      if (newNext) {
        variables['nextToken'] = newNext;
      }
      const result = (
        await client.graphql({
          query: listCourses.replaceAll('__typename', ''),
          variables
        })
      )?.data?.listCourses?.items;
      var loaded = result.filter(
        (item) => !CoursesIdSet.has(getIDValue.Courses?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCoursesRecords(newOptions.slice(0, autocompleteLength));
    setCoursesLoading(false);
  };
  React.useEffect(() => {
    fetchCoursesRecords('');
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          icon,
          name,
          Courses
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === 'string' && value === '') {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            icon: modelFields.icon,
            name: modelFields.name
          };
          const category = (
            await client.graphql({
              query: createCategory.replaceAll('__typename', ''),
              variables: {
                input: {
                  ...modelFieldsToSave
                }
              }
            })
          )?.data?.createCategory;
          const promises = [];
          promises.push(
            ...Courses.reduce((promises, original) => {
              promises.push(
                client.graphql({
                  query: updateCourse.replaceAll('__typename', ''),
                  variables: {
                    input: {
                      id: original.id
                    }
                  }
                })
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join('\n');
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, 'CategoryCreateForm')}
      {...rest}
    >
      <TextField
        label="Icon"
        isRequired={false}
        isReadOnly={false}
        value={icon}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              icon: value,
              name,
              Courses
            };
            const result = onChange(modelFields);
            value = result?.icon ?? value;
          }
          if (errors.icon?.hasError) {
            runValidationTasks('icon', value);
          }
          setIcon(value);
        }}
        onBlur={() => runValidationTasks('icon', icon)}
        errorMessage={errors.icon?.errorMessage}
        hasError={errors.icon?.hasError}
        {...getOverrideProps(overrides, 'icon')}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              icon,
              name: value,
              Courses
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks('name', value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks('name', name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, 'name')}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              icon,
              name,
              Courses: values
            };
            const result = onChange(modelFields);
            values = result?.Courses ?? values;
          }
          setCourses(values);
          setCurrentCoursesValue(undefined);
          setCurrentCoursesDisplayValue('');
        }}
        currentFieldValue={currentCoursesValue}
        label={'Courses'}
        items={Courses}
        hasError={errors?.Courses?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks('Courses', currentCoursesValue)
        }
        errorMessage={errors?.Courses?.errorMessage}
        getBadgeText={getDisplayValue.Courses}
        setFieldValue={(model) => {
          setCurrentCoursesDisplayValue(
            model ? getDisplayValue.Courses(model) : ''
          );
          setCurrentCoursesValue(model);
        }}
        inputFieldRef={CoursesRef}
        defaultFieldValue={''}
      >
        <Autocomplete
          label="Courses"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Course"
          value={currentCoursesDisplayValue}
          options={CoursesRecords.map((r) => ({
            id: getIDValue.Courses?.(r),
            label: getDisplayValue.Courses?.(r)
          }))}
          isLoading={CoursesLoading}
          onSelect={({ id, label }) => {
            setCurrentCoursesValue(
              CoursesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCoursesDisplayValue(label);
            runValidationTasks('Courses', label);
          }}
          onClear={() => {
            setCurrentCoursesDisplayValue('');
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchCoursesRecords(value);
            if (errors.Courses?.hasError) {
              runValidationTasks('Courses', value);
            }
            setCurrentCoursesDisplayValue(value);
            setCurrentCoursesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks('Courses', currentCoursesDisplayValue)
          }
          errorMessage={errors.Courses?.errorMessage}
          hasError={errors.Courses?.hasError}
          ref={CoursesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, 'Courses')}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, 'CTAFlex')}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, 'ClearButton')}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, 'RightAlignCTASubFlex')}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, 'SubmitButton')}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
