module.exports = function (api) {
    api.cache(true);
  
    const presets = [];
    const plugins = [{"^.+\\.[t|j]sx?$": "babel-jest"},];
  
    return {
        presets,
        plugins
    };
}