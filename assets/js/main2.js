let Update = "Wed, Oct 27, 2021";

(function(window, document, undefined){

// code that should be taken care of right away

window.onload = init;

  function init(){
      console.log(document.getElementById("lastUpdate").innerHTML)
      document.getElementById("lastUpdate").innerHTML = "Last updated on " + Update
    // the code to be called when the dom has loaded
    // #document has its nodes
  }

})(window, document, undefined);