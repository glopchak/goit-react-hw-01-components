import PropTypes from 'prop-types';
import { StatisticBox, StatisticLabel,  StatisticData } from './StatisticItem.styled';

export const StatisticItem = ({ label, percentage }) => {
    return (
      <StatisticBox style={{ backgroundColor: randomColor() }}>
        <StatisticLabel>{label}</StatisticLabel>
        <StatisticData>{percentage}%</StatisticData>
      </StatisticBox>
    );
  };
  
  StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  };

  const randomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);