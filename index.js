function downloadTextFile(text, name) {
  const a = document.createElement('a');
  const type = name.split(".").pop();
  a.href = URL.createObjectURL( new Blob([text], { type:`text/${type === "txt" ? "plain" : type}` }) );
  a.download = name;
  a.click();
}

function init_vue() {
  new Vue({
    el: "#app",
    data: {
      entries: [
        { entry: "entry", keys: 'keys' }
      ]
    },
    methods: {
      get_json: function(){
        downloadTextFile(JSON.stringify(this.entries,undefined,2), 'worldinfo.json');
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  init_vue();
}, false);