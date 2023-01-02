import type { SidebarConfig } from '@vuepress/theme-default'

import { about } from '../about/es'
import { functions } from '../functions/es'
import { uuid } from '../uuid/es'

export const esSidebar: SidebarConfig = [about, functions, uuid]
