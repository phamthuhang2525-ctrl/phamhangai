import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, MessageCircle, QrCode, Send } from "lucide-react";
import paymentQrAsset from "@/assets/pham-hang-payment-qr.jpg.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dang-ky")({
  head: () => ({
    meta: [
      { title: "Đăng ký workshop AI — Phạm Hằng" },
      { name: "description", content: "Hướng dẫn chuyển khoản 50.000đ và xác nhận qua Zalo 0979670210 để đăng ký workshop AI cùng Phạm Hằng." },
      { property: "og:title", content: "Đăng ký workshop AI — Phạm Hằng" },
      { property: "og:description", content: "Xem mã QR, số tiền 50.000đ và cách xác nhận qua Zalo 0979670210." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Registration,
});

const ZALO_CONFIRM = "https://zalo.me/0979670210";
const ZALO_DISPLAY = "0979 670 210";

const steps = [
  {
    icon: QrCode,
    title: "Bước 1 — Quét QR & chuyển khoản 50.000đ",
    detail: "Mở ứng dụng ngân hàng trên điện thoại, quét mã QR bên dưới (hoặc nhập số tài khoản) và chuyển khoản đúng số tiền 50.000đ. Ghi chú nội dung: HỌ TÊN + SỐ ĐIỆN THOẠI để dễ đối soát.",
  },
  {
    icon: MessageCircle,
    title: "Bước 2 — Nhắn tin Zalo xác nhận",
    detail: `Sau khi chuyển khoản, nhấn nút Zalo bên dưới (hoặc lưu số ${ZALO_DISPLAY}) và gửi: ảnh biên lai chuyển khoản + họ tên + số điện thoại để được xác nhận chỗ ngồi.`,
  },
  {
    icon: CheckCircle2,
    title: "Bước 3 — Nhận xác nhận & thông tin tham dự",
    detail: "Sau khi xác nhận xong, bạn sẽ nhận được thông báo chính thức cùng link tham gia nhóm và thông tin chi tiết buổi workshop qua Zalo.",
  },
];

function Registration() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:py-14">
      <div className="mx-auto max-w-md">
        <Button asChild variant="ghost" className="-ml-3 mb-8">
          <Link to="/"><ArrowLeft aria-hidden="true" /> Quay lại trang chủ</Link>
        </Button>
        <div className="text-center">
          <p className="text-xs font-bold uppercase text-primary">Workshop AI cùng Phạm Hằng</p>
          <h1 className="mt-3 text-3xl font-extrabold">Thanh toán đăng ký</h1>
          <p className="mt-3 text-sm text-muted-foreground">Quét mã bằng ứng dụng ngân hàng để chuyển khoản.</p>
        </div>

        <section className="mt-8 border-t border-b py-7 text-center" aria-label="Thông tin thanh toán">
          <p className="text-sm font-medium text-muted-foreground">Số tiền thanh toán</p>
          <p className="mt-1 text-4xl font-extrabold text-primary">50.000đ</p>
          <img src={paymentQrAsset.url} alt="Mã QR chuyển khoản Techcombank cho PHAM THI THU HANG" className="mx-auto mt-6 w-full max-w-[290px] object-contain" />
          <div className="mt-5 text-sm leading-relaxed">
            <p className="font-bold">TECHCOMBANK · PHAM THI THU HANG</p>
            <p className="font-semibold">1903 1368 7616 68</p>
            <p className="mx-auto mt-3 max-w-sm text-muted-foreground">Nhập đúng số tiền 50.000đ khi chuyển khoản. Nếu không quét được QR, hãy nhập thủ công số tài khoản bên trên.</p>
          </div>
        </section>

        <section className="mt-10" aria-label="Hướng dẫn sau khi thanh toán">
          <h2 className="text-center text-xl font-extrabold uppercase text-primary">Hướng dẫn sau khi thanh toán</h2>
          <div className="mt-6 space-y-4">
            {steps.map((s) => (
              <div key={s.title} className="flex gap-4 rounded-2xl border border-l-4 border-l-primary bg-card p-5 shadow-sm">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-primary/30 bg-accent text-primary">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold leading-snug">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-primary/30 bg-accent/60 p-6 text-center">
          <p className="text-sm font-semibold">Đã chuyển khoản xong?</p>
          <p className="mt-1 text-sm text-muted-foreground">Nhắn tin ngay qua Zalo <span className="font-bold text-foreground">{ZALO_DISPLAY}</span> để giữ chỗ của bạn.</p>
          <Button asChild className="cta-glow mt-5 h-auto w-full rounded-md px-8 py-4 text-base font-bold uppercase transition-transform hover:scale-105">
            <a href={ZALO_CONFIRM} target="_blank" rel="noopener noreferrer">
              <Send aria-hidden="true" /> Xác nhận qua Zalo {ZALO_DISPLAY}
            </a>
          </Button>
        </section>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Lưu ý: mọi thông tin xác nhận chỉ được gửi qua số Zalo trên. Vui lòng không thanh toán cho bất kỳ số tài khoản nào khác.
        </p>
      </div>
    </main>
  );
}
