"""White-on-transparent glyphs for the sponsor decks."""
from pathlib import Path
from PIL import Image, ImageDraw

OUT = Path(__file__).parent / "icons"
OUT.mkdir(exist_ok=True)
S = 256
W = (255, 255, 255, 255)
CLR = (0, 0, 0, 0)
SW = 16


def canvas():
    im = Image.new("RGBA", (S, S), CLR)
    return im, ImageDraw.Draw(im)


def save(im, name):
    im.save(OUT / f"{name}.png")


def globe():
    im, d = canvas()
    m = 28
    d.ellipse((m, m, S - m, S - m), outline=W, width=SW)
    d.ellipse((m + 50, m, S - m - 50, S - m), outline=W, width=10)
    d.line((S // 2, m, S // 2, S - m), fill=W, width=10)
    d.arc((m, m + 54, S - m, S - m - 54), 0, 360, fill=W, width=10)
    d.line((m + 10, S // 2, S - m - 10, S // 2), fill=W, width=10)
    save(im, "globe")


def instagram():
    im, d = canvas()
    m = 36
    d.rounded_rectangle((m, m, S - m, S - m), radius=52, outline=W, width=SW)
    cx = cy = S // 2
    d.ellipse((cx - 44, cy - 44, cx + 44, cy + 44), outline=W, width=SW)
    d.ellipse((S - m - 50, m + 28, S - m - 22, m + 56), fill=W)
    save(im, "instagram")


def calendar():
    im, d = canvas()
    m = 36
    d.rounded_rectangle((m, m + 20, S - m, S - m), radius=28, outline=W, width=SW)
    d.rectangle((m, m + 20, S - m, m + 72), fill=W)
    for x in (72, 120, 168):
        d.rounded_rectangle((x, m - 6, x + 16, m + 46), radius=4, fill=W)
    for i, x in enumerate((68, 118, 168)):
        for j, y in enumerate((108, 158)):
            d.ellipse((x, y, x + 22, y + 22), fill=W)
    save(im, "calendar")


def users():
    im, d = canvas()
    d.ellipse((52, 36, 128, 112), outline=W, width=SW)
    d.arc((18, 118, 162, 236), 200, 340, fill=W, width=SW)
    d.ellipse((132, 56, 196, 120), outline=W, width=SW)
    d.arc((110, 132, 238, 236), 210, 340, fill=W, width=SW)
    save(im, "users")


def layers():
    im, d = canvas()

    def diamond(y):
        cx = S // 2
        pts = [(cx, y), (S - 40, y + 42), (cx, y + 84), (40, y + 42)]
        d.line(pts + [pts[0]], fill=W, width=14)
        d.line([pts[0], pts[2]], fill=W, width=6)
        d.line([pts[1], pts[3]], fill=W, width=6)

    diamond(28)
    diamond(86)
    diamond(144)
    save(im, "layers")


def spark():
    im, d = canvas()
    cx = cy = S // 2
    d.polygon(
        [
            (cx, 22),
            (cx + 22, cy - 22),
            (S - 22, cy),
            (cx + 22, cy + 22),
            (cx, S - 22),
            (cx - 22, cy + 22),
            (22, cy),
            (cx - 22, cy - 22),
        ],
        fill=W,
    )
    d.ellipse((cx - 26, cy - 26, cx + 26, cy + 26), fill=CLR)
    save(im, "spark")


def wallet():
    im, d = canvas()
    m = 32
    d.rounded_rectangle((m, m + 28, S - m, S - m), radius=28, outline=W, width=SW)
    d.arc((m, m, S - m, m + 88), 200, 340, fill=W, width=SW)
    d.ellipse((S - m - 70, 118, S - m - 26, 162), outline=W, width=12)
    d.ellipse((S - m - 58, 130, S - m - 38, 150), fill=W)
    save(im, "wallet")


def book():
    im, d = canvas()
    d.rounded_rectangle((40, 28, 216, 228), radius=18, outline=W, width=SW)
    d.line((128, 36, 128, 220), fill=W, width=12)
    d.arc((52, 48, 124, 100), 200, 340, fill=W, width=10)
    d.arc((132, 48, 204, 100), 200, 340, fill=W, width=10)
    save(im, "book")


def chat():
    im, d = canvas()
    d.rounded_rectangle((32, 36, 224, 176), radius=36, outline=W, width=SW)
    d.polygon([(72, 168), (48, 226), (118, 176)], fill=W)
    d.ellipse((86, 92, 114, 120), fill=W)
    d.ellipse((122, 92, 150, 120), fill=W)
    d.ellipse((158, 92, 186, 120), fill=W)
    save(im, "chat")


def heart():
    im, d = canvas()
    d.ellipse((36, 40, 136, 140), fill=W)
    d.ellipse((120, 40, 220, 140), fill=W)
    d.polygon([(48, 108), (128, 228), (208, 108)], fill=W)
    save(im, "heart")


def check():
    im, d = canvas()
    d.ellipse((24, 24, 232, 232), outline=W, width=SW)
    d.line([(76, 132), (114, 176), (184, 88)], fill=W, width=22)
    save(im, "check")


def flag():
    im, d = canvas()
    d.line([(64, 28), (64, 228)], fill=W, width=16)
    d.polygon([(72, 32), (214, 78), (72, 128)], fill=W)
    save(im, "flag")


def mail():
    im, d = canvas()
    d.rounded_rectangle((28, 56, 228, 200), radius=20, outline=W, width=SW)
    d.line([(36, 68), (128, 140), (220, 68)], fill=W, width=14)
    save(im, "mail")


if __name__ == "__main__":
    globe()
    instagram()
    calendar()
    users()
    layers()
    spark()
    wallet()
    book()
    chat()
    heart()
    check()
    flag()
    mail()
    print("icons ->", OUT)
