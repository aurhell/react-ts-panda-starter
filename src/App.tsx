import { css } from '../styled-system/css'
import Link from '@/components/Link'
import Hello from '@/components/Hello'
import { IconPandacss, IconReact, IconTypescript, IconVite } from './components/Logo'

const mainLayoutStyle = css({
  display: 'flex',
  flexDir: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  h: 'screen',
  w: 'screen',
  bgGradient: 'to-r',
  gradientFrom: 'gray.800',
  gradientVia: 'gray.900',
  gradientTo: 'gray.800',
  color: 'slate.100',
})

const iconStyle = css({
  display: 'inline-block',
  mr: '1',
})

const linkHoverStyle = css({
  textDecoration: 'none',
  _hover: {
    textDecoration: 'underline',
    textDecorationColor: 'green.700',
  },
})

function GithubBanner() {
  return (
    <a href="https://github.com/aurhell/bienvenue" className={css({ 'pos':'absolute', 'right':'0', 'top':'0' })}>
      <img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149" className="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1" />
    </a>
  )
}

function ListItem({ url, icon, name }: { url: string, icon: JSX.Element, name: string }) {
  return (
    <li>
      <Link url={url} style={linkHoverStyle}>
        {icon}
        {name}
      </Link>
    </li>
  )
}

function App() {
  return (
    <div
      className={mainLayoutStyle}
    >
      <GithubBanner />

      <h1 className={css({ 'fontSize': '4xl', 'fontWeight': 'bold' })}>
        <Hello name={'VRTP'} />
      </h1>

      <h2>
        <p className={css({ textAlign: 'center', ml: 'auto', mr: 'auto', mt: '6', fontSize: 'xl', lineHeight: 'xl' })}>
          This is a starter template made by
          {' '}
          <Link url="https://github.com/aurhell" style={linkHoverStyle}>@aurhell</Link>, included:
        </p>
      </h2>

      <div className={css({ display: 'flex', flexDir: 'column', ml: 'auto', mr: 'auto', mt: '6' })}>
        <ul className={css({ listStyleType: 'disc' })}>
          <ListItem url="https://vitejs.dev/" icon={<IconVite className={iconStyle} />} name="Vite" />
          <ListItem url="https://react.dev/" icon={<IconReact className={iconStyle} />} name="React" />
          <ListItem url="https://www.typescriptlang.org/" icon={<IconTypescript className={iconStyle} />} name="Typescript" />
          <ListItem url="https://tailwindcss.com/" icon={<IconPandacss className={iconStyle} />} name="Pandacss" />
        </ul>
      </div>
    </div>
  )
}

export default App
