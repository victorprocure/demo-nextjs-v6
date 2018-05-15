import App from '../layout/App'
import { dependencies } from '../package.json'
const { next: nextJSVersion, react: reactVersion } = dependencies

export default () => (
  <App>
    <div className="heading">
      [DEMO] NextJS {nextJSVersion} and React {reactVersion}
    </div>
    <style>{`
      /* Sample inline styles */
      a, a:visited, a:active {
        color: inherit
      }
      a:hover {
        color: #8B008B
      }

      .heading {
        font-size: 50px
      }
    `}
    </style>
  </App>
)