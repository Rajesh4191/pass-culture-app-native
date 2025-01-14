import { flags } from './platform'

// If possible, try to improve use this: https://webdriver.io/docs/customcommands/
// We need to succeed to configure this globalThis, typing through before(){} in the wdio.shared.conf.ts
// So we can remove the import of this selector every time we use it.
export function find(selector: string) {
  return $(flags.isWeb ? `[data-testid="${selector}"]` : `~${selector}`)
}

export function findElementInPage(selector: string, pageName: string) {
  return find(pageName).$(flags.isWeb ? `[data-testid="${selector}"]` : `~${selector}`)
}

export function findAll(selector: string) {
  return $$(flags.isWeb ? `[data-testid="${selector}"]` : `~${selector}`)
}
