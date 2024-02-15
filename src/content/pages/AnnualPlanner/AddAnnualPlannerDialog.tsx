import styled from '@emotion/styled';
import {
  BackupTwoTone,
  CheckCircleTwoTone,
  CloseTwoTone,
  DeleteTwoTone
} from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useTheme
} from '@mui/material';
import { useState } from 'react';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const VisuallyHiddenInput = styled('input')({
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  top: 0,
  right: 0,
  opacity: 0
});

const AddAnnualPlannerDialog = ({ open, setOpen }: Props) => {
  const theme = useTheme();
  const [annualPlannerFile, setAnnualPlannerFile] = useState<any>();

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      maxWidth={'sm'}
      fullWidth
    >
      <DialogTitle
        sx={{
          backgroundColor: theme.palette.primary.main
        }}
      >
        <Typography
          variant={'h4'}
          sx={{
            color: theme.palette.common.white,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          Upload Annual Planner
          <IconButton
            sx={{
              p: 0,
              color: theme.palette.common.white
            }}
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseTwoTone />
          </IconButton>
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ mt: 2 }}>
          {/* while file is not selected */}
          {!annualPlannerFile && (
            <Button
              variant={'outlined'}
              color={'primary'}
              sx={{ width: '100%', py: 3, border: '2px dashed' }}
              startIcon={<BackupTwoTone />}
            >
              Click to Upload
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => {
                  setAnnualPlannerFile(event.target.files[0]);
                }}
              />
            </Button>
          )}
          {/* while file is selected */}
          {annualPlannerFile && (
            <Box
              sx={{
                width: '100%',
                border: (theme) => `2px dashed ${theme.colors.primary.main}`,
                display: 'flex',
                alignItems: 'center',
                fontSize: '18px',
                gap: 2,
                p: 1
              }}
            >
              <CheckCircleTwoTone />
              {annualPlannerFile?.name}
              <IconButton
                color={'error'}
                onClick={() => {
                  setAnnualPlannerFile(null);
                }}
              >
                <DeleteTwoTone />
              </IconButton>
            </Box>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setOpen(false);
          }}
        >
          Cancel
        </Button>
        <Button color={'primary'} variant={'contained'}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddAnnualPlannerDialog;
