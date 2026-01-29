$root = 'C:\workspace'
$listener = New-Object System.Net.HttpListener
$prefix = 'http://localhost:8000/'
$listener.Prefixes.Add($prefix)
Write-Output "Starting HTTP server for $root on port 8000"
$listener.Start()
try{
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $req = $context.Request
    $path = $req.Url.LocalPath.TrimStart('/')
    if ($path -eq '') { $path = 'index.html' }
    $file = Join-Path $root $path
    if (-not (Test-Path $file)){
      $context.Response.StatusCode = 404
      $buf = [System.Text.Encoding]::UTF8.GetBytes('Not found')
      $context.Response.ContentLength64 = $buf.Length
      $context.Response.OutputStream.Write($buf,0,$buf.Length)
      $context.Response.Close()
      continue
    }
    try{
      $bytes = [System.IO.File]::ReadAllBytes($file)
      $ext = [System.IO.Path]::GetExtension($file).ToLower()
      switch ($ext) {
        '.html' { $ct = 'text/html' }
        '.css'  { $ct = 'text/css' }
        '.js'   { $ct = 'application/javascript' }
        '.png'  { $ct = 'image/png' }
        '.jpg'  { $ct = 'image/jpeg' }
        '.jpeg' { $ct = 'image/jpeg' }
        '.svg'  { $ct = 'image/svg+xml' }
        default { $ct = 'application/octet-stream' }
      }
      $context.Response.ContentType = $ct
      $context.Response.ContentLength64 = $bytes.Length
      $context.Response.OutputStream.Write($bytes,0,$bytes.Length)
    } catch {
      $context.Response.StatusCode = 500
      $buf = [System.Text.Encoding]::UTF8.GetBytes('Server error')
      $context.Response.ContentLength64 = $buf.Length
      $context.Response.OutputStream.Write($buf,0,$buf.Length)
    } finally {
      $context.Response.Close()
    }
  }
} finally {
  $listener.Stop()
}
