const getters = {
  device: state => state.app.device,
  lang: state => state.app.lang,
  dashboardJs: state => state.code.dashboardJs,
  dashboardVue:state => state.code.dashboardVue
};
export default getters
