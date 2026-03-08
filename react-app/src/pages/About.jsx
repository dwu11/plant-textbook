export default function About() {
  return (
    <div className="markdown">
      <p>《植物生长记》教材及本网站由以下团队成员共同创作完成。</p>

      <h3>创作团队</h3>
      <div className="grid">
        <div className="card">
          <h4>📘 教材撰写</h4>
          <p>
            <strong>徐湘粤，周晨曦</strong>
            <br />
            *主编，负责教材整体结构设计与文本编写。（根据姓氏首字母排列）*
          </p>
        </div>

        <div className="card">
          <h4>🎥 视频制作</h4>
          <p>
            <strong>[视频作者名字]</strong>
            <br />
            *负责所有教学视频的拍摄与剪辑。*
          </p>
        </div>

        <div className="card">
          <h4>📷 摄影与图像</h4>
          <p>
            <strong>黄安峰</strong>
            <br />
            *提供了教材中精美的植物摄影作品。*
          </p>
        </div>

        <div className="card">
          <h4>💻 网站维护</h4>
          <p>
            <strong>周晨曦</strong>
            <br />
            *负责本资源库的搭建与更新。*
          </p>
        </div>
      </div>

      <hr />

      <h3>🏫 合作院校与支持</h3>
      <div className="grid grid-2">
        <div className="center">
          <img src="/images/school_1.png" width="140" alt="学校1" />
          <p>湘潭市雨湖区九华和平科大小学</p>
        </div>
        <div className="center">
          <img src="/images/school_2.png" width="210" alt="学校2" />
          <p>The George Washington University</p>
        </div>
      </div>

      <hr />

      <p className="muted">© 2025 植物生长记项目组. All rights reserved.</p>
    </div>
  );
}
