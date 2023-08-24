let Update = "Wed, Aug 23, 2023";

(function(window, document, undefined){

// code that should be taken care of right away

window.onload = init;

  function init(){
      console.log(Update)
      document.getElementById("lastUpdate").innerHTML = "Last updated on " + Update
    // the code to be called when the dom has loaded
    // #document has its nodes
  }

})(window, document, undefined);