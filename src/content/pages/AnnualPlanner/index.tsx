import {
  AddTwoTone,
  CalendarMonthTwoTone,
  InfoTwoTone,
  QuestionMarkTwoTone
} from '@mui/icons-material';
import {
  Box,
  IconButton,
  Stack,
  Tooltip,
  alpha,
  useTheme
} from '@mui/material';
import { useState } from 'react';
import BreadCrumbsContainer from 'src/components/BreadCrumbsContainer';
import AnnualPlannerCalendar from 'src/components/Calendars/AnnualPlannerCalendar';
import Page from 'src/components/Page';
import AddAnnualPlannerDialog from './AddAnnualPlannerDialog';

type Props = {};

const AnnualPlanner = (props: Props) => {
  const theme = useTheme();
  const [openAddAnnualPlannerDialog, setOpenAddAnnualPlannerDialog] =
    useState(false);

  return (
    <>
      <Page>
        <Box>
          {/* Header */}
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <BreadCrumbsContainer />
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              gap={1}
            >
              <Tooltip
                title={
                  'These events may change due to unavoidable reasons without prior notice.'
                }
              >
                <IconButton
                  sx={{
                    color: theme.palette.warning.main,
                    background: alpha(theme.palette.warning.main, 0.2),
                    '&:hover': {
                      background: alpha(theme.palette.warning.main, 0.4)
                    }
                  }}
                >
                  <InfoTwoTone />
                </IconButton>
              </Tooltip>
              <Tooltip
                title={
                  'Annual planner with detailed event description of your school.'
                }
              >
                <IconButton
                  sx={{
                    color: theme.palette.info.main,
                    background: alpha(theme.palette.info.main, 0.2),
                    '&:hover': {
                      background: alpha(theme.palette.info.main, 0.4)
                    }
                  }}
                >
                  <QuestionMarkTwoTone />
                </IconButton>
              </Tooltip>
              <Tooltip title={'Events Overview'}>
                <IconButton
                  color={'primary'}
                  sx={{
                    background: alpha(theme.palette.primary.main, 0.2),
                    '&:hover': {
                      background: alpha(theme.palette.primary.main, 0.4)
                    }
                  }}
                >
                  <CalendarMonthTwoTone />
                </IconButton>
              </Tooltip>
              <Tooltip title={'Add Annual Planner'}>
                <IconButton
                  color="primary"
                  sx={{
                    background: alpha(theme.palette.primary.main, 0.2),
                    '&:hover': {
                      background: alpha(theme.palette.primary.main, 0.4)
                    }
                  }}
                  onClick={() => setOpenAddAnnualPlannerDialog(true)}
                >
                  <AddTwoTone />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </Box>
        {/* Content */}
        <Box
          sx={{
            mt: theme.spacing(2),
            backgroundColor: theme.palette.common.white,
            borderRadius: theme.general.borderRadius,
            padding: theme.spacing(2)
          }}
        >
          <AnnualPlannerCalendar />
        </Box>
      </Page>
      {/* Annual Planner Dialog */}
      {openAddAnnualPlannerDialog && (
        <AddAnnualPlannerDialog
          open={openAddAnnualPlannerDialog}
          setOpen={setOpenAddAnnualPlannerDialog}
        />
      )}
    </>
  );
};

export default AnnualPlanner;
