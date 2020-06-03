      // IMPORTS
      import { h, html, Component, render } from 'https://unpkg.com/spux?module'
      import 'https://unpkg.com/dataisland?module'

      const App = (props, children) =>
        html`
          <h1>Data Island</h1>
          <hr />
          <textarea cols="80" rows="26">
${JSON.stringify(di.data, null, 2)}</textarea
          >
          <hr />
        `

      render(h(App), document.body)
