import type { SidebarConfig } from '@vuepress/theme-default'

import { about } from '../about/fr'
import { functions } from '../functions/fr'
import { qrcode } from '../qrcode/fr'
import { uuid } from '../uuid/fr'

export const frSidebar: SidebarConfig = [about, functions, qrcode, uuid]
