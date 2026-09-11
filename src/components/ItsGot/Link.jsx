const BASE_URL = 'https://itsgot.com';

export default function Link(props) {
  const href = new URL(props.path, BASE_URL).href;

  return (
    <a href={href} target="_blank">
      {props.children}
    </a>
  );
}
