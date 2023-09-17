import React from 'react';

interface ProgressProviderProps {
  valueStart: number;
  valueEnd: number;
  children: (value: number) => React.ReactNode;
}

const ProgressProvider = ({
  valueStart,
  valueEnd,
  children,
}: ProgressProviderProps) => {
  const [value, setValue] = React.useState(valueStart);
  React.useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value);
};
export default ProgressProvider;
