WhiskiInstalledModules = [
  {
    name: 'Whiski Core',
    author: 'David Burles',
    route: 'whiskiHome'
  }
];

Template.whiskiHome.helpers({
  modules: function() {
    return WhiskiInstalledModules;
  }
});