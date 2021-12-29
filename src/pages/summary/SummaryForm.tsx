import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Popover,
  Typography,
} from '@mui/material';

const SummaryForm = (): React.ReactElement => {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const onCheckboxButtonClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisableButton(!e.target.checked);
  };

  const handlePopoverOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <>
              <Checkbox
                defaultChecked={false}
                onChange={onCheckboxButtonClick}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                aria-owns={open ? 'mouse-over-popover' : undefined}
              />

              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography sx={{ p: 1 }}>Popover</Typography>
              </Popover>
            </>
          }
          label="Enable Button"
        />
      </FormGroup>
      <Button disabled={disableButton} color="primary" variant="contained">
        Button
      </Button>
    </div>
  );
};

export default SummaryForm;
