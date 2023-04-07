export interface Element {
  name: ElementName
  size?: string
  color: string
}

export interface MyElement extends Element {
  name: ElementName
  size?: 'small' | 'medium' | 'big' | 'custom'
  // color: keyof colors
  color: string
  pigma?: string // if none, it uses name instead
  backGround?: string
}

// components/elements/icons 의 filename 목록
export type ElementName =
  | 'Adult'
  | 'ArrowLeft'
  | 'Bell'
  | 'BlankCoin'
  | 'Camera'
  | 'Caution'
  | 'Cancel'
  | 'Change'
  | 'Check'
  | 'Close'
  | 'Coin'
  | 'Compass'
  | 'Copy'
  | 'Down'
  | 'Download'
  | 'Depth'
  | 'Edit'
  | 'Filter'
  | 'Gear'
  | 'Hamburger'
  | 'Help'
  | 'Hide'
  | 'Info'
  | 'Jewel'
  | 'Link'
  | 'Lock'
  | 'Notice'
  | 'Plus'
  | 'Profile'
  | 'Qrcode'
  | 'Reveal'
  | 'Right'
  | 'Search'
  | 'Send'
  | 'Setting'
  | 'SmilePlus'
  | 'Up'
  | 'VerticalDots'
  | 'Wallet'
  | 'Play'
  | 'Pause'
  | 'CallMade'
  | 'GridView'
  | 'Sort'
  | 'FormatLineSpacing'
  | 'Shrink'
  | 'Expand'
  | 'Backspace'
  | 'VideoPlay'
  | 'VideoPause'
  | 'Refresh'
  | 'CaretUp'
  | 'CaretDown'
  | 'Code'
  | 'DefaultIcon'
  | 'Sign'
  | 'Minus'
  | 'Undo'
