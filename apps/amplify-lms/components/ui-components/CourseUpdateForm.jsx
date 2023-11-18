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
import { getCourse, listCategories } from '../../graphql/queries';
import { updateCourse } from '../../graphql/mutations';
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
export default function CourseUpdateForm(props) {
  const {
    id: idProp,
    course: courseModelProp,
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
    image: '',
    price: '',
    isPublished: false,
    Category: undefined
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [image, setImage] = React.useState(initialValues.image);
  const [price, setPrice] = React.useState(initialValues.price);
  const [isPublished, setIsPublished] = React.useState(
    initialValues.isPublished
  );
  const [Category, setCategory] = React.useState(initialValues.Category);
  const [CategoryLoading, setCategoryLoading] = React.useState(false);
  const [CategoryRecords, setCategoryRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = courseRecord
      ? { ...initialValues, ...courseRecord, Category }
      : initialValues;
    setTitle(cleanValues.title);
    setDescription(cleanValues.description);
    setImage(cleanValues.image);
    setPrice(cleanValues.price);
    setIsPublished(cleanValues.isPublished);
    setCategory(cleanValues.Category);
    setCurrentCategoryValue(undefined);
    setCurrentCategoryDisplayValue('');
    setErrors({});
  };
  const [courseRecord, setCourseRecord] = React.useState(courseModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCourse.replaceAll('__typename', ''),
              variables: { id: idProp }
            })
          )?.data?.getCourse
        : courseModelProp;
      const CategoryRecord = record ? await record.Category : undefined;
      setCategory(CategoryRecord);
      setCourseRecord(record);
    };
    queryData();
  }, [idProp, courseModelProp]);
  React.useEffect(resetStateValues, [courseRecord, Category]);
  const [currentCategoryDisplayValue, setCurrentCategoryDisplayValue] =
    React.useState('');
  const [currentCategoryValue, setCurrentCategoryValue] =
    React.useState(undefined);
  const CategoryRef = React.createRef();
  const getIDValue = {
    Category: (r) => JSON.stringify({ id: r?.id })
  };
  const CategoryIdSet = new Set(
    Array.isArray(Category)
      ? Category.map((r) => getIDValue.Category?.(r))
      : getIDValue.Category?.(Category)
  );
  const getDisplayValue = {
    Category: (r) => `${r?.icon ? r?.icon + ' - ' : ''}${r?.id}`
  };
  const validations = {
    title: [{ type: 'Required' }],
    description: [],
    image: [],
    price: [],
    isPublished: [],
    Category: []
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
  const fetchCategoryRecords = async (value) => {
    setCategoryLoading(true);
    const newOptions = [];
    let newNext = '';
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ icon: { contains: value } }, { id: { contains: value } }]
        }
      };
      if (newNext) {
        variables['nextToken'] = newNext;
      }
      const result = (
        await client.graphql({
          query: listCategories.replaceAll('__typename', ''),
          variables
        })
      )?.data?.listCategories?.items;
      var loaded = result.filter(
        (item) => !CategoryIdSet.has(getIDValue.Category?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCategoryRecords(newOptions.slice(0, autocompleteLength));
    setCategoryLoading(false);
  };
  React.useEffect(() => {
    fetchCategoryRecords('');
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
          description: description ?? null,
          image: image ?? null,
          price: price ?? null,
          isPublished: isPublished ?? null,
          Category: Category ?? null
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
            description: modelFields.description ?? null,
            image: modelFields.image ?? null,
            price: modelFields.price ?? null,
            isPublished: modelFields.isPublished ?? null,
            categoryId: modelFields?.Category?.id ?? null
          };
          await client.graphql({
            query: updateCourse.replaceAll('__typename', ''),
            variables: {
              input: {
                id: courseRecord.id,
                ...modelFieldsToSave
              }
            }
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join('\n');
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, 'CourseUpdateForm')}
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
              image,
              price,
              isPublished,
              Category
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
              image,
              price,
              isPublished,
              Category
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
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              image: value,
              price,
              isPublished,
              Category
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks('image', value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks('image', image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, 'image')}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              description,
              image,
              price: value,
              isPublished,
              Category
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks('price', value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks('price', price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, 'price')}
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
              image,
              price,
              isPublished: value,
              Category
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              title,
              description,
              image,
              price,
              isPublished,
              Category: value
            };
            const result = onChange(modelFields);
            value = result?.Category ?? value;
          }
          setCategory(value);
          setCurrentCategoryValue(undefined);
          setCurrentCategoryDisplayValue('');
        }}
        currentFieldValue={currentCategoryValue}
        label={'Category'}
        items={Category ? [Category] : []}
        hasError={errors?.Category?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks('Category', currentCategoryValue)
        }
        errorMessage={errors?.Category?.errorMessage}
        getBadgeText={getDisplayValue.Category}
        setFieldValue={(model) => {
          setCurrentCategoryDisplayValue(
            model ? getDisplayValue.Category(model) : ''
          );
          setCurrentCategoryValue(model);
        }}
        inputFieldRef={CategoryRef}
        defaultFieldValue={''}
      >
        <Autocomplete
          label="Category"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Category"
          value={currentCategoryDisplayValue}
          options={CategoryRecords.filter(
            (r) => !CategoryIdSet.has(getIDValue.Category?.(r))
          ).map((r) => ({
            id: getIDValue.Category?.(r),
            label: getDisplayValue.Category?.(r)
          }))}
          isLoading={CategoryLoading}
          onSelect={({ id, label }) => {
            setCurrentCategoryValue(
              CategoryRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCategoryDisplayValue(label);
            runValidationTasks('Category', label);
          }}
          onClear={() => {
            setCurrentCategoryDisplayValue('');
          }}
          defaultValue={Category}
          onChange={(e) => {
            let { value } = e.target;
            fetchCategoryRecords(value);
            if (errors.Category?.hasError) {
              runValidationTasks('Category', value);
            }
            setCurrentCategoryDisplayValue(value);
            setCurrentCategoryValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks('Category', currentCategoryDisplayValue)
          }
          errorMessage={errors.Category?.errorMessage}
          hasError={errors.Category?.hasError}
          ref={CategoryRef}
          labelHidden={true}
          {...getOverrideProps(overrides, 'Category')}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, 'CTAFlex')}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || courseModelProp)}
          {...getOverrideProps(overrides, 'ResetButton')}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, 'RightAlignCTASubFlex')}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || courseModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, 'SubmitButton')}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
