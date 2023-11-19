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
  SwitchField,
  Text,
  TextField,
  useTheme
} from '@aws-amplify/ui-react';
import { fetchByPath, getOverrideProps, validateField } from './utils';
import { generateClient } from 'aws-amplify/api';
import { listCourses } from '@/amplify-lms/graphql/queries';
import { createChapter } from '@/amplify-lms/graphql/mutations';
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
export default function ChapterCreateForm(props) {
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
    title: '',
    description: '',
    video: '',
    videoUrl: '',
    videoProvider: '',
    position: '',
    isPublished: false,
    isFree: false,
    Course: undefined
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [video, setVideo] = React.useState(initialValues.video);
  const [videoUrl, setVideoUrl] = React.useState(initialValues.videoUrl);
  const [videoProvider, setVideoProvider] = React.useState(
    initialValues.videoProvider
  );
  const [position, setPosition] = React.useState(initialValues.position);
  const [isPublished, setIsPublished] = React.useState(
    initialValues.isPublished
  );
  const [isFree, setIsFree] = React.useState(initialValues.isFree);
  const [Course, setCourse] = React.useState(initialValues.Course);
  const [CourseLoading, setCourseLoading] = React.useState(false);
  const [CourseRecords, setCourseRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setVideo(initialValues.video);
    setVideoUrl(initialValues.videoUrl);
    setVideoProvider(initialValues.videoProvider);
    setPosition(initialValues.position);
    setIsPublished(initialValues.isPublished);
    setIsFree(initialValues.isFree);
    setCourse(initialValues.Course);
    setCurrentCourseValue(undefined);
    setCurrentCourseDisplayValue('');
    setErrors({});
  };
  const [currentCourseDisplayValue, setCurrentCourseDisplayValue] =
    React.useState('');
  const [currentCourseValue, setCurrentCourseValue] = React.useState(undefined);
  const CourseRef = React.createRef();
  const getIDValue = {
    Course: (r) => JSON.stringify({ id: r?.id })
  };
  const CourseIdSet = new Set(
    Array.isArray(Course)
      ? Course.map((r) => getIDValue.Course?.(r))
      : getIDValue.Course?.(Course)
  );
  const getDisplayValue = {
    Course: (r) => `${r?.title ? r?.title + ' - ' : ''}${r?.id}`
  };
  const validations = {
    title: [{ type: 'Required' }],
    description: [],
    video: [],
    videoUrl: [],
    videoProvider: [],
    position: [{ type: 'Required' }],
    isPublished: [{ type: 'Required' }],
    isFree: [{ type: 'Required' }],
    Course: []
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
  const fetchCourseRecords = async (value) => {
    setCourseLoading(true);
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
        (item) => !CourseIdSet.has(getIDValue.Course?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCourseRecords(newOptions.slice(0, autocompleteLength));
    setCourseLoading(false);
  };
  React.useEffect(() => {
    fetchCourseRecords('');
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
          title,
          description,
          video,
          videoUrl,
          videoProvider,
          position,
          isPublished,
          isFree,
          Course
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
            title: modelFields.title,
            description: modelFields.description,
            video: modelFields.video,
            videoUrl: modelFields.videoUrl,
            videoProvider: modelFields.videoProvider,
            position: modelFields.position,
            isPublished: modelFields.isPublished,
            isFree: modelFields.isFree,
            courseId: modelFields?.Course?.id
          };
          await client.graphql({
            query: createChapter.replaceAll('__typename', ''),
            variables: {
              input: {
                ...modelFieldsToSave
              }
            }
          });
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
      {...getOverrideProps(overrides, 'ChapterCreateForm')}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              description,
              video,
              videoUrl,
              videoProvider,
              position,
              isPublished,
              isFree,
              Course
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks('title', value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks('title', title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, 'title')}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description: value,
              video,
              videoUrl,
              videoProvider,
              position,
              isPublished,
              isFree,
              Course
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks('description', value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks('description', description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, 'description')}
      ></TextField>
      <TextField
        label="Video"
        isRequired={false}
        isReadOnly={false}
        value={video}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              video: value,
              videoUrl,
              videoProvider,
              position,
              isPublished,
              isFree,
              Course
            };
            const result = onChange(modelFields);
            value = result?.video ?? value;
          }
          if (errors.video?.hasError) {
            runValidationTasks('video', value);
          }
          setVideo(value);
        }}
        onBlur={() => runValidationTasks('video', video)}
        errorMessage={errors.video?.errorMessage}
        hasError={errors.video?.hasError}
        {...getOverrideProps(overrides, 'video')}
      ></TextField>
      <TextField
        label="Video url"
        isRequired={false}
        isReadOnly={false}
        value={videoUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              video,
              videoUrl: value,
              videoProvider,
              position,
              isPublished,
              isFree,
              Course
            };
            const result = onChange(modelFields);
            value = result?.videoUrl ?? value;
          }
          if (errors.videoUrl?.hasError) {
            runValidationTasks('videoUrl', value);
          }
          setVideoUrl(value);
        }}
        onBlur={() => runValidationTasks('videoUrl', videoUrl)}
        errorMessage={errors.videoUrl?.errorMessage}
        hasError={errors.videoUrl?.hasError}
        {...getOverrideProps(overrides, 'videoUrl')}
      ></TextField>
      <TextField
        label="Video provider"
        isRequired={false}
        isReadOnly={false}
        value={videoProvider}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              video,
              videoUrl,
              videoProvider: value,
              position,
              isPublished,
              isFree,
              Course
            };
            const result = onChange(modelFields);
            value = result?.videoProvider ?? value;
          }
          if (errors.videoProvider?.hasError) {
            runValidationTasks('videoProvider', value);
          }
          setVideoProvider(value);
        }}
        onBlur={() => runValidationTasks('videoProvider', videoProvider)}
        errorMessage={errors.videoProvider?.errorMessage}
        hasError={errors.videoProvider?.hasError}
        {...getOverrideProps(overrides, 'videoProvider')}
      ></TextField>
      <TextField
        label="Position"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={position}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              description,
              video,
              videoUrl,
              videoProvider,
              position: value,
              isPublished,
              isFree,
              Course
            };
            const result = onChange(modelFields);
            value = result?.position ?? value;
          }
          if (errors.position?.hasError) {
            runValidationTasks('position', value);
          }
          setPosition(value);
        }}
        onBlur={() => runValidationTasks('position', position)}
        errorMessage={errors.position?.errorMessage}
        hasError={errors.position?.hasError}
        {...getOverrideProps(overrides, 'position')}
      ></TextField>
      <SwitchField
        label="Is published"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isPublished}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              description,
              video,
              videoUrl,
              videoProvider,
              position,
              isPublished: value,
              isFree,
              Course
            };
            const result = onChange(modelFields);
            value = result?.isPublished ?? value;
          }
          if (errors.isPublished?.hasError) {
            runValidationTasks('isPublished', value);
          }
          setIsPublished(value);
        }}
        onBlur={() => runValidationTasks('isPublished', isPublished)}
        errorMessage={errors.isPublished?.errorMessage}
        hasError={errors.isPublished?.hasError}
        {...getOverrideProps(overrides, 'isPublished')}
      ></SwitchField>
      <SwitchField
        label="Is free"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isFree}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              description,
              video,
              videoUrl,
              videoProvider,
              position,
              isPublished,
              isFree: value,
              Course
            };
            const result = onChange(modelFields);
            value = result?.isFree ?? value;
          }
          if (errors.isFree?.hasError) {
            runValidationTasks('isFree', value);
          }
          setIsFree(value);
        }}
        onBlur={() => runValidationTasks('isFree', isFree)}
        errorMessage={errors.isFree?.errorMessage}
        hasError={errors.isFree?.hasError}
        {...getOverrideProps(overrides, 'isFree')}
      ></SwitchField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              title,
              description,
              video,
              videoUrl,
              videoProvider,
              position,
              isPublished,
              isFree,
              Course: value
            };
            const result = onChange(modelFields);
            value = result?.Course ?? value;
          }
          setCourse(value);
          setCurrentCourseValue(undefined);
          setCurrentCourseDisplayValue('');
        }}
        currentFieldValue={currentCourseValue}
        label={'Course'}
        items={Course ? [Course] : []}
        hasError={errors?.Course?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks('Course', currentCourseValue)
        }
        errorMessage={errors?.Course?.errorMessage}
        getBadgeText={getDisplayValue.Course}
        setFieldValue={(model) => {
          setCurrentCourseDisplayValue(
            model ? getDisplayValue.Course(model) : ''
          );
          setCurrentCourseValue(model);
        }}
        inputFieldRef={CourseRef}
        defaultFieldValue={''}
      >
        <Autocomplete
          label="Course"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Course"
          value={currentCourseDisplayValue}
          options={CourseRecords.filter(
            (r) => !CourseIdSet.has(getIDValue.Course?.(r))
          ).map((r) => ({
            id: getIDValue.Course?.(r),
            label: getDisplayValue.Course?.(r)
          }))}
          isLoading={CourseLoading}
          onSelect={({ id, label }) => {
            setCurrentCourseValue(
              CourseRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCourseDisplayValue(label);
            runValidationTasks('Course', label);
          }}
          onClear={() => {
            setCurrentCourseDisplayValue('');
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchCourseRecords(value);
            if (errors.Course?.hasError) {
              runValidationTasks('Course', value);
            }
            setCurrentCourseDisplayValue(value);
            setCurrentCourseValue(undefined);
          }}
          onBlur={() => runValidationTasks('Course', currentCourseDisplayValue)}
          errorMessage={errors.Course?.errorMessage}
          hasError={errors.Course?.hasError}
          ref={CourseRef}
          labelHidden={true}
          {...getOverrideProps(overrides, 'Course')}
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
