"""Draw the app icons (a stack of two cards) with Pillow."""
from PIL import Image, ImageDraw
import sys

def icon(size, path):
    s = size / 512
    img = Image.new("RGB", (size, size), "#2f5d8a")
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([140*s, 110*s, 400*s, 360*s], radius=34*s, fill="#9fbfdf")
    d.rounded_rectangle([110*s, 160*s, 370*s, 410*s], radius=34*s, fill="#f4f1ea")
    for i, w in enumerate((180, 140, 160)):
        y = (230 + i*48) * s
        d.rounded_rectangle([150*s, y, (150+w)*s, y+20*s], radius=10*s, fill="#2f5d8a" if i == 0 else "#b8b2a4")
    img.save(path)

out = sys.argv[1]
icon(512, f"{out}/icon-512.png")
icon(192, f"{out}/icon-192.png")
icon(180, f"{out}/apple-touch-icon.png")
