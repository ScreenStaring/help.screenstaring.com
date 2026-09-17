import AppTile from '../AppTile';

export default function ItsGotTile(props) {
  return (
    <AppTile
      title="It's Got: The Food Database"
      to="/docs/itsgot"
      text={props.text}
      linkLabel={props.linkLabel}
    />
  );
}
