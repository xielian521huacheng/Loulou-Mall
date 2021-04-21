module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'import',
      {
        libraryName:'vant',
        libraryDirrctory:'es',
        style:true,
      },
    ],
  ],
};
