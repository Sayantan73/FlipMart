import ArrowIcon from './ArrowIcon'

type SectionHeadingProps = {
  title: string
  link: string
  href: string
}

export default function SectionHeading({ title, link, href }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div><span className="section-kicker">CURATED FOR YOU</span><h2>{title}</h2></div>
      <a href={href}>{link}<ArrowIcon /></a>
    </div>
  )
}
