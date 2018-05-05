import { dependencies } from '../package.json'
const { next: nextJSVersion, react: reactVersion } = dependencies

export default () => <div>[DEMO] NextJS {nextJSVersion} and React {reactVersion}</div>