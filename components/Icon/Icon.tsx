import { IconByName, type IconName } from './icon'

type IconProps = {
  name: IconName
  size?: number
  className?: string
}

function Icon(props: IconProps) {
  const IconSvg = IconByName[props.name]

  return (
    <IconSvg className={props.className} width={props.size || 24} height={props.size || 24} />
  )
}

export default Icon