from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import os


DIST_DIR = Path(__file__).resolve().parents[1] / "dist"


class SpaHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        resolved = super().translate_path(path)
        relative = Path(resolved).relative_to(Path.cwd())
        return str(DIST_DIR / relative)

    def do_GET(self):
        requested = (DIST_DIR / self.path.lstrip("/")).resolve()
        if requested.is_dir():
            requested = requested / "index.html"

        if not str(requested).startswith(str(DIST_DIR)) or not requested.exists():
            self.path = "/index.html"

        return super().do_GET()


def main():
    os.chdir(DIST_DIR)
    server = ThreadingHTTPServer(("127.0.0.1", 4174), SpaHandler)
    print("Serving SPA preview on http://127.0.0.1:4174")
    server.serve_forever()


if __name__ == "__main__":
    main()
