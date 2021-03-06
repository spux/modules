export default refreshThis

function refreshThis (id) {
  fetch(location.href).then(response =>
    response.text().then(html => {
      var newhtml = html.replace(
        /(<script[^>]*type="application[^>]*>)([\s\S]*?)(<\/script>)/gim,
        '$1' + JSON.stringify(di[id], null, 2) + '$3'
      )

      if (newhtml.trim() !== html.trim()) {
        console.log('replacing')
        di[id] = JSON.parse(
          html.replace(
            /(<script[^>]*type="application[^>]*>)([\s\S]*?)(<\/script>[\s\S]*$)/gim,
            '$2'
          )
        )
      }
    })
  )
}
