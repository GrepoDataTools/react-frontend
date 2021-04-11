import { Button, IconButton, Menu, MenuItem, TextField } from '@material-ui/core';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeWorld } from '../../../../redux/global/global.reducer';
import { State } from '../../../../redux/reducer';
import { getStatisticsStart } from '../../../../redux/scoreboard/scoreboard.reducer';
import { Divider, WorldPickerWrapper } from './WorldPicker.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

const WorldPicker: React.FC = () => {
  const [marketMenuAnchor, setMarketMenuAnchor] = useState<(EventTarget & HTMLButtonElement) | null>(null);
  const [worldMenuAnchor, setWorldMenuAnchor] = useState<(EventTarget & HTMLButtonElement) | null>(null);

  const dispatch = useDispatch();
  const { world, market, activeWorldsList } = useSelector((state: State) => state.global);

  const toggleMarketMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    setMarketMenuAnchor(event.currentTarget);
  const toggleWorldMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    setWorldMenuAnchor(event.currentTarget);
  const getWorldName = (world: string) =>
    activeWorldsList?.data
      ?.find((marketShard) => marketShard.server === market)
      ?.worlds.find((worldShard) => worldShard.val === world)?.name;

  const handleClose = (menu: 'market' | 'world') =>
    menu === 'market' ? setMarketMenuAnchor(null) : setWorldMenuAnchor(null);
  const handleReload = () => dispatch(getStatisticsStart());

  return (
    <React.Fragment>
      <WorldPickerWrapper>
        <Button
          onClick={toggleMarketMenu}
          startIcon={<img alt="market" src={`/images/flags/${market}.svg`} height="16px" width="24px" />}
        >
          {market}
        </Button>
        <Divider />
        <Button onClick={toggleWorldMenu}>{`${world} - ${getWorldName(world || '')}`}</Button>
        <Divider />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            InputProps={{
              disableUnderline: true,
              style: { height: '100%', width: '90%', display: 'flex', alignSelf: 'center' },
              fullWidth: true,
            }}
            value={new Date()}
            onChange={() => console.log('d')}
            renderInput={(params) => <TextField {...params} helperText={null} variant="standard" />}
          />
        </LocalizationProvider>
        <Divider />
        <IconButton onClick={handleReload}>
          <FontAwesomeIcon icon={faRedo} size={'xs'} />
        </IconButton>
      </WorldPickerWrapper>
      <Menu
        anchorEl={marketMenuAnchor}
        keepMounted
        open={Boolean(marketMenuAnchor)}
        onClose={() => handleClose('market')}
      >
        {activeWorldsList.data?.map(({ server, worlds }) => (
          <MenuItem
            onClick={() => {
              handleClose('market');
              dispatch(changeWorld({ market: server, world: worlds[0].val }));
              dispatch(getStatisticsStart());
            }}
          >
            <img
              alt="market"
              src={`/images/flags/${server}.svg`}
              height="16px"
              width="24px"
              style={{ marginRight: 10 }}
            />
            {server}
          </MenuItem>
        ))}
      </Menu>
      <Menu
        id="simple-menu"
        anchorEl={worldMenuAnchor}
        keepMounted
        open={Boolean(worldMenuAnchor)}
        onClose={() => handleClose('world')}
      >
        {activeWorldsList.data
          ?.filter(({ server }) => server === market)[0]
          .worlds.map(({ val, name }) => (
            <MenuItem
              onClick={() => {
                handleClose('world');
                dispatch(changeWorld({ market: market || 'en', world: val }));
                dispatch(getStatisticsStart());
              }}
            >
              {val} - {name}
            </MenuItem>
          ))}
      </Menu>
    </React.Fragment>
  );
};

export default WorldPicker;
