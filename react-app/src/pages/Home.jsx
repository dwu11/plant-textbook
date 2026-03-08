export default function Home() {
  return (
    <div className="markdown">
      <img
        src="/images/e5308c6ba1a4d569bb16deb0cb4fcaed.JPG"
        alt="植物"
        className="hero-image"
        style={{ display: 'block', margin: '0 auto', maxWidth: '100%', borderRadius: 12 }}
      />

      <div className="callout callout-note">
        <h2>📖 关于本资源库</h2>
        <p>这里是《植物生长记》教科书的官方线上伴侣。</p>
        <p>
          我们旨在为学生提供丰富的多媒体互动内容，帮助大家跳出纸本教材，更直观地理解植物生命的奇妙过程。你可以在这里找到课前需要预习的视频、核心词汇表，以及拓展视野的纪录片资源。
        </p>
      </div>

      <h3>如何使用本网站？</h3>
      <ul>
        <li>
          <strong>课前准备</strong>：请点击顶部导航栏的“<strong>课前预习资料</strong>”，完成老师布置的视频观看和单词预习任务。
        </li>
        <li>
          <strong>拓展学习</strong>：在“<strong>其他资源</strong>”中，我们精选了优质的科学纪录片。
        </li>
        <li>
          <strong>教学支持</strong>：老师们请点击“<strong>老师教学资源</strong>”，获取配套的课堂演示视频和辅助教学素材。
        </li>
        <li>
          <strong>快速查找</strong>：遇到不懂的知识点，记得使用右上角的 🔍 <strong>搜索框</strong>。
        </li>
      </ul>

      <p>祝大家学习愉快，像种子一样茁壮成长！🌱</p>

      <hr />

      <h3>🌏 我们的家园</h3>
      <div className="video-container">
        <video width="100%" autoPlay loop muted playsInline style={{ borderRadius: 8 }}>
          <source src="/videos/index.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
