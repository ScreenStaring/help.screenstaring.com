import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import AppTile from '../AppTile';

export default function SupportTile(props) {
  const {siteConfig} = useDocusaurusContext();
  return (
    <AppTile
      title={props.title}
      href={siteConfig.themeConfig.supportURL}
      text={props.text}
      linkLabel={props.linkLabel}
    />
  );
}
