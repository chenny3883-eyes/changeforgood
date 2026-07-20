import os, sys
os.chdir(os.path.dirname(os.path.abspath(__file__)))
import http.server, socketserver
PORT = 3000
Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({'.html': 'text/html'})
print(f"Change For Good prototype running at http://localhost:{PORT}")
print("Press Ctrl+C to stop.")
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
