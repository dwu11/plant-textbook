export default function TeacherResources() {
  return (
    <div className="markdown">
      <h1>老师教学资源</h1>
      <div className="callout callout-important">
        <h3>👩‍🏫 教师专用区</h3>
        <p>
          本页面包含配套的教学辅助视频、课堂演示素材。建议在连接教室大屏幕时使用。
        </p>
      </div>

      <p>此区域资源按照教学单元分类，请点击展开每个单元查看相应素材：</p>

      <h1>🌱 1. 种子单元</h1>
      <details>
        <summary><strong>点击展开 第一单元</strong></summary>
        <h4>📺 课堂素材：</h4>
        <p>（在此处插入相关教学视频 / PPT / 讲稿链接）</p>
      </details>

      <h1>🌿 2. 根与茎单元</h1>
      <details>
        <summary><strong>点击展开 第二单元</strong></summary>
        <h4>📺 课堂素材：</h4>
        <p>（在此处插入相关教学视频 / PPT / 讲稿链接）</p>
      </details>

      <h1>🍃 3. 光合作用单元</h1>
      <details>
        <summary><strong>点击展开 第三单元</strong></summary>
        <h4>📺 课堂素材：</h4>
        <p>（在此处插入相关教学视频 / PPT / 讲稿链接）</p>
      </details>

      <h1>🌸 4. 花与果实单元</h1>
      <details>
        <summary><strong>点击展开 第四单元</strong></summary>
        <h4>📺 课堂素材：传粉者的秘密</h4>
        <p><em>适用课程：第四单元 W14 (第二周) - Lesson 1</em></p>
        <div className="responsive-iframe">
          <iframe
            src="//player.bilibili.com/player.html?bvid=BV1m64y1a79u&page=1&high_quality=1&danmaku=0&autoplay=0"
            scrolling="no"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </details>

      <h1>🌾 5. 收获单元</h1>
      <details>
        <summary><strong>点击展开 第五单元</strong></summary>
        <h4>📺 课堂素材：</h4>
        <p>（在此处插入相关教学视频 / PPT / 讲稿链接）</p>
      </details>
    </div>
  );
}
