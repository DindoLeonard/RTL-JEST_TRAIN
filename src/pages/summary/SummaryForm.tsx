import React, { useState } from 'react';
import { Form, FormGroup, FormCheck, Button } from 'react-bootstrap';

const SummaryForm = (): React.ReactElement => {
  const [disableButton, setDisableButton] = useState<boolean>(true);

  const onCheckboxButtonClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisableButton(!e.target.checked);
  };

  const checkboxLabel = <span>Enable Button</span>;

  return (
    <div>
      <Form>
        <FormGroup controlId="checkbox">
          <FormCheck
            type="checkbox"
            checked={!disableButton}
            onChange={onCheckboxButtonClick}
            label={checkboxLabel}
          />
        </FormGroup>
      </Form>
      <Button variant="primary" type="submit" disabled={disableButton}>
        Button
      </Button>
      {/* <label htmlFor="checkbox-button">Enable Button</label>
      <input
        id="checkbox-button"
        type="checkbox"
        defaultChecked={!disableButton}
        onChange={onCheckboxButtonClick}
      /> */}
    </div>
  );
};

export default SummaryForm;
