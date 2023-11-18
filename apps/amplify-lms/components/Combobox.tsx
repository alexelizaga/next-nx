import React from 'react';
import { Autocomplete } from '@aws-amplify/ui-react';

interface ComboboxProps {
  options: { label: string; value: string }[];
  value?: string;
  onChange: (value: string) => void;
}

const Combobox = ({
  options,
  value,
  onChange: onChangeValue
}: ComboboxProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeValue(event.target.value);
  };

  const autocompleteOptions = React.useMemo(() => {
    return options.map((option) => ({ id: option.value, label: option.label }));
  }, [options]);

  return (
    <Autocomplete
      label="ComboBox"
      placeholder="Select option..."
      options={autocompleteOptions}
      value={value}
      onChange={onChange}
    />
  );
};

export default Combobox;
