import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const TCuentasSelect = () => {
  return (
    <>
      
      <Select 
        options={options} 
        placeholder="Tipo de Cuenta"
        className="text-black h-50"
       />
    </>
  );
}
