import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, DollarSign, Gift, Image, Sparkles, Store, Wrench } from "lucide-react";
import hero from "@/assets/workshop-cover.jpg";
import avatar from "@/assets/speaker-portrait.jpg";
import { CherryBlossoms } from "@/components/CherryBlossoms";
import { Button } from "@/components/ui/button";

const REGISTER = "https://zalo.me/0978076936";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nuôi Agent Cày Thay Mình 24/7 — Workshop KOL AI" },
      { name: "description", content: "Workshop huấn luyện cấp tốc cùng Phong Menly: từ skill tiến hóa thành 1 AI Agent sống thực sự." },
      { property: "og:title", content: "Nuôi Agent Cày Thay Mình 24/7" },
      { property: "og:description", content: "Workshop KOL AI cùng Phong Menly — 20:00 ngày 21/9." },
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
      <a href={REGISTER} target="_blank" rel="noreferrer">Đăng ký ngay</a>
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
        <div className="glow-frame relative mx-auto mt-7 aspect-[16/9] max-w-5xl overflow-hidden rounded-lg bg-foreground">
          <img src={hero} alt="Không gian làm việc AI Agent" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-y-0 left-0 flex w-[56%] flex-col justify-center px-[5%] text-left">
            <p className="cover-kicker text-sm font-bold uppercase md:text-2xl">Nuôi AI Agent</p>
            <p className="cover-title mt-1 text-3xl font-black uppercase leading-[1.12] md:text-7xl">Cày tiền</p>
            <span className="mt-4 h-1 w-12 bg-cover-accent md:w-20" />
          </div>
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
        <div className="hero-glow mt-8 flex flex-col items-center gap-8 rounded-3xl border p-8 md:flex-row md:items-start">
          <div className="relative shrink-0">
            <img src={avatar} alt="Phong Menly" className="h-32 w-32 rounded-full object-cover shadow-lg" />
            <span className="absolute -right-2 bottom-2 rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">KOL AI</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Phong Menly</h3>
            <p className="font-semibold text-primary">KOL AI & Vibe Coding</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["AI Expert", "Content Creator", "Vibe Coding"].map((t) => (
                <span key={t} className="rounded-full bg-accent px-3 py-1 text-xs font-medium">{t}</span>
              ))}
            </div>
            <p className="mt-4 text-muted-foreground">Người tiên phong trong lĩnh vực KOL AI tại Việt Nam, chia sẻ kiến thức và kinh nghiệm thực tế về cách kiếm tiền với AI một cách hiệu quả.</p>
          </div>
        </div>

        <h2 className="mt-20 text-center text-2xl font-bold">🎬 Xem trước nội dung từ Phong Menly</h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">Video chia sẻ thực tế giúp bạn hiểu rõ hơn về hành trình KOL AI</p>
        <div className="mt-6 aspect-video overflow-hidden rounded-2xl border shadow-lg">
          <iframe className="h-full w-full" src="https://www.youtube.com/embed/K2H9p7IGhdo?autoplay=1&mute=1&loop=1&playlist=K2H9p7IGhdo&controls=1" title="Phong Menly" allow="autoplay; encrypted-media" allowFullScreen />
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
