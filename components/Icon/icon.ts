import ArrowRight from '@/assets/icons/arrow_right.svg'
import Buy from '@/assets/icons/buy.svg'
import Headphones from '@/assets/icons/headphones.svg'
import Pants from '@/assets/icons/pants.svg'
import Plus from '@/assets/icons/plus.svg'
import Search from '@/assets/icons/search.svg'
import Sneakers from '@/assets/icons/sneakers.svg'
import TShirt from '@/assets/icons/tshirt.svg'
import Check from '@/assets/icons/check.svg'

export const IconByName: Record<string, React.ElementType> = {
  arrow_right: ArrowRight,
  buy: Buy,
  check: Check,
  headphones: Headphones,
  pants: Pants,
  plus: Plus,
  search: Search,
  sneakers: Sneakers,
  tshirt: TShirt
}

export type IconName = keyof typeof IconByName
