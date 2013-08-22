;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
var newPersonal = require('./newPersona')

var input = document.getElementById('input')
var enter = document.getElementById('enter')
var story = document.getElementById('story')


// write module, tbd exported elsewhere

var lines = []
var characters = {}

enter.addEventListener('click', function(evt){
  lines.push(input.value);
  var child = html('p', {id: new Date().getTime()}, input.value) 
  input.value = '';
  story.appendChild(child)
})

},{"./newPersona":2}],2:[function(require,module,exports){
var charName = document.getElementById('charName');
var charAlias = document.getElementById('charAlias')
var charBio = document.getElementById('charBio');
var charPicker = document.getElementById('charPicker')
var picList = document.getElementById('avatars')
var charSave = document.getElementById('charSave')

var picFiles = []

charSave.addEventListener('click', function(e){
    var name = charName.value
    var alias = charAlias.value.length ? charAlias.value : charName.value
    var bio = charBio.value
    var avatars = picFiles;
    console.log(name, alias, bio, avatars)
})

charPicker.addEventListener('change', function(event){
    console.log(event)
    var files = event.target.files
    for(var i = 0; i < files.length; i++){
	var reader = new FileReader()
	picFiles.push(files[i])
	reader.onload = function(file){
	    var img = document.createElement('img')
	    img.src = file.target.result
	    picList.appendChild(img)    
	}
	reader.readAsDataURL(files[i])
    }
}, true)

module.exports = function(){}

},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS91c2VyL2RldmVsb3BtZW50L2Jhcm4vc3RvcnliYXJkL2luZGV4LmpzIiwiL2hvbWUvdXNlci9kZXZlbG9wbWVudC9iYXJuL3N0b3J5YmFyZC9uZXdQZXJzb25hLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbmV3UGVyc29uYWwgPSByZXF1aXJlKCcuL25ld1BlcnNvbmEnKVxuXG52YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKVxudmFyIGVudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudGVyJylcbnZhciBzdG9yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9yeScpXG5cblxuLy8gd3JpdGUgbW9kdWxlLCB0YmQgZXhwb3J0ZWQgZWxzZXdoZXJlXG5cbnZhciBsaW5lcyA9IFtdXG52YXIgY2hhcmFjdGVycyA9IHt9XG5cbmVudGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KXtcbiAgbGluZXMucHVzaChpbnB1dC52YWx1ZSk7XG4gIHZhciBjaGlsZCA9IGh0bWwoJ3AnLCB7aWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpfSwgaW5wdXQudmFsdWUpIFxuICBpbnB1dC52YWx1ZSA9ICcnO1xuICBzdG9yeS5hcHBlbmRDaGlsZChjaGlsZClcbn0pXG4iLCJ2YXIgY2hhck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhck5hbWUnKTtcbnZhciBjaGFyQWxpYXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhckFsaWFzJylcbnZhciBjaGFyQmlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJCaW8nKTtcbnZhciBjaGFyUGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJQaWNrZXInKVxudmFyIHBpY0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZhdGFycycpXG52YXIgY2hhclNhdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhclNhdmUnKVxuXG52YXIgcGljRmlsZXMgPSBbXVxuXG5jaGFyU2F2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIHZhciBuYW1lID0gY2hhck5hbWUudmFsdWVcbiAgICB2YXIgYWxpYXMgPSBjaGFyQWxpYXMudmFsdWUubGVuZ3RoID8gY2hhckFsaWFzLnZhbHVlIDogY2hhck5hbWUudmFsdWVcbiAgICB2YXIgYmlvID0gY2hhckJpby52YWx1ZVxuICAgIHZhciBhdmF0YXJzID0gcGljRmlsZXM7XG4gICAgY29uc29sZS5sb2cobmFtZSwgYWxpYXMsIGJpbywgYXZhdGFycylcbn0pXG5cbmNoYXJQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgIHZhciBmaWxlcyA9IGV2ZW50LnRhcmdldC5maWxlc1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKyl7XG5cdHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG5cdHBpY0ZpbGVzLnB1c2goZmlsZXNbaV0pXG5cdHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihmaWxlKXtcblx0ICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuXHQgICAgaW1nLnNyYyA9IGZpbGUudGFyZ2V0LnJlc3VsdFxuXHQgICAgcGljTGlzdC5hcHBlbmRDaGlsZChpbWcpICAgIFxuXHR9XG5cdHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVzW2ldKVxuICAgIH1cbn0sIHRydWUpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXt9XG4iXX0=
;