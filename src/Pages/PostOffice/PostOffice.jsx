import AsyncSelect from 'react-select/async';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const PostOffice = () => {
  return (
    <label>
      <AsyncSelect options={options} />
    </label>
  );
};
