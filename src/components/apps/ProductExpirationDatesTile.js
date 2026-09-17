import AppTile from '../AppTile';

export default function ProductExpirationDatesTile(props) {
  return (
    <AppTile
      title="Product Expiration Dates"
      to="/docs/product-expiration-dates"
      text={props.text}
      linkLabel={props.linkLabel}
    />
  );
}
