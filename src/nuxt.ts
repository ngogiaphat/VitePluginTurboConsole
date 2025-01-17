import { addVitePlugin, defineNuxtModule } from '@nuxt/kit'
import type { NuxtModule } from '@nuxt/schema'
import type { Options } from './types'
import plugin from './index'

export interface ModuleOptions extends Options {

}

const module: NuxtModule<ModuleOptions> = defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'vite-plugin-turbo-console',
    configKey: 'turboConsole',
  },
  setup(moduleOptions, nuxt) {
    addVitePlugin(() => plugin(moduleOptions, {
      nuxtDevServerPort: nuxt.options.devServer.port,
    }))
  },
})

export default module
