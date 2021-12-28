import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const SummaryForm = (): React.ReactElement => {
  const [disableButton, setDisableButton] = useState<boolean>(true);

  const onCheckboxButtonClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisableButton(!e.target.checked);
  };

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox defaultChecked={false} onChange={onCheckboxButtonClick} />
          }
          label="Enable Button"
        />
      </FormGroup>
      <Button disabled={disableButton}>Button</Button>
    </div>
  );
};

export default SummaryForm;
