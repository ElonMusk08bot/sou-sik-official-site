import Link from 'next/link'
import CTA from '@/components/CTA'
import { Metadata } from 'next'

const posts: Record<string, {
  title: string
  description: string
  cover: string
  date: string
  author: string
  readingTime: string
  toc: { id: string; text: string }[]
  content: string
  faq: { q: string; a: string }[]
  howto: { title: string; steps: string[] }
  related: { title: string; slug: string; desc: string }[]
}> = {
  'how-to-tell-if-hand-grinder-suits-light-roast': {
    title: '如何判斷一支手搖磨豆機適不適合淺焙？',
    description: '淺焙豆密度高、阻力大，磨豆機需要的不只是刀盤鋒利，而是整體力學配置。本篇從扭矩、刀盤几何、粉徑分佈與手感四個維度，系統性地解析如何客觀評估一支手搖磨豆機是否適合處理淺焙豆。',
    cover: '/images/blog-light-roast-cover.jpg',
    date: '2026-04-20',
    author: 'Sou Sik Lab',
    readingTime: '18 分鐘',
    toc: [
      { id: 'intro', text: '前言：為什麼淺焙是磨豆機的終極考試' },
      { id: 'density', text: '一、密度與阻力：淺焙豆的本質挑戰' },
      { id: 'torque', text: '二、扭矩輸出：省力與穩定的物理基礎' },
      { id: 'burr-geometry', text: '三、刀盤几何：決定粉徑分佈的關鍵' },
      { id: 'retention', text: '四、低殘粉設計：影響風味的隱形因素' },
      { id: 'feel', text: '五、手感判斷：現場測試的五個動作' },
      { id: 'checklist', text: '六、選機檢查清單：十個問題快速篩選' },
      { id: 'references', text: '參考資料' },
    ],
    howto: {
      title: '如何親自測試一支手搖磨豆機是否適合淺焙',
      steps: [
        '取 15 克淺焙豆（建議 Agtron 85 以下，豆子外觀呈明顯淺棕），設定研磨刻度為平常用於手沖的段位。',
        '以穩定速度轉動手柄，計時 30 秒內完成的研磨圈數，並觀察手腕是否在過程中出現不舒服的阻力感。',
        '傾倒研磨後的咖啡粉，觀察粉堆是否均勻、是否有大量細粉飛揚、細粉比例是否異常高。',
        '拍打或輕敲磨豆機出粉槽，檢視殘留粉末量（理想應低於 0.5 克），聞殘留粉末的氣味是否出現油耗或陳舊感。',
      ]
    },
    faq: [
      { q: '淺焙豆可以用一般磨豆機磨嗎？', a: '可以，但會非常費力，且粉徑分佈容易不均。高密度淺焙豆對磨豆機的扭矩和刀盤設計要求比中深焙更高，建議選擇專為淺焙優化的機型。' },
      { q: '刀盤越大代表越適合淺焙嗎？', a: '不一定。刀盤尺寸影響的是研磨效率和散熱，面徑大於 38mm 的錐刀或平板刀盤在淺焙時確實有優勢，但核心關鍵仍是扭矩輸出配置與刀盤几何設計。' },
      { q: '有省力設計的磨豆機是否代表研磨品質較差？', a: '不一定。省力設計（如行星齒輪、雙軸承傳動）主要是改變施力路徑，不直接影響刀盤轉速與粉徑分佈。重點仍在刀盤精度與整體機械配置。' },
      { q: '如何從規格判斷一支磨豆機是否適合淺焙？', a: '優先看三個數據：刀盤類型（錐刀 or 平板）、刀盤尺寸（mm）、軸承配置。若規格未標示，建議以現場測試為主，紙上規格只能作為輔助參考。' },
      { q: '測試時只有深焙豆怎麼辦？', a: '以深焙豆測試只能確認磨豆機能否正常運作，無法判斷淺焙時的表現。若只看深焙豆的表現，買回家的淺焙體驗可能會讓你失望。建議盡量帶自己的淺焙豆到現場測試。' },
    ],
    related: [
      { title: '行星齒輪磨豆機是噱頭嗎？', slug: 'are-planetary-gear-grinders-gimmick', desc: '如果只看名詞，它像噱頭；如果從手腕負擔與扭力轉換看，它其實很務實。' },
      { title: '為什麼低殘粉會影響風味？', slug: 'why-low-retention-affects-flavor', desc: '殘粉不是只有重量問題，也會帶入氧化後的舊粉氣味。' },
      { title: '手搖磨豆機多久清一次？', slug: 'how-often-clean-hand-grinder', desc: '日常拍粉、定期拆解、避免水洗刀盤，是最基本的保養邏輯。' },
    ],
    content: `
## 前言：為什麼淺焙是磨豆機的終極考試

走進任何一家精品咖啡店，老闆談起淺焙豆，眉頭往往跟著皺起來。不是因為不喜歡，而是淺焙豆對磨豆機的要求，遠比中深焙豆來得嚴苛。

中深焙的咖啡豆經過高溫梅納反應，細胞結構膨鬆、質地偏脆，研磨時阻力低，多數磨豆機都能勝任。但淺焙豆不同——它保留了更多水分，密度高、纖維結構緊實，豆芯硬度接近生豆狀態。當你用同樣一台磨豆機試圖將兩種豆子研磨到相同刻度，淺焙豆需要的力量可能是中深焙的兩到三倍。

這就是為什麼許多人在論壇上說「我的磨豆機磨深焙很順，磨淺焙卻卡死」——問題往往不是磨豆機壞了，而是它本來就不是為了那樣的阻力設計的。

本篇文章的目的，是提供一套客觀的判斷框架。無論你是準備入手第一支磨豆機，還是正在考慮升級，這套方法都能幫助你在掏錢之前，更準確地評估一台磨豆機是否真正適合處理淺焙豆。

---

## 一、密度與阻力：淺焙豆的本質挑戰

淺焙豆的含水率通常落在 4% 至 6% 之間，而中深焙豆可能只剩下 2% 至 3%。含水率高一點，意味著細胞壁更堅韌、纖維結構更完整。當刀盤切入時，切削阻力不是線性增加，而是隨著密度上升呈指數成長。

根據 SCA（Specialty Coffee Association）的烘焙度分類，Agtron Number 低於 95 的淺焙豆已屬於硬豆範疇。硬豆的研磨挑戰在於：它不會被「壓碎」，而是被「切斷」。這對刀盤的鋒利程度、切入角度和刃口幾何提出了完全不同的要求。

另一個被多數人忽略的變數是「批次研磨的穩定性」。當你連續研磨 30 克、50 克、甚至 100 克咖啡豆時，磨豆機的機構會因為阻力上升而開始發熱。發熱會改變刀盤的膨脹係數，導致間隙改變，進一步影響粉徑分佈的穩定性。許多磨豆機在第一批表現良好，第二批開始出現細粉暴增的問題，根源往往在此。

---

## 二、扭矩輸出：省力與穩定的物理基礎

力矩（Torque）是評估磨豆機是否適合淺焙的最核心物理量。力矩的定義是力與施力臂的乘積，單位通常以 N·m（牛頓·米）或 kgf·cm（公斤力·厘米）表示。對手搖磨豆機而言，這個數值決定了你轉動手柄時實際能輸出多大的切削力量。

傳統磨豆機的力矩傳遞是直接的：手柄 → 主軸 → 刀盤。這種配置的問題在於，當阻力增加時，你的施力角度和速度都會受到影響，導致研磨不均。多數平價手搖磨豆機在此架構下表現出「前端順、後端卡」的典型現象——一開始十圈很輕，第十五圈開始突然變重，這代表機構的力矩儲備不足。

行星齒輪系統（如 Sou Sik P-1 所採用的設計）透過齒輪組將力矩放大，類似於自行車變速齒輪的道理：犧牲轉速，換取力量。這讓用戶在面對高密度淺焙豆時，不需要用更大的力量，而是透過更合理的力學配置，讓每次旋轉都在可控制的阻力範圍內完成。

選擇磨豆機時，可以透過一個簡單的測試評估力矩：取 15 克淺焙豆，設定在平常用於手沖的刻度，嘗試連續研磨。如果在 20 圈之內就感到手腕明顯疲勞，這台磨豆機的力矩儲備可能不足以穩定處理大批量或超高密度豆子。

---

## 三、刀盤几何：決定粉徑分佈的關鍵

刀盤是研磨系統的心臟，但多數消費者在購買前只看刀盤材質和尺寸，完全忽略了刀盤几何設計的差異。刀盤几何指的是刀盤刃口的形狀、傾斜角度、切削間隙和排粉通道設計——這些變數直接決定了研磨出的咖啡粉形狀和粉徑分佈。

手搖磨豆機常用的刀盤類型有兩種：錐刀（Conical Burr）和平板刀盤（Flat Burr）。

錐刀的優點在於：咖啡豆從中心向下研磨，粉體在重力輔助下自然排出，排粉通道較順暢，細粉比例通常較平板刀盤低。這對淺焙豆來說尤其重要，因為淺焙豆的細胞結構更緊實，一旦產生細粉，細粉的比例和氧化速度都會加劇，對萃取風味造成負面影響。

平板刀盤的優點在於：粉徑分佈更集中（Uniformity 更高），但細粉比例通常偏高。對於義式濃縮這類要求高萃取率的場景，平板刀盤是常見選擇；但對於手沖這類萃取時間較長的沖煮方式，過多的細粉會導致萃取不均和苦味提升。

除了刀盤類型，刃口設計也至關重要。高品質刀盤的刃口會經過精密研磨（Precision Ground），刃口角度一致性高，研磨時的切削阻力更穩定。低品質刀盤的刃口往往是沖壓成形，刃口角度差異大，長時間使用後磨損不均，導致粉徑分佈惡化。

WCR（World Coffee Research）發表的刀盤測試報告中指出，刀盤磨損後的粉徑分佈變化可達 15% 至 20%，對於追求穩定萃取的玩家而言，這是不可忽視的變數。

---

## 四、低殘粉設計：影響風味的隱形因素

殘粉（Retention）是指上一次研磨後，留在刀盤腔體和出粉通道中未被清除的咖啡粉。這些粉末在下次研磨時會被新鮮粉末推出，混入新一批咖啡粉中，導致新舊粉末混合，影響萃取的穩定性。

更嚴重的問題在於氧化。殘留的粉末與空氣接觸後會持續氧化，當這些氧化粉末被重新注入新一批咖啡粉時，會帶入油耗味、陳舊味——這正是許多人在更換豆子後仍然嘗到「上一支豆子味道」的根本原因。

淺焙豆的油脂含量比中深焙低，細胞壁結構更完整，因此殘粉在刀盤腔體內的附著性反而更低，但問題在於：淺焙殘粉的氧化速度更快。因為淺焙豆保留了更多的水分和酸性物質，這些物質在氧化時會產生更明顯的異味。

低殘粉設計的磨豆機通常具備以下特徵：出粉通道設計筆直無死角、刀盤腔體內壁光滑無凹槽、組裝時刀盤間隙墊片尺寸精確。要測試殘粉量，可以採用「倒粉測試」：研磨後將磨豆機倒置輕敲，稱量掉出的粉末重量。理想機種應低於總研磨量的 0.5%。

---

## 五、手感判斷：現場測試的五個動作

在實體店面或收到新磨豆機時，不要急著測咖啡味道，先用五個簡單動作做手感評估：

**動作一：空轉測試**
不放入任何咖啡豆，轉動手柄 10 圈，感受轉動是否平滑、有無異常阻力或軸向晃動。如果空轉就有卡頓感，載入豆子後的阻力會成倍增加。

**動作二：單手 vs 雙手感受**
單手轉動手柄時，感受手腕是否在 15 圈內出現疲勞或不舒服的角度。如果需要雙手協力才能穩定轉動，長時間使用會造成負擔。

**動作三：倒出測試**
研磨後立即將磨豆機倒置，輕敲三下，觀察掉出的粉末量。如果倒出的粉末超過 1 克，說明殘粉設計有待加強。

**動作四：聞殘粉氣味**
倒出的殘粉聞起來不應該有油耗味、化學味或明顯的酸敗感。若聞到異味，代表機構內可能有潤滑油殘留或前一批豆子的殘留。

**動作五：連續研磨穩定性**
取 30 克淺焙豆，分兩次各 15 克研磨，比較兩次的研磨時間和手感。如果第二次明顯比第一次更費力，說明機構散熱或力矩儲備不足。

---

## 六、選機檢查清單：十個問題快速篩選

在決定購買之前，用這十個問題做快速篩選：

1. 這台磨豆機是否標示刀盤類型（錐刀或平板）與尺寸（mm）？
2. 刀盤材質是否為不鏽鋼（440C、KSV 或同級）？鋁合金刀盤硬度不足，不建議用於淺焙。
3. 軸承配置是單軸承還是雙軸承？雙軸承的側向穩定性更好。
4. 手柄長度與直徑是否提供足夠的施力槓桿？太短的手柄在面對高阻力時會非常吃力。
5. 出粉通道是否為筆直設計？彎曲通道會造成粉體堆積。
6. 這台磨豆機的官方說明是否提及「適用於義式」或「適用於手沖」，還是兩者皆可？
7. 刀盤是否為可拆卸設計？不可拆卸的刀盤難以徹底清潔，長期使用後細粉堆積會影響表現。
8. 研磨刻度調整是否有卡位設計？無段式調整在長期使用後容易發生刻度漂移。
9. 是否有公開的粉徑分佈數據或第三方測試報告？
10. 用戶評價中是否有提到「淺焙很好用」或「淺焙費力」的具體描述？

---

## 結語

判斷一支手搖磨豆機是否適合淺焙，不是一件靠感覺或品牌就能決定的事。它需要你從物理結構、力學配置、刀盤设计和实际测试四個维度综合评估。

最重要的是：带自己的豆子去测试。别人觉得顺手的机器，在你手上可能完全不是那么回事。咖啡是一件高度个人体验的事情，参数表只能告诉你「这台机器能做什么」，真正适合你的，必须是你亲手试过的那一台。

如果你正在寻找一台专门为浅焙设计的手摇磨豆机，欢迎了解 Sou Sik P-1。我们相信好的工具不应该让手感成为阻碍，而应该让每一次研磨都成为一种值得期待的仪式。
    `,
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[params.slug]
  if (!post) return { title: '文章未找到' }
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return <main className="pt-24 section"><div className="container-x"><h1>文章未找到</h1></div></main>

  const sections = post.content.split('\n## ').map((block, i) =>
    i === 0 ? block : '## ' + block
  )

  return (
    <main className="pt-24">
      {/* Cover */}
      <section className="relative w-full overflow-hidden" style={{ height: '60vh', minHeight: '400px' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-carbon" />
        <img src={post.cover} alt={post.title} className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-x pb-12">
            <p className="eyebrow mb-4">{post.date} · {post.readingTime}</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl">{post.title}</h1>
          </div>
        </div>
      </section>

      <div className="section">
        <div className="container-x grid gap-12 md:grid-cols-[1fr_280px]">
          {/* Main Content */}
          <article>
            <p className="text-lg text-white/65 leading-9 mb-10 border-l-2 border-brass pl-6">
              {post.description}
            </p>

            {/* TOC */}
            <nav className="card mb-10 p-6">
              <p className="eyebrow mb-4">目錄</p>
              <ol className="space-y-2">
                {post.toc.map(item => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-sm text-white/60 hover:text-white block py-1">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Article Body */}
            <div className="prose-sou">
              {sections.map((block, i) => {
                if (block.startsWith('## ')) {
                  const heading = block.split('\n')[0].replace('## ', '')
                  const id = post.toc.find(t => t.text === heading)?.id || ''
                  const body = block.substring(block.indexOf('\n')).trim()
                  return (
                    <section key={i} id={id}>
                      <h2>{heading}</h2>
                      <div className="whitespace-pre-wrap text-white/80 leading-9">{body}</div>
                    </section>
                  )
                }
                return null
              })}
            </div>

            {/* HowTo */}
            <div className="mt-12 card p-8">
              <p className="eyebrow mb-4">操作指南</p>
              <h3 className="text-2xl font-semibold mb-6">{post.howto.title}</h3>
              <ol className="space-y-4">
                {post.howto.steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brass text-black flex items-center justify-center font-bold text-sm">{i + 1}</span>
                    <p className="text-white/70 leading-7 pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* FAQ */}
            <div className="mt-12">
              <h2 className="text-3xl font-semibold mb-8">常見問題</h2>
              <div className="space-y-4">
                {post.faq.map((item, i) => (
                  <details key={i} className="card p-5 cursor-pointer group">
                    <summary className="font-semibold text-lg list-none flex items-center justify-between">
                      {item.q}
                      <span className="text-brass text-xl group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-4 text-white/65 leading-8">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-12 pt-12 border-t border-white/10">
              <h2 className="text-2xl font-semibold mb-8">相關文章</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {post.related.map(r => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="card p-5 hover:bg-white/[.07]">
                    <h3 className="font-semibold mb-2">{r.title}</h3>
                    <p className="text-sm text-white/50">{r.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden md:block space-y-6">
            <div className="card p-5">
              <p className="eyebrow mb-3">作者</p>
              <p className="text-white/70 text-sm">{post.author}</p>
            </div>
            <div className="card p-5">
              <p className="eyebrow mb-3">閱讀時間</p>
              <p className="text-white/70 text-sm">{post.readingTime}</p>
            </div>
            <div className="card p-5">
              <p className="eyebrow mb-3">更新日期</p>
              <p className="text-white/70 text-sm">{post.date}</p>
            </div>
          </aside>
        </div>
      </div>

      <CTA />
    </main>
  )
}
