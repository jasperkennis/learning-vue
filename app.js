var el,
  growler,
  Vue;

// Get el by id. Do like this cause it will take less action from vue.
el = document.getElementById('growler');

growler = new Vue({
  el: el,
  data: {
    appName: 'Growler',
    query: ''
  }
});
