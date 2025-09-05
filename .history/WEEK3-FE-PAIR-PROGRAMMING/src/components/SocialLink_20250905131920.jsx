const SocialLink = ({ link, itemClass }) => {
  const Icon = link.icon // assuming you pass the React icon component itself
  return (
    <li key={link.id}>
      <a href={link.href} className={itemClass}>
        <Icon />
      </a>
    </li>
  )
}
export default SocialLink
