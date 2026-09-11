const BASE_URL = 'https://apps.screenstaring.com/ed/';

export default function Link(props) {
  // Strip the leading slash so paths resolve *relative* to the /ed/ base
  // (an absolute path would discard the /ed/ prefix).
  const href = new URL(props.path.replace(/^\//, ''), BASE_URL).href;

  return (
    <a href={href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
}
