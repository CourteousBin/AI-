<div align="center">

# AI 驱动的智慧垃圾收集平台


  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logoColor=white&logo=postgresql&color=336791" alt="postgresql" />
    <img src="https://img.shields.io/badge/-Drizzle_ORM-black?style=for-the-badge&logoColor=white&logo=drizzle&color=3A66B5" alt="drizzle" />
    <img src="https://img.shields.io/badge/-Vercel-black?style=for-the-badge&logoColor=white&logo=vercel&color=000000" alt="vercel" />
  </div>
  
</div>

<br />


AI 智慧垃圾收集平台是一款创新的环保应用，旨在利用人工智能技术提升垃圾管理的效率和用户参与度。该平台允许用户方便地报告垃圾堆放位置，并为其他用户提供收集和处理这些垃圾的机会。

通过上传照片，我们的平台还可以分析和验证垃圾类型、估算垃圾数量，并通过实时验证跟踪清理工作，从而进一步促进社区清洁。

每次成功的报告或收集行动，用户都将获得积分，这些积分可以兑换为各种奖励，激励更多人参与到环保行动中。

---

## 功能 ✨

### 📷 AI 驱动的垃圾验证
- **上传垃圾照片：** 用户可以直接从手机或设备上传图片来报告垃圾。
- **AI 验证：** 我们的 AI 系统分析照片中的垃圾，识别垃圾类型（塑料、金属、有机物等），并提供收集的估计数量。

### 🧹 垃圾清理确认
- **基于照片的清理追踪：** 在垃圾报告后，用户或清理团队可以上传清理后的区域图片。
- **AI 清理确认：** AI 系统比较图片，以确认垃圾是否已成功清除。

### 🎖️ 垃圾报告与清理奖励积分
- **赚取积分：** 用户每次报告垃圾和确认清理后都会获得积分奖励。
- **兑换奖励：** 累积的积分可以兑换各种奖励，促进用户持续参与保持环境清洁的活动。

### 📍 基于位置的垃圾报告
- **地理标记提交：** 每个垃圾报告都带有位置数据，便于当地政府或服务提供商快速响应。
- **实时地图：** 查看您所在区域的垃圾报告或跟踪清理进度。

### 🔒 安全身份验证
- **NextAuth 集成：** 提供安全无缝的用户身份验证，确保您的垃圾报告数据安全。
- **数据隐私：** 所有数据都被安全存储和加密，优先考虑用户隐私和环境影响追踪。

---

## 技术栈 🛠️

- **Next.js：** 用于快速的服务器端渲染和现代网页开发。
- **TypeScript：** 确保代码库的类型安全，减少错误，提高可维护性。
- **NextAuth：** 提供安全的身份验证，便于用户注册和登录功能。
- **Prisma：** 一个强大的类型安全 ORM，用于数据库管理和高效处理垃圾报告数据。
- **Tailwind CSS：** 用于构建时尚、响应式和现代的用户界面。
- **AI 集成：** AI Gemmni 模型处理图像以进行垃圾验证、分类和清理确认。
- **PostgreSQL：** 用于高效存储垃圾报告、清理数据和用户奖励积分。

---

## 🚀 快速开始

### 前提条件

确保您的机器上已安装以下软件：

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### 安装步骤

1. 克隆代码库：

   ```bash
   git clone
   cd
   ```

2. 安装依赖：

   ```bash
   npm install
   ```

3. 设置环境变量：
   在项目根目录下创建一个 `.env.local` 文件，内容如下：

   ```bash
   DATABASE_URL=你的数据库地址
   WEB3_AUTH_CLIENT_ID=你的Web3身份验证客户端ID
   GEMINI_API_KEY=你的Gemini API密钥
   GOOGLE_MAPS_API_KEY=你的谷歌地图API密钥
   ```

4. 运行开发服务器：

   ```bash
   npm run dev
   ```

   在浏览器中打开 [http://localhost:3000](http://localhost:3000) 来查看应用。

## 📱 联系我们

如果您有任何问题或疑问，请随时与我们联系！
