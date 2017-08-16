// Pug to HTML

function requireAll(r) { 
  r.keys().forEach(r)
}
requireAll( require.context('./', false, /\.pug$/) )

// the directory to match within,
// a boolean flag to include or exclude subdirectories,
// a regular expression to match files against.