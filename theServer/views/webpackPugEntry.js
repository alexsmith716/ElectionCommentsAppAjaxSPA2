// Pug to HTML

function requireAll(r) { 
  console.log('>>>>>>>>>>>>>>> r.keys().forEach(r): ', r.keys().forEach(r))
  r.keys().forEach(r)
}
requireAll( require.context('./', true, /\.pug$/) )