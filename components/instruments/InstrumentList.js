import InstrumentItem from './InstrumentItem';
import classes from './InstrumentList.module.css';

function InstrumentList(props) {
  return (
    <ul className={classes.list}>
      {props.instruments.map((instrument) => (
        <InstrumentItem
          key={instrument.id}
          id={instrument.id}
          image={instrument.image}
          title={instrument.title}
        />
      ))}
    </ul>
  );
}

export default InstrumentList;
