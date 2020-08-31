
const state = {
  dashboardJs: 'import Vue from \'vue\'\n' +
    'import VueCutter from \'vue-cutter\'\n' +
    '\n' +
    'Vue.use(VueCutter)',
  dashboardVue: '<template>\n' +
    '  <div>\n' +
    '    <vue-cutter\n' +
    '      :container-width="options.containerWidth"\n' +
    '      :container-height="options.containerHeigh"\n' +
    '      :image="options.image"\n' +
    '    ></vue-cutter>\n' +
    '  </div>\n' +
    '</template>\n' +
    '<script>\n' +
    '  export default {\n' +
    '    name: "App",\n' +
    '    data() {\n' +
    '      return{\n' +
    '        options: {\n' +
    '          containerWidth: 450,\n' +
    '          containerHeigh: 300,\n' +
    '          image: \'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4110377719,1460950412&fm=26&gp=0.jpg\'\n' +
    '        }\n' +
    '      }\n' +
    '    }\n' +
    '  }\n' +
    '</script>'
};

const mutations = {

};

const actions = {

};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
