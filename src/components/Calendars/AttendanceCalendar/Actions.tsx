import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { useState, type ElementType, type FC, type ReactNode } from 'react';

import ViewAgendaTwoToneIcon from '@mui/icons-material/ViewAgendaTwoTone';

import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import CalendarViewMonthTwoToneIcon from '@mui/icons-material/CalendarViewMonthTwoTone';
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import ViewDayTwoToneIcon from '@mui/icons-material/ViewDayTwoTone';
import ViewWeekTwoToneIcon from '@mui/icons-material/ViewWeekTwoTone';
import { useTranslation } from 'react-i18next';
import type { View } from 'src/models/calendar';

interface ActionsProps {
  children?: ReactNode;
  className?: string;
  date: Date;
  onNext?: () => void;
  onPrevious?: () => void;
  onToday?: () => void;
  handleCreateEvent?: () => void;
  changeView?: (view: View) => void;
  view: View;
}

interface ViewOption {
  label: string;
  value: View;
  icon: ElementType;
}

const viewOptions: ViewOption[] = [
  {
    label: 'Month',
    value: 'dayGridMonth',
    icon: CalendarViewMonthTwoToneIcon
  },
  {
    label: 'Week',
    value: 'timeGridWeek',
    icon: ViewWeekTwoToneIcon
  },
  {
    label: 'Day',
    value: 'timeGridDay',
    icon: ViewDayTwoToneIcon
  },
  {
    label: 'Agenda',
    value: 'listWeek',
    icon: ViewAgendaTwoToneIcon
  }
];

const Actions: FC<ActionsProps> = ({
  date,
  onNext,
  onPrevious,
  onToday,
  changeView,
  view
}) => {
  const { t }: { t: any } = useTranslation();
  const [filterEl, setFilterEl] = useState<HTMLButtonElement | null>(null);
  const [openFilters, setOpenFilters] = useState(false);

  const handleOpenFilters = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenFilters(true);
    setFilterEl(event.currentTarget);
  };

  const handleCloseFilters = () => {
    setOpenFilters(false);
    setFilterEl(null);
  };

  return (
    <Grid
      container
      spacing={2}
      pb={1}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid
        item
        sx={{
          display: { xs: 'none', sm: 'inline-block' }
        }}
      >
        <Typography variant="h3" color="text.primary">
          {format(date, 'MMMM yyyy')}
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          display: { xs: 'none', sm: 'inline-block' }
        }}
      ></Grid>
      <Grid item>
        <Tooltip arrow placement="top" title={t('Previous Day')}>
          <IconButton color="primary" onClick={onPrevious}>
            <ArrowBackTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Tooltip arrow placement="top" title={t('Today')}>
          <IconButton
            color="primary"
            sx={{
              mx: 1
            }}
            onClick={onToday}
          >
            <TodayTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Tooltip arrow placement="top" title={t('Next Day')}>
          <IconButton color="primary" onClick={onNext}>
            <ArrowForwardTwoToneIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

Actions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  onToday: PropTypes.func,
  handleCreateEvent: PropTypes.func,
  changeView: PropTypes.func,
  view: PropTypes.oneOf([
    'dayGridMonth',
    'timeGridWeek',
    'timeGridDay',
    'listWeek'
  ])
};

Actions.defaultProps = {
  onNext: () => {},
  onPrevious: () => {},
  onToday: () => {},
  handleCreateEvent: () => {},
  changeView: () => {}
};

export default Actions;
