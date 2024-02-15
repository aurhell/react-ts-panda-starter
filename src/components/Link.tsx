interface LinkProps {
  url: string
  children: React.ReactNode
  style?: string
}

export default function Link({ url, style, children }: LinkProps) {
  return (
    <>
      <a href={url} className={style}>
        {children}
      </a>
    </>
  )
}
