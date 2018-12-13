const DI18n = require('di18n-translate');

const locales = new DI18n({
  locale: 'zh', // 语言环境
  isReplace: false, // 是否开启运行时功能(适用于没有使用任何构建工具开发流程)
  messages: { // 语言映射表
    en: {
      Fire: 'Fire',
      CloseControls: 'CloseControl',
      OpenControls: 'OPenControl'
    },
    zh: {
      Fire: '触发',
      CloseControls: '关闭面板',
      OpenControls: '开启面板'
    }
  }
});

export default locales;
