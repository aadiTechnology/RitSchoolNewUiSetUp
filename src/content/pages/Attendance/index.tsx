import {
  CalendarMonthTwoTone,
  PersonTwoTone,
  QuestionMarkTwoTone,
  SaveTwoTone
} from '@mui/icons-material';
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  alpha,
  useTheme
} from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import BreadCrumbsContainer from 'src/components/BreadCrumbsContainer';
import AttendanceCalendar from 'src/components/Calendars/AttendanceCalendar';
import Page from 'src/components/Page';
import { useAllPrimaryClassTeachersService } from 'src/hooks/service-hooks/useAllPrimaryClassTeachersService';
import storageUtil, { storageKeys } from 'src/utils/storage';

type Props = {};

const Attendance = (props: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const academicYearId = JSON.parse(
    storageUtil.get(storageKeys.accessToken.name)
  )?.TeacherDetails?.AcademicYearId;
  const schoolId = JSON.parse(storageUtil.get(storageKeys.accessToken.name))
    ?.TeacherDetails?.SchoolId;
  const teacherId = JSON.parse(storageUtil.get(storageKeys.accessToken.name))
    ?.TeacherDetails?.TeacherId;

  const { teachers } = useAllPrimaryClassTeachersService({
    body: {
      asAcadmicYearId: academicYearId,
      asSchoolId: schoolId,
      asTeacher_id: teacherId
    }
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`
    }
  ];
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
  ];

  console.log(teachers);

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
              <Tooltip title={'Show Attendance Overview'}>
                <Button variant={'text'} color={'primary'} sx={{ p: 0 }}>
                  Count: 1 / 2285
                </Button>
              </Tooltip>
              <Box sx={{ minWidth: 220 }}>
                <Autocomplete
                  fullWidth
                  id="free-solo-demo"
                  freeSolo
                  options={['Teacher One']}
                  value={'Teacher One'}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Teacher Name"
                      size={'small'}
                    />
                  )}
                />
              </Box>
              <Tooltip title={'Individual Attendance'}>
                <IconButton
                  sx={{
                    color: theme.palette.primary.main,
                    background: alpha(theme.palette.primary.main, 0.2),
                    '&:hover': {
                      background: alpha(theme.palette.primary.main, 0.4)
                    }
                  }}
                  onClick={() => {
                    navigate('individual-attendance');
                  }}
                >
                  <PersonTwoTone />
                </IconButton>
              </Tooltip>
              <Tooltip title={'Monthwise Attendance'}>
                <IconButton
                  color={'primary'}
                  sx={{
                    background: alpha(theme.palette.primary.main, 0.2),
                    '&:hover': {
                      background: alpha(theme.palette.primary.main, 0.4)
                    }
                  }}
                  onClick={() => {
                    navigate('monthwise-attendance');
                  }}
                >
                  <CalendarMonthTwoTone />
                </IconButton>
              </Tooltip>
              <Tooltip
                title={
                  'Mark attendance of each student from your class for the select date. Click on "Delete" button to delete attendance of selected date. Delete facility will be available only if user have "Edit" facility.'
                }
              >
                <IconButton
                  sx={{
                    color: theme.palette.primary.main,
                    background: alpha(theme.palette.primary.main, 0.2),
                    '&:hover': {
                      background: alpha(theme.palette.primary.main, 0.4)
                    }
                  }}
                >
                  <QuestionMarkTwoTone />
                </IconButton>
              </Tooltip>
              <Tooltip title={'Save Attendance'}>
                <IconButton
                  color="primary"
                  sx={{
                    background: alpha(theme.palette.primary.main, 0.2),
                    '&:hover': {
                      color: theme.palette.success.main,
                      background: alpha(theme.palette.success.main, 0.4)
                    }
                  }}
                >
                  <SaveTwoTone />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </Box>
        {/* Content */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                mt: theme.spacing(2),
                backgroundColor: theme.palette.common.white,
                borderRadius: theme.general.borderRadius,
                padding: theme.spacing(2)
              }}
            >
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 15 }
                  }
                }}
                pageSizeOptions={[15, 50, 100]}
                checkboxSelection
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                mt: theme.spacing(2),
                backgroundColor: theme.palette.common.white,
                borderRadius: theme.general.borderRadius,
                padding: theme.spacing(2)
              }}
            >
              <AttendanceCalendar />
            </Box>
          </Grid>
        </Grid>
      </Page>
    </>
  );
};

export default Attendance;
