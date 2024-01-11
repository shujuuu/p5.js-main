我们的代码存在的位置

整个 p5.js 项目包含除了这个仓库之外的一些其他仓库：

- **[p5.js](https://github.com/processing/p5.js)**：这个仓库包含了 p5.js 库的源代码。[用户面向的 p5.js 参考手册](https://p5js.org/reference/)也是从这个源代码中生成的[JSDoc](https://jsdoc.app/)注释。它由[Qianqian Ye](https://github.com/qianqianye)和一群[管理者](https://github.com/processing/p5.js#stewards)维护。
- **[p5.js-website](https://github.com/processing/p5.js-website)**：这个仓库包含了[p5.js 网站](http://p5js.org)的大部分代码，不包括参考手册。它由[Qianqian Ye](https://github.com/qianqianye)、[Kenneth Lim](https://github.com/limzykenneth)和一群[管理者](https://github.com/processing/p5.js-website#stewards)维护。
- **[p5.js-sound](https://github.com/processing/p5.js-sound)**：这个仓库包含了 p5.sound.js 库，由[Jason Sigal](https://github.com/therewasaguy)维护。
- **[p5.js-web-editor](https://github.com/processing/p5.js-web-editor)**：这个仓库包含了[p5.js web 编辑器](https://editor.p5js.org)的源代码，由[Cassie Tarakajian](https://github.com/catarak)维护。
- 其他未在上述列表中列出的附加库通常有自己的仓库和维护者，并且不直接由 p5.js 项目维护。

## 仓库文件结构

这里有很多文件！这里有一个简要的概述。可能会有些混乱，但您不需要理解仓库中的每个文件就可以开始。我们建议从一个区域开始（例如，修复一些内联文档），然后逐步扩大到探索更多。Luisa Pereira的[Looking Inside p5.js](https://www.luisapereira.net/teaching/materials/processing-foundation)还提供了一个视频导览，介绍了p5.js工作流中使用的工具和文件。

- 📁`contributor_docs/` 包含解释贡献者实践和原则的文件
- 📁`docs/` 实际上并不包含文档！相反，它包含用于*生成* [在线参考手册](https://p5js.org/reference/) 的代码。
- 📁`lib/` 包含一个空的示例和 p5.sound 附加库，该库定期通过从[p5.js-sound 仓库](https://github.com/processing/p5.js-sound)拉取请求进行更新。这也是编译为

单个文件的 p5.js 库在使用 [Grunt](https://gruntjs.com/) 进行编译后放置的位置。在您提交拉取请求时，它不需要被检入 GitHub 仓库。
- 📁`src/` 包含库的所有源代码，按主题组织成单独的模块。如果您正在更改 p5.js，则会在这里工作。大多数文件夹内都有自己的 readme.md 文件，以帮助您找到所需的内容。
- 📁`tasks/` 包含执行与构建、部署和发布 p5.js 的新版本相关的自动化任务的脚本。
- 📁`tests/` 包含单元测试，确保在进行更改时库继续正确运行。
- 📁`utils/` 可能包含对仓库有用的其他文件，但通常您可以忽略此目录。

## 其他信息
- 📁[`contributor_docs/`](https://github.com/processing/p5.js/tree/main/contributor_docs) 文件夹中还有其他文件，您可以进行探索。它们与贡献到该项目的特定领域有关，无论是技术还是非技术性质。
- [Looking Inside p5.js](https://www.luisapereira.net/teaching/materials/processing-foundation) 是一个介绍 p5.js 开发工作流中使用的工具和文件的视频导览。
- [The Coding Train](https://youtu.be/Rr3vLyP1Ods) 的[这个视频](https://youtu.be/Rr3vLyP1Ods)：train::rainbow: 提供了关于开始进行技术贡献到 p5.js 的概述。
- p5.js [Docker 镜像](https://github.com/toolness/p5.js-docker) 可以在 [Docker](https://www.docker.com/) 中挂载并用于开发 p5.js，而无需手动安装像 [Node](https://nodejs.org/) 这样的要求，也不会以任何方式影响主机操作系统，除了安装 Docker 之外。
- p5.js 库的构建过程会生成一个[JSON 数据文件](https://p5js.org/reference/data.json)，其中包含 p5.js 的公共 API，并可用于自动化工具，例如在编辑器中自动完成 p5.js 方法。该文件托管在 p5.js 网站上，但它不作为仓库的一部分包含在内。
