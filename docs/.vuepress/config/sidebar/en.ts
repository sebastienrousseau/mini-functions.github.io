import type { SidebarConfig } from '@vuepress/theme-default'

import { about } from '../about/en'
import { functions } from '../functions/en'
import { qrcode } from '../qrcode/en'
import { uuid } from '../uuid/en'

export const enSidebar: SidebarConfig = [about, functions, qrcode, uuid]

