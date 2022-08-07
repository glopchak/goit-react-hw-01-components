import PropTypes from 'prop-types';
import { StatisticItem } from 'components/StatisticItem/StatisticItem';
import { Container, StatisticsList, Title } from './StatisticsBoard.styled';


export const StatisticsBoard = ({title, stats}) =>{

    return (
        <Container>
          {title && <Title>{title}</Title>}
          <StatisticsList>
            {stats.map(({ id, label, percentage }) => {
              return (
                <StatisticItem key={id} label={label} percentage={percentage} />
              );
            })}
          </StatisticsList>
        </Container>
      );
    };
    
    StatisticsBoard.propTypes = {
      title: PropTypes.string,
      stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
        })
      ),
}
