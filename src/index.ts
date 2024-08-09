import type { Webflow as WebflowType } from '@finsweet/ts-utils'

export const Webflow = window.Webflow as WebflowType

Webflow.push(() => {
    console.log('Hello World')
})
