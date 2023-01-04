import type { SidebarConfig } from '@vuepress/theme-default'

import { about } from '../about/de'
import { functions } from '../functions/de'
import { qrcode } from '../qrcode/de'
import { uuid } from '../uuid/de'


export const deSidebar: SidebarConfig = [about, functions, qrcode, uuid]
