import React from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { SwitcherWrapper } from './Switcher.styled';
import { useDispatch, useSelector } from 'react-redux';
import { ActiveView } from '../../../../types/Scoreboard';
import { setActiveView } from '../../../../redux/scoreboard/scoreboard.reducer';
import Helmet from '../../../../assets/icons/helmet.png';
import AllianceFlag from '../../../../assets/icons/alliance_flag.png';
import { State } from '../../../../redux/reducer';

const Switcher: React.FC = () => {
  const dispatch = useDispatch();
  const { activeView } = useSelector((state: State) => state.scoreboard);

  const handleChangeView = (view: ActiveView) => dispatch(setActiveView(view));

  return (
    <SwitcherWrapper>
      <Button
        style={{
          backgroundColor: activeView === ActiveView.PLAYERS ? 'rgba(24,188,156,1)' : 'white',
          borderRadius: 0,
          color: activeView === ActiveView.PLAYERS ? 'white' : 'black',
        }}
        startIcon={<img src={Helmet} height={25} alt={'Players ranking'} />}
        onClick={() => handleChangeView(ActiveView.PLAYERS)}
      >
        Players
      </Button>
      <Divider style={{ width: 1, backgroundColor: 'rgb(218,218,218)' }} />
      <Button
        style={{
          backgroundColor: activeView === ActiveView.ALLIANCES ? 'rgba(24,188,156,1)' : 'white',
          borderRadius: 0,
          color: activeView === ActiveView.ALLIANCES ? 'white' : 'black',
        }}
        startIcon={<img src={AllianceFlag} alt={'Alliances ranking'} />}
        onClick={() => handleChangeView(ActiveView.ALLIANCES)}
      >
        Alliances
      </Button>
    </SwitcherWrapper>
  );
};

export default Switcher;
