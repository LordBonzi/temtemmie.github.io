function greetMe(name) {
  var today = new Date().toDateString();
  console.log("Hello " + name + ", today is " + today);
  &lt;script>
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      alert("file api supported");
    } else {
      alert(‘not fully supported for this browser , please update the browser’);
    }
  &lt;/script>
}

greetMe("user");
