import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, DollarSign, Gift, Image, Sparkles, Store, Wrench } from "lucide-react";
import hero from "@/assets/pham-hang-cover-professional.png";
import avatar from "@/assets/pham-hang-avatar-professional.png";
import { CherryBlossoms } from "@/components/CherryBlossoms";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nuôi Agent Cày Thay Mình 24/7 — Workshop cùng Phạm Hằng" },
      { name: "description", content: "Workshop huấn luyện cấp tốc cùng Phạm Hằng: từ skill tiến hóa thành 1 AI Agent sống thực sự." },
      { property: "og:title", content: "Nuôi Agent Cày Thay Mình 24/7" },
      { property: "og:description", content: "Workshop AI cùng Phạm Hằng — 20:00 ngày 21/9." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  { icon: Image, t: "1 Đội 3 AI agent làm việc thay mình tích hợp sẵn Skill", d: "Nhận ngay đội 3 AI agent làm việc thay bạn, tích hợp sẵn skill hoàn chỉnh" },
  { icon: DollarSign, t: "Chia sẻ những cách xây kênh bằng subagent khác biệt", d: "Hé lộ cách xây kênh bằng subagent khác biệt mà ít ai biết đến" },
  { icon: Wrench, t: "Hướng dẫn tự biết build app ứng dụng công việc của mình không phụ thuộc", d: "Tự tay xây dựng app AI theo nhu cầu công việc riêng, không cần phụ thuộc vào bất kỳ ai" },
  { icon: Store, t: "Hướng dẫn thương mại skill", d: "Biết cách đóng gói, bán và vận hành skill AI thành sản phẩm thương mại" },
  { icon: Gift, t: "Quà tặng đặc biệt", d: "Nhận quà tặng độc quyền khi tham gia huấn luyện cấp tốc" },
  { icon: Sparkles, t: "Ý tưởng kiếm tiền", d: "Khám phá những ý tưởng điên rồ để kiếm tiền với AI" },
];

function Cta() {
  return (
    <Button asChild className="cta-glow h-auto rounded-md px-10 py-4 text-base font-bold uppercase transition-transform hover:scale-105">
      <Link to="/dang-ky">Đăng ký ngay</Link>
    </Button>
  );
}

function Index() {
  return (
    <main className="font-sans">
      <CherryBlossoms />
      <section className="hero-glow px-4 pt-12 pb-16 text-center md:pt-16">
        <p className="mx-auto mb-4 w-fit rounded-full border border-primary/25 bg-accent px-4 py-1 text-xs font-bold uppercase text-primary">Huấn luyện cấp tốc 1 lần duy nhất</p>
        <h1 className="mx-auto max-w-5xl text-4xl font-extrabold uppercase leading-tight md:text-5xl">
          Nuôi Agent cày thay mình <span className="text-primary">24/7</span>
        </h1>
        <p className="mt-2 text-lg font-bold text-muted-foreground md:text-xl">Từ skill tiến hóa thành 1 Agent sống thực sự</p>
        <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-primary/40 bg-accent px-5 py-2 text-sm font-bold">
          <Calendar className="h-5 w-5 text-primary" /> 20:00 ngày 21/9
        </div>
        <div className="workshop-cover mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl text-left">
          <div className="workshop-cover-copy">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200 sm:text-sm">Workshop cùng Phạm Hằng</p>
            <p className="mt-5 text-2xl font-semibold text-white sm:text-4xl">Nuôi AI Agent</p>
            <p className="mt-2 text-4xl font-extrabold leading-tight text-amber-200 sm:text-6xl md:text-7xl">Cày tiền</p>
            <span className="mt-6 block h-0.5 w-14 bg-amber-200/70" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-slate-300 sm:text-base">Từ skill tiến hóa thành một Agent sống thực sự.</p>
            <p className="mt-8 text-sm font-semibold tracking-wide text-white">PHẠM HẰNG</p>
          </div>
          <img src={hero} alt="Phạm Hằng mặc vest xanh trong không gian làm việc" className="workshop-cover-photo" fetchPriority="high" width={1024} height={1536} />
        </div>
        <div className="mt-9"><Cta /></div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-center text-4xl font-extrabold text-primary md:text-5xl">Bạn sẽ nhận được gì?</h2>
        <p className="mx-auto mt-3 max-w-md text-center text-muted-foreground">Nếu chỉ cần một ý tưởng để mở ra cơ hội mới, bạn có sẵn sàng nắm lấy nó không?</p>
        <div className="mt-10 space-y-4">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-5 rounded-2xl border border-l-4 border-l-primary bg-card p-5 shadow-sm">
              <span className="w-20 shrink-0 text-center text-5xl font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-accent text-primary"><b.icon className="h-5 w-5" /></span>
              <div className="flex-1">
                <h3 className="font-bold">{b.t}</h3>
                <p className="text-sm text-muted-foreground">{b.d}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-primary/60" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-center text-3xl font-extrabold text-primary">Diễn giả Huấn luyện cấp tốc</h2>
        <div className="mt-8 flex flex-col items-center gap-8 border-t border-b py-8 md:flex-row md:items-start">
          <div className="relative shrink-0">
            <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-white shadow-xl ring-1 ring-primary/20">
              <img src={avatar} alt="Chân dung diễn giả Phạm Hằng" className="h-full w-full origin-top scale-[1.4] object-cover object-top" loading="lazy" width={1145} height={1374} />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-extrabold">Phạm Hằng</h3>
            <p className="mt-2 text-muted-foreground">Diễn giả buổi huấn luyện cấp tốc</p>
          </div>
        </div>
        <div className="mt-8 text-center"><Cta /></div>
      </section>

      <section className="hero-glow px-4 py-20 text-center">
        <h2 className="text-3xl font-extrabold text-primary md:text-5xl">Nơi bạn tìm thấy cho mình một cộng đồng</h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">Cùng hàng trăm KOL, Affiliate và nhà sáng tạo đang xây dựng đế chế AI của riêng mình.</p>
        <div className="mt-8"><Cta /></div>
      </section>
    </main>
  );
}
