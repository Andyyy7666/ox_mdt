import React from 'react';
import ListContainer from '../../components/ListContainer';
import { chargeSearchAtoms, useSetChargeSearchDebounceValue } from '../../../../state';
import ChargeCardsList from '../reports/components/modals/editCharges/ChargeCardsList';
import ListSearch from '../../components/ListSearch';
import { Box, createStyles, Stack } from '@mantine/core';
import { queryClient } from '../../../../main';
import { Charge } from '../../../../typings';

const useStyles = createStyles((theme) => ({
  searchContainer: {
    backgroundColor: theme.colors.durple[6],
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.md,
    width: '100%',
  },
  chargesContainer: {
    backgroundColor: theme.colors.durple[6],
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.md,
    width: '100%',
    flex: 1,
    overflow: 'scroll',
  },
}));

const Charges: React.FC = () => {
  const setChargeSearchDebounceValue = useSetChargeSearchDebounceValue();
  const { classes } = useStyles();

  React.useEffect(() => {
    return () => {
      queryClient.setQueriesData<{ pageParams: number[]; pages: [string, Charge[]][] }>(
        ['charges'],
        (data) =>
          data && {
            pages: data.pages.slice(0, 1),
            pageParams: data.pageParams.slice(0, 1),
          }
      );
    };
  }, []);

  return (
    <Stack h="100%" spacing="xs">
      <Box className={classes.searchContainer} p="xs">
        <ListSearch valueAtom={chargeSearchAtoms.currentValueAtom} setDebouncedValue={setChargeSearchDebounceValue} />
      </Box>
      <Box className={classes.chargesContainer} p="xs">
        <ListContainer
          debounceAtom={chargeSearchAtoms.isDebouncingAtom}
          ListComponent={ChargeCardsList}
          setDebouncedSearch={setChargeSearchDebounceValue}
        />
      </Box>
    </Stack>
  );
};

export default Charges;
