'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ArrowLeft, Bell, Building2, Check, CheckCheck, ChevronLeft, Clock3, FileText, LayoutDashboard, Link2, MapPin, Menu, Play, Quote, ScanLine, Send, Settings, ShieldCheck, Users, Wifi, X } from 'lucide-react';

const brand = <Image className="brand-logo" src="/wsool-color.png" alt="وصول" width={872} height={168} priority />;
const links = [['المنتج', '#product'], ['الحلول', '#solutions'], ['الأسعار', '#pricing'], ['العملاء', '#customers'], ['الدعم', '#faq']];
const faqs = [
  ['هل يحتاج الزائر إلى تحميل تطبيق؟', 'لا، يفتح الزائر الرابط في متصفح الجوال مباشرة ويعرض رمز الدخول من الشاشة.'],
  ['هل يدعم وصول عدة فروع أو مواقع؟', 'نعم، يمكنك إضافة فروع ونقاط وصول متعددة وإدارة كل موقع من لوحة تحكم واحدة.'],
  ['ما الأجهزة المطلوبة عند الاستقبال؟', 'يكفي هاتف أو جهاز لوحي بكاميرا لمسح رمز الزيارة. لا تحتاج إلى أجهزة خاصة.'],
  ['هل بياناتنا وسجلاتنا آمنة؟', 'تُدار صلاحيات الفريق بعناية ويُحفظ سجل واضح لكل زيارة وحركة وصول.'],
  ['هل يمكن التصدير إلى أنظمة أخرى؟', 'نعم، يمكنك تصدير السجلات، وتتوفر خيارات تكامل مخصصة لخطة المؤسسات.'],
];

function PrimaryButton({ children, href = '#contact', className = '' }: { children: React.ReactNode; href?: string; className?: string }) { return <a className={`button primary ${className}`} href={href}>{children}<ArrowLeft size={17} /></a>; }
function Eyebrow({ children }: { children: React.ReactNode }) { return <span className="eyebrow">{children}</span>; }
function SectionHead({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) { return <div className="section-head reveal"><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{desc && <p>{desc}</p>}</div>; }

function Dashboard() { const visitors = [['فاطمة العتيبي', 'العمليات', 'زائر', 'تم الاستقبال', '09:24'], ['مندوب سمسا', 'التوصيل', 'مندوب', 'بانتظار الدخول', '09:31'], ['عمر الشمري', 'المالية', 'زائر', 'تم الاستقبال', '09:47'], ['مندوب أرامكس', 'التوصيل', 'مندوب', 'بانتظار الدخول', '10:02'], ['منيرة الحربي', 'الموارد البشرية', 'زائر', 'تم الاستقبال', '10:15']]; return <div className="dashboard-wrap reveal"><div className="dashboard"><div className="browser-bar"><div className="browser-dots"><i /><i /><i /></div><span className="address" dir="ltr">♙ &nbsp; app.wsool.sa</span></div><div className="dashboard-body"><aside className="dash-sidebar">{brand}<div className="dash-menu"><span className="selected"><LayoutDashboard size={16} /> نظرة عامة</span><span><MapPin size={16} /> نقاط الوصول</span><span><FileText size={16} /> سجل الوصول</span><span><Users size={16} /> الفريق والصلاحيات</span><span><Settings size={16} /> الإعدادات</span></div><div className="dash-company"><span className="company-icon">أ</span><div><strong>شركة الأفق</strong><small>لوحة التحكم</small></div></div></aside><div className="dash-main"><div className="dash-toolbar"><div><strong>استقبال الزوار</strong><span className="branch"><MapPin size={13} /> الفرع الرئيسي</span></div><span className="dash-search">⌕ &nbsp; ابحث عن زائر أو مندوب</span></div><div className="dash-hello"><div><strong>مساء الخير، فريق الأفق</strong><small>لديك 3 زوار بانتظار الدخول اليوم</small></div><div className="dash-kpis"><span><b>٢ د</b><small>متوسط الانتظار</small></span><span><b>32</b><small>زوار اليوم</small></span><span><b>3</b><small>بانتظار الدخول</small></span></div></div><div className="visitor-table"><div className="table-head"><span>الاسم والجهة</span><span>النوع</span><span>الحالة</span><span>الوقت</span></div>{visitors.map((v, i) => <div className="table-row" key={v[0]}><span className="person"><i>{v[0][0]}</i><span><b>{v[0]}</b><small>{v[1]}</small></span></span><span className="type-pill">{v[2]}</span><span className={`status ${v[3] === 'تم الاستقبال' ? 'done' : 'waiting'}`}>● &nbsp;{v[3]}</span><span className="time">{v[4]}</span></div>)}</div></div></div></div><div className="floating-note note-right"><span className="note-icon"><Send size={17} /></span><span><b>دعوة جديدة أُرسلت</b><small>عبر واتساب · 10:15 ص</small></span></div><div className="floating-note note-left"><span className="note-icon pale"><Check size={18} /></span><span><b>تم استقبال الزائر</b><small>فاطمة العتيبي · المبيعات</small></span></div></div>; }

function PhoneMockups() { return <div className="phones reveal"><div className="phone invite"><div className="phone-status">٩:٤١ <span>▴ ▰</span></div><span className="invite-tag"><Clock3 size={12} /> دعوة سارية</span><div className="invite-hero"><b>الاستقبال الرئيسي</b><small>شركة الأفق · الدور الأول</small></div><div className="phone-line"><span>موعد الزيارة</span><b>اليوم · ٩:٣٠ ص</b></div><div className="phone-line"><span>المضيف</span><b>م. سارة القحطاني</b></div><div className="phone-line"><span>رقم الدعوة</span><b>#WS-4821</b></div><div className="phone-spacer" /><button className="phone-green">ابدأ الإرشادات ↗</button><button className="phone-outline">اتصل بالمضيف</button></div><div className="phone success"><div className="phone-status">٩:٤١ <span>▴ ▰</span></div><div className="success-check"><Check size={34} /></div><h3>تم تسجيل وصولك</h3><p>أهلًا فاطمة، تفضلي بالدخول. مضيفتك سارة في استقبالك</p><div className="arrival-details"><div><span>وقت الدخول</span><b>٩:٣٣ ص</b></div><div><span>نقطة الوصول</span><b>الاستقبال الرئيسي</b></div><div><span>الفرع</span><b>المبنى أ</b></div></div><div className="wifi"><Wifi size={18} /><span><b>Wsool_Guest</b><small>شبكة الزوار</small></span></div><div className="phone-spacer" /><button className="phone-dark">إنهاء الزيارة</button></div></div> }

function TrackingLine() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const wrapper = svg?.parentElement;
    const path = svg?.querySelector('path');
    if (!svg || !wrapper || !path) return;

    const sections = Array.from(wrapper.querySelectorAll<HTMLElement>(':scope > section, :scope > footer'));
    let pathLength = 0;
    let wrapperHeight = 0;
    let frame = 0;
    let drawnLength = Number.NaN;
    let previousFrame = 0;

    const updateProgress = (now = performance.now()) => {
      frame = 0;
      if (!pathLength) return;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const scroll = window.scrollY;
      let targetY = window.innerHeight / 2 - wrapper.getBoundingClientRect().top;
      // At the bottom of the page, finish the route at the footer's lower edge.
      const finishStart = Math.max(0, maxScroll - window.innerHeight);
      const finish = Math.min(1, Math.max(0, (scroll - finishStart) / Math.max(1, maxScroll - finishStart)));
      targetY += Math.max(0, wrapperHeight - targetY) * finish;
      targetY = Math.min(wrapperHeight, Math.max(0, targetY));

      // All route segments move downwards, so find the length at the viewport's centre.
      let low = 0;
      let high = pathLength;
      for (let i = 0; i < 18; i++) {
        const middle = (low + high) / 2;
        if (path.getPointAtLength(middle).y < targetY) low = middle;
        else high = middle;
      }
      const desiredLength = (low + high) / 2;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const elapsed = previousFrame ? Math.min(now - previousFrame, 64) : 16;
      previousFrame = now;
      drawnLength = Number.isNaN(drawnLength) || reducedMotion
        ? desiredLength
        : drawnLength + (desiredLength - drawnLength) * (1 - Math.exp(-elapsed / 105));
      if (Math.abs(desiredLength - drawnLength) < .2) drawnLength = desiredLength;
      path.style.strokeDashoffset = String(pathLength - drawnLength);
      if (drawnLength !== desiredLength) frame = requestAnimationFrame(updateProgress);
    };

    const scheduleProgress = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    };

    const measure = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      wrapperHeight = wrapper.offsetHeight;
      const content = wrapper.querySelector<HTMLElement>('.steps-section .container');
      const gutter = content?.getBoundingClientRect().left ?? 0;
      const width = Math.max(10, Math.min(126, gutter - 22));
      const left = Math.max(2, gutter - width - 10);
      const center = width / 2;
      const alternate = width > 45;
      let x = center;
      const route = [`M ${x} 0`];

      sections.forEach((section, index) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (section.tagName === 'FOOTER' || !alternate) {
          route.push(`L ${x} ${bottom}`);
          return;
        }
        const nextX = index % 2 === 0 ? width - 6 : 6;
        route.push(`L ${x} ${top + section.offsetHeight * .3}`);
        route.push(`L ${nextX} ${top + section.offsetHeight * .42}`);
        route.push(`L ${nextX} ${bottom}`);
        x = nextX;
      });

      svg.style.left = `${left}px`;
      svg.style.width = `${width}px`;
      svg.style.height = `${wrapperHeight}px`;
      svg.setAttribute('viewBox', `0 0 ${width} ${wrapperHeight}`);
      path.setAttribute('d', route.join(' '));
      pathLength = path.getTotalLength();
      path.style.strokeDasharray = String(pathLength);
      drawnLength = Number.NaN;
      previousFrame = 0;
      updateProgress();
    };

    const observer = new ResizeObserver(measure);
    observer.observe(wrapper);
    sections.forEach(section => observer.observe(section));
    window.addEventListener('resize', measure);
    window.addEventListener('scroll', scheduleProgress, { passive: true });
    gsap.ticker.add(scheduleProgress);
    measure();
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', scheduleProgress);
      gsap.ticker.remove(scheduleProgress);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <svg ref={svgRef} className="tracking-line" aria-hidden="true"><path className="tracking-progress" /></svg>;
}

export default function Home() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    const smoother = ScrollSmoother.create({ wrapper: '#smooth-wrapper', content: '#smooth-content', smooth: .8, smoothTouch: 0 });
    return () => smoother.kill();
  }, []);

  const root = useRef<HTMLElement>(null); const [menuOpen, setMenuOpen] = useState(false); const [activeFaq, setActiveFaq] = useState(0); const [modal, setModal] = useState<'demo' | 'video' | null>(null); const [demoStep, setDemoStep] = useState(0); useEffect(() => { gsap.registerPlugin(ScrollTrigger); const ctx = gsap.context(() => { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; gsap.from('.hero-animate', { y: 30, autoAlpha: 0, duration: .9, stagger: .13, ease: 'power3.out', delay: .15 }); gsap.utils.toArray<HTMLElement>('.reveal').forEach(el => gsap.from(el, { y: 38, opacity: .55, duration: .8, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } })); }, root); return () => ctx.revert() }, []); return <><div id="smooth-wrapper"><main id="smooth-content" ref={root}>
    <div className="announcement"><span className="new-pill">جديد</span><span>جديد · مسح رمز الزائر من الجوال في ثانية واحدة</span><ArrowLeft size={15} /></div>
    <div className="dark-top"><header className="site-header container"><a href="#top" aria-label="وصول الرئيسية">{brand}</a><nav className={menuOpen ? 'nav open' : 'nav'}>{links.map(([label, href]) => <a onClick={() => setMenuOpen(false)} key={href} href={href}>{label}</a>)}</nav><div className="header-actions"><button className="login" onClick={() => setModal('demo')}>تسجيل الدخول</button><button className="button primary header-cta" onClick={() => setModal('demo')}>اطلب عرضًا تجريبيًا <ArrowLeft size={16} /></button></div><button className="menu-toggle" aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></header>
      <section id="top" className="hero container"><div className="hero-copy"><h1 className="hero-animate">استقبل زوارك<br /><em>بضغطة واحدة</em></h1><p className="hero-animate">وصول ينظّم دعوة الزوار والمناديب، يوجّههم إلى الشخص المناسب، ويسجّل كل دخول وخروج في لوحة واحدة.</p><div className="hero-buttons hero-animate"><button className="button primary" onClick={() => setModal('demo')}>اطلب عرضًا تجريبيًا <ArrowLeft size={17} /></button><button className="button ghost" onClick={() => setModal('video')}>شاهد العرض التوضيحي <Play size={16} /></button></div><small className="hero-fine hero-animate">بدون بطاقة ائتمانية · الإعداد خلال دقائق</small></div><Dashboard /><div className="trusted">موثوق به من <b>أرامكس</b><b>ثمـان</b><b>المراعي</b><b>سامسونج</b><b>ناقل</b></div></section></div>
    <div className="story-wrap"><TrackingLine />
      <section id="solutions" className="steps-section"><div className="container"><div className="stats reveal"><div><b>24/7</b><span>متابعة لحظية لفروعك</span></div><div><b>٣ ثوانٍ</b><span>لتسجيل وصول زائر</span></div><div><b>100%</b><span>سجل موثّق لكل حركة</span></div><div><b>62%</b><span>انخفاض وقت الانتظار عند البوابة</span></div></div><SectionHead eyebrow="كيف يعمل" title="ثلاث خطوات من الدعوة إلى الباب" desc="بدون أجهزة معقّدة أو تدريب طويل" /><div className="steps-grid"><article className="white-card reveal"><span className="icon solid"><MapPin /></span><h3>أنشئ نقطة وصول</h3><p>حدّد الموقع ونوع الدخول والصلاحيات لكل نقطة</p></article><article className="white-card reveal"><span className="icon solid"><Send /></span><h3>أرسل الرابط</h3><p>شارك الرابط العام أو الدعوة عبر واتساب أو الرسائل في ثوانٍ</p></article><article className="white-card reveal"><span className="icon solid"><ScanLine /></span><h3>استقبل بالمسح</h3><p>امسح رمز الزائر وسجّل الوصول بضغطة واحدة</p></article></div></div></section>
      <section id="product" className="features-section"><div className="container"><SectionHead eyebrow="المزايا" title="كل ما يحدث عند الباب، في مكان واحد" desc="تحكم كامل في نقاط الوصول والصلاحيات والسجل" /><div className="feature-layout"><article className="feature-card alerts reveal"><span className="icon soft"><Bell /></span><h3>تنبيهات فورية</h3><p>اعرف فور وصول الزائر أو تأخره، وابقَ على اطلاع دون مغادرة مكتبك</p><div className="mini-alert"><span className="icon mini"><Bell /></span><span><b>تنبيه وصول</b><small>منيرة الحربي عند البوابة</small></span></div><div className="mini-alert"><span className="icon mini"><Clock3 /></span><span><b>تنبيه تأخّر</b><small>زائر بانتظار أكثر من ٥ د</small></span></div></article><article className="feature-card dark-feature reveal"><h3>نقاط وصول تتبع قواعدك أنت</h3><p>رابط عام أو بدعوة فقط، صلاحيات لكل نقطة، وأوقات عمل مستقلة</p>{[['الاستقبال الرئيسي', 'الدور الأول · المبنى أ', 'بدعوة فقط'], ['تسليم الشحنات', 'المستودع · البوابة الخلفية', 'رابط عام'], ['قاعات الاجتماعات', 'الطابق الثالث', 'بدعوة فقط']].map(([a, b, c], i) => <div className="access-row" key={a}><span className="access-icon">{i === 0 ? <Building2 size={18} /> : i === 1 ? <ShieldCheck size={18} /> : <Users size={18} />}</span><span><b>{a}</b><small>{b}</small></span><em>{c}</em></div>)}</article></div><div className="feature-bottom"><article className="feature-card reveal"><span className="icon soft"><Building2 /></span><h3>تعدد الفروع</h3><p>أدر كل فروعك ونقاط وصولها من مساحة واحدة</p></article><article className="feature-card reveal"><span className="icon soft"><Users /></span><h3>صلاحيات الفريق</h3><p>حدّد من يستقبل، من يوافق، ومن يطّلع على السجل فقط</p></article><article className="feature-card reveal"><span className="icon soft"><FileText /></span><h3>سجل موثّق لكل حركة</h3><p>كل دخول وخروج مسجل بالوقت والاسم والنقطة، وجاهز للتصدير</p></article></div></div></section>
      <section className="visitor-section"><div className="container"><SectionHead eyebrow="تجربة الزائر" title="من الدعوة إلى الباب، تجربة واضحة للزائر" desc="يتلقّى الزائر رابطًا بسيطًا يعرّفه بالمكان والوقت وطريقة الوصول، دون تطبيق ودون اتصال" /><div className="visitor-content"><PhoneMockups /><div className="visitor-points reveal"><div><span className="icon dark-icon"><Link2 /></span><span><b>رابط واحد لكل زيارة</b><small>يصل على الجوال مباشرة دون تحميل تطبيق</small></span></div><div><span className="icon dark-icon"><MapPin /></span><span><b>تعليمات وصول واضحة</b><small>الموقع، مواقف السيارات، وخطوات الدخول</small></span></div><div><span className="icon dark-icon"><Bell /></span><span><b>تأكيد فوري</b><small>إشعار عند الوصول وعند الخروج</small></span></div></div></div></div></section>
      <section id="customers" className="testimonial-section"><div className="testimonial reveal"><Quote className="quote" size={36} /><p>نعرف الآن من في المبنى دون اتصال واحد. توقّف الازدحام عند الاستقبال، وصار سجلّنا جاهزًا للتدقيق في أي لحظة</p><div className="quote-person"><span>س</span><div><b>سارة القحطاني</b><small>مديرة العمليات · شركة الأفق</small></div></div><div className="quote-stats"><div><b>٪62-</b><small>وقت الانتظار</small></div><div><b>+34</b><small>زيارات يوميًا</small></div><div><b>٪98</b><small>رضا الزوار</small></div></div></div></section>
      <section id="pricing" className="pricing-section container"><SectionHead eyebrow="الأسعار" title="خطط تناسب كل حجم" desc="ابدأ مجانًا لمدة 14 يومًا، وارتقِ عندما ينمو فريقك" /><div className="pricing-grid"><article className="price-card reveal"><h3>الأساسية</h3><div className="price">199 <small>ر.س / شهريًا</small></div><ul>{['حتى 2 نقاط وصول', 'حتى 200 دعوة شهريًا', 'حتى 5 أعضاء الفريق', 'حفظ سجل الزيارات لمدة 6 أشهر', 'تنبيهات بالبريد الإلكتروني'].map(t => <li key={t}><Check size={16} />{t}</li>)}</ul><button onClick={() => setModal('demo')} className="price-button">ابدأ الآن</button></article><article className="price-card featured reveal"><span className="popular">الأكثر شيوعًا</span><h3>الأعمال</h3><div className="price">499 <small>ر.س / شهريًا</small></div><ul>{['جميع مميزات الخطة الأساسية', 'نقاط وصول غير محدودة', 'دعوات غير محدودة', 'حفظ سجل الزيارات لمدة 12 شهر', 'تصدير CSV وسجل كامل', 'صلاحيات الفريق والأدوار'].map(t => <li key={t}><Check size={16} />{t}</li>)}</ul><button onClick={() => setModal('demo')} className="price-button green">ابدأ تجربة مجانية</button></article><article className="price-card reveal"><h3>المؤسسات</h3><div className="price">تواصل <small>سعر مخصص</small></div><ul>{['جميع مميزات خطة الأعمال', 'SSO و API كامل', 'مدير حساب مخصص', 'SLA اتفاقية مستوى الخدمة'].map(t => <li key={t}><Check size={16} />{t}</li>)}</ul><button onClick={() => setModal('demo')} className="price-button">تواصل مع المبيعات</button></article></div></section>
      <section id="faq" className="faq-section"><SectionHead eyebrow="الأسئلة الشائعة" title="أسئلة يتكرر طرحها" /><div className="faq-list">{faqs.map(([q, a], i) => <div className={`faq-item ${activeFaq === i ? 'active' : ''}`} key={q}><button aria-expanded={activeFaq === i} onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}><span className="faq-toggle">{activeFaq === i ? '−' : '+'}</span>{q}</button>{activeFaq === i && <p>{a}</p>}</div>)}</div></section>
    <section id="contact" className="closing"><div className="container"><span className="spark">
      ✦
      </span><h2>جاهز تنقل وصول شركتك للغد؟</h2><p>أنشئ منظمتك في دقائق وأطلق أول نقطة وصول اليوم</p><div className="closing-buttons"><button className="button primary" onClick={() => setModal('demo')}>اطلب عرضًا تجريبيًا <ArrowLeft size={16} /></button><a className="button ghost" href="mailto:hello@wsool.sa">تواصل مع المبيعات</a></div></div></section>
    <footer className="footer"><div className="container footer-main"><div className="footer-brand">{brand}<p>منصة إدارة الوصول والزوار للشركات، من الدعوة حتى المغادرة.</p><div className="socials"><a href="mailto:hello@wsool.sa" aria-label="البريد الإلكتروني"><Send size={17} /></a><a href="https://www.linkedin.com" aria-label="لينكدإن"><Users size={17} /></a><a href="https://x.com" aria-label="إكس">𝕏</a></div></div><div className="footer-links"><div><b>الدعم</b><a href="#faq">مركز المساعدة</a><a href="mailto:hello@wsool.sa">تواصل معنا</a><a href="#faq">حالة الخدمة</a></div><div><b>الشركة</b><a href="#customers">من نحن</a><a href="mailto:hello@wsool.sa">الوظائف</a><a href="#product">المدونة</a></div><div><b>المنتج</b><a href="#product">الميزات</a><a href="#pricing">الأسعار</a><a href="mailto:hello@wsool.sa">API تكامل</a></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} وصول. جميع الحقوق محفوظة · صنع في السعودية</span><span><a href="mailto:hello@wsool.sa?subject=سياسة%20الاستخدام">سياسة الاستخدام</a><a href="mailto:hello@wsool.sa?subject=الشروط">الشروط</a><a href="mailto:hello@wsool.sa?subject=الخصوصية">الخصوصية</a></span></div></footer>
    {modal && createPortal(<div className="modal-backdrop" onClick={() => setModal(null)}><div className="modal" role="dialog" aria-modal="true" aria-label={modal === 'demo' ? 'طلب عرض تجريبي' : 'العرض التوضيحي'} onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setModal(null)} aria-label="إغلاق"><X size={20} /></button>{modal === 'video' ? <><span className="icon solid"><Play /></span><h2>شاهد وصول أثناء العمل</h2><p>من إرسال الدعوة حتى تأكيد وصول الزائر، كل خطوة واضحة وسريعة.</p><div className="video-preview"><div className="walkthrough-icon">{demoStep === 0 ? <MapPin size={44} /> : demoStep === 1 ? <Send size={44} /> : <ScanLine size={44} />}</div><strong>{['أنشئ نقطة الوصول', 'أرسل الدعوة', 'استقبل الزائر'][demoStep]}</strong><span>{['حدّد الفرع والصلاحيات وطريقة الدخول.', 'يصل رابط الزيارة إلى جوال ضيفك مباشرة.', 'امسح الرمز وسجّل وصوله في لوحة التحكم.'][demoStep]}</span><div className="demo-dots">{[0, 1, 2].map(i => <button key={i} className={demoStep === i ? 'active' : ''} aria-label={`الخطوة ${i + 1}`} onClick={() => setDemoStep(i)} />)}</div></div><button className="button primary" onClick={() => setDemoStep((demoStep + 1) % 3)}>الخطوة التالية <ArrowLeft size={16} /></button></> : <><span className="icon solid"><CheckCheck /></span><h2>جرّب وصول مع فريقك</h2><p>أرسل لنا بريدك وسنتواصل معك لترتيب عرض مخصص.</p><form onSubmit={e => { e.preventDefault(); const form = e.currentTarget; const data = new FormData(form); window.location.href = `mailto:hello@wsool.sa?subject=${encodeURIComponent('طلب عرض تجريبي - وصول')}&body=${encodeURIComponent(`الاسم: ${data.get('name')}\nالشركة: ${data.get('company')}\nالبريد: ${data.get('email')}`)}`; setModal(null) }}><label>الاسم<input name="name" required placeholder="اسمك الكامل" /></label><label>اسم الشركة<input name="company" required placeholder="اسم شركتك" /></label><label>البريد الإلكتروني<input type="email" name="email" required placeholder="name@company.com" /></label><button className="button primary" type="submit">إرسال الطلب <ArrowLeft size={16} /></button></form></>}</div></div>, document.body)}
    </div>
  </main></div></>
}
