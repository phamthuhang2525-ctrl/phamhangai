import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import paymentQrAsset from "@/assets/pham-hang-payment-qr.jpg.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dang-ky")({
  head: () => ({
    meta: [
      { title: "Đăng ký workshop AI — Phạm Hằng" },
      { name: "description", content: "Thông tin chuyển khoản 50.000đ để đăng ký workshop AI cùng Phạm Hằng." },
      { property: "og:title", content: "Đăng ký workshop AI — Phạm Hằng" },
      { property: "og:description", content: "Xem mã QR và số tiền 50.000đ để đăng ký workshop AI cùng Phạm Hằng." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Registration,
});

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
            <p className="mx-auto mt-3 max-w-sm text-muted-foreground">Vui lòng nhập số tiền 50.000đ khi chuyển khoản. Thanh toán không được xác nhận tự động trên trang này.</p>
          </div>
        </section>
      </div>
    </main>
  );
}