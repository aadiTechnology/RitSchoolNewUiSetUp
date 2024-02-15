import { format, setHours, setMinutes, subDays } from 'date-fns';
import { useFormik } from 'formik';
import _ from 'lodash';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import type { FC } from 'react';
import * as Yup from 'yup';

import {
  BackupTwoTone,
  CheckCircleTwoTone,
  CloseTwoTone,
  DeleteTwoTone
} from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Divider,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
  Zoom,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { Event } from 'src/models/calendar';
import { deleteEvent } from 'src/slices/calendar';
import { useDispatch } from 'src/store';

const VisuallyHiddenInput = styled('input')({
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  top: 0,
  right: 0,
  opacity: 0
});

interface AddEditEventModalProps {
  event?: Event;
  onAddComplete?: () => void;
  onCancel?: () => void;
  onDeleteComplete?: () => void;
  onEditComplete?: () => void;
  range?: { start: number; end: number };
}

const getInitialValues = (
  event?: Event,
  range?: { start: number; end: number }
) => {
  if (event) {
    return _.merge(
      {},
      {
        allDay: false,
        color: '',
        description: '',
        end: setHours(setMinutes(subDays(new Date(), 3), 30), 10),
        start: setHours(setMinutes(subDays(new Date(), 3), 60), 8),
        title: '',
        submit: null
      },
      event
    );
  }

  if (range) {
    return _.merge(
      {},
      {
        allDay: false,
        color: '',
        description: '',
        end: new Date(range.end),
        start: new Date(range.start),
        title: '',
        submit: null
      },
      event
    );
  }

  return {
    allDay: false,
    color: '',
    description: '',
    end: setHours(setMinutes(subDays(new Date(), 1), 35), 20),
    start: setHours(setMinutes(subDays(new Date(), 1), 25), 17),
    title: '',
    submit: null
  };
};

const EventDrawer: FC<AddEditEventModalProps> = ({
  event,
  onAddComplete,
  onCancel,
  onDeleteComplete,
  onEditComplete,
  range
}) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { t }: { t: any } = useTranslation();
  const isCreating = !event;
  const eventsForm = useFormik({
    initialValues: {
      eventTitle: '',
      description: '',
      eventStartDate: format(new Date(), 'dd-MM-yyyy'),
      eventEndDate: format(new Date(), 'dd-MM-yyyy'),
      associatedClasses: [],
      displayOnHompage: false,
      eventPhoto: null
    },
    validationSchema: Yup.object().shape({
      eventTitle: Yup.string().required(t('Event title is required')),
      description: Yup.string().required(t('Description is required')),
      eventStartDate: Yup.string().required(t('Start date is required')),
      eventEndDate: Yup.string().required(t('End date is required')),
      associatedClasses: Yup.array().required(
        t('Associated classes are required')
      ),
      displayOnHompage: Yup.boolean().required(
        t('Display on homepage is required')
      )
    }),
    onSubmit: async (
      values,
      { resetForm, setErrors, setStatus, setSubmitting }
    ) => {
      try {
      } catch (err) {
        setSubmitting(false);
      }
    }
  });

  const handleDelete = async (): Promise<void> => {
    try {
      dispatch(deleteEvent(event.id));
      onDeleteComplete();

      enqueueSnackbar(t('The event has been deleted'), {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        width: {
          xs: '100%',
          md: '480px'
        }
      }}
    >
      <Box
        p={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="h4">Events Management</Typography>
        <IconButton onClick={onCancel} aria-label="close">
          <CloseTwoTone />
        </IconButton>
      </Box>
      <Divider />
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12}>
          <TextField
            label={'Event Title'}
            size={'small'}
            fullWidth
            name={'eventTitle'}
            value={eventsForm.values.eventTitle}
            onChange={eventsForm.handleChange}
            error={Boolean(
              eventsForm.touched.eventTitle && eventsForm.errors.eventTitle
            )}
            helperText={
              eventsForm.touched.eventTitle && eventsForm.errors.eventTitle
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={'Description'}
            size={'small'}
            fullWidth
            name={'description'}
            value={eventsForm.values.description}
            onChange={eventsForm.handleChange}
            error={Boolean(
              eventsForm.touched.description && eventsForm.errors.description
            )}
            helperText={
              eventsForm.touched.description && eventsForm.errors.description
            }
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={'Start Date'}
            size={'small'}
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            name={'eventStartDate'}
            value={eventsForm.values.eventStartDate}
            onChange={eventsForm.handleChange}
            error={Boolean(
              eventsForm.touched.eventStartDate &&
                eventsForm.errors.eventStartDate
            )}
            helperText={
              eventsForm.touched.eventStartDate &&
              eventsForm.errors.eventStartDate
            }
            type={'date'}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={'End Date'}
            size={'small'}
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            name={'eventEndDate'}
            value={eventsForm.values.eventEndDate}
            onChange={eventsForm.handleChange}
            error={Boolean(
              eventsForm.touched.eventEndDate && eventsForm.errors.eventEndDate
            )}
            helperText={
              eventsForm.touched.eventEndDate && eventsForm.errors.eventEndDate
            }
            type={'date'}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <FormLabel sx={{ mr: 1 }}>Associated Classes</FormLabel>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Select All"
            />
          </Typography>
          <Stack gap={1}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Nursery"
            />
            <Stack direction={'row'} gap={1}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="A"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="B"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="C"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="D"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="E"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="F"
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={eventsForm.values.displayOnHompage}
                onChange={eventsForm.handleChange}
                name="displayOnHompage"
              />
            }
            label="Display on homepage"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ mb: 1 }}>
            <FormLabel>Select Event Photo</FormLabel>
          </Typography>
          {!eventsForm.values.eventPhoto && (
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
                  eventsForm.setFieldValue('eventPhoto', event.target.files[0]);
                }}
              />
            </Button>
          )}
          {/* while file is selected */}
          {eventsForm.values.eventPhoto && (
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
              {eventsForm.values.eventPhoto?.name}
              <IconButton
                color={'error'}
                onClick={() => {
                  eventsForm.setFieldValue('eventPhoto', null);
                }}
              >
                <DeleteTwoTone />
              </IconButton>
            </Box>
          )}
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: 1,
          p: 2
        }}
      >
        <Button variant="outlined" color="primary" onClick={onCancel}>
          {t('Close')}
        </Button>
        <Button
          variant="contained"
          type="submit"
          startIcon={
            eventsForm.isSubmitting ? <CircularProgress size="1rem" /> : null
          }
          disabled={eventsForm.isSubmitting}
          color="primary"
          onClick={() => eventsForm.handleSubmit()}
        >
          {t('Save')}
        </Button>
      </Box>
    </Box>
  );
};

EventDrawer.propTypes = {
  // @ts-ignore
  event: PropTypes.object,
  // @ts-ignore
  range: PropTypes.object,
  onAddComplete: PropTypes.func,
  onCancel: PropTypes.func,
  onDeleteComplete: PropTypes.func,
  onEditComplete: PropTypes.func
};

EventDrawer.defaultProps = {
  onAddComplete: () => {},
  onCancel: () => {},
  onDeleteComplete: () => {},
  onEditComplete: () => {}
};

export default EventDrawer;
