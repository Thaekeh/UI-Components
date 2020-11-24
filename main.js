var borderSizeSlider = document.getElementById("borderSizeSlider")
var borderRadiusSlider = document.getElementById("borderRadiusSlider")
var paddingSlider = document.getElementById("paddingSlider")
var fontsizeSlider = document.getElementById("fontsizeSlider")
var fontWeightSlider = document.getElementById("fontWeightSlider")

var background = document.getElementById("background")

var contentField = document.getElementById("contentField")
var backgroundColorPicker = document.getElementById("backgroundColorPicker")
var borderColorPicker = document.getElementById("borderColorPicker")
var hoverColorPicker = document.getElementById("hoverColorPicker")
var hoverTextColorPicker = document.getElementById("hoverTextColorPicker")
var hoverBorderColorPicker = document.getElementById("hoverBorderColorPicker")
var textColorPicker = document.getElementById("textColorPicker")
var divBackgroundColorPicker = document.getElementById("divBackgroundColorPicker")
var cursorSelecter = document.getElementById("cursorSelecter")
var UISelecter = document.getElementById("UISelecter")
var cssButton = document.getElementById("cssButton")

var borderSizeVar = document.getElementById("borderSizeValue")
var borderRadiusVar = document.getElementById("borderRadiusValue")
var paddingVar = document.getElementById("paddingValue")
var fontsizeVar = document.getElementById("fontsizeValue")
var fontWeightVar = document.getElementById("fontWeightValue")
var buttonForm = document.getElementById("buttonForm")
var sliderForm = document.getElementById("sliderForm")

var button = document.getElementById("button")
var copy = document.getElementById("copy")
var sandbox = $('#sandbox');
var html = document.getElementById("html")
var body = document.getElementById("body")


// Accordion variable
var acc = document.getElementsByClassName("accordion");
var i;


borderSizeVar.innerHTML = borderSizeSlider.value
paddingVar.innerHTML = paddingSlider.value
borderRadiusVar.innerHTML = `${borderRadiusSlider.value}px`
fontsizeVar.innerHTML = fontsizeSlider.value
fontWeightVar.innerHTML = fontWeightSlider.value
button.style.padding = `${paddingSlider.value}px`
button.style.color = textColorPicker.value
button.style.cursor = cursorSelecter.value
button.style.borderRadius = `${borderRadiusSlider.value}px`
button.style.borderColor = borderColorPicker.value
button.style.fontWeight = `${fontWeightSlider.value}px`


    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                setTimeout(function() {
                    body.style.maxHeight = "255px"
                    html.style.maxHeight = "255px"
                }, 100)
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                        setTimeout(function() {
                            body.style.maxHeight = "600px"
                            html.style.maxHeight = "600px"
                        }, 100)
            }
        });
  }

// UI Component selector
UISelecter.oninput = function() {
    if (this.value == 'button') {
        buttonForm.style.display = "block"
        sliderForm.style.display = "none"
    } else if (this.value == 'slider') {
        buttonForm.style.display = "none"
        sliderForm.style.display = "block"
    }
}

if (document.addEventListener) {
    document.addEventListener("click", handleClick, false);
}
else if (document.attachEvent) {
    document.attachEvent("onclick", handleClick);
}

function handleClick(event) {
    event = event || window.event;
    event.target = event.target || event.srcElement;

    var element = event.target;

    // Climb up the document tree from the target of the event
    while (element) {
        if (element.nodeName === "BUTTON" && /copyButton/.test(element.className)) {
            // The user clicked on a <button> or clicked on an element inside a <button>
            // with a class name called "foo"
            copyColor(element);
            break;
        } else if (element.nodeName === "BUTTON" && /pasteButton/.test(element.className)) {
            pasteColor(element);
        } else if (element.nodeName === "BUTTON" && /cssButton/.test(element.className)) {
            copyCSS()
        }

        element = element.parentNode;
    }
}

function copyColor(element) {
    var value = ''
    var sandbox = $('sandbox').html('')
    switch(element.id) {
        case 'backgroundColorCopyButton':
            value = backgroundColorPicker.value;
            break;
        case 'borderColorCopyButton':
            value = borderColorPicker.value;
            break;
        case 'textColorCopyButton':
            value = textColorPicker.value;
            break;
        case 'hoverColorCopyButton':
            value = hoverColorPicker.value;
            break;
        case 'hoverTextColorCopyButton':
            value = hoverTextColorPicker.value;
            break;
        case 'hoverBorderColorCopyButton':
            value = hoverBorderColorPicker.value;
            break;
    }
    sandbox = $('#sandbox').html(value).select();
    document.execCommand('copy');
}

function pasteColor(element) {

    sandbox.html(value)
    sandbox.select();
    var value = $('#sandbox').val()
    switch(element.id) {
        case 'backgroundColorPasteButton':
            backgroundColorPicker.value = value;
            button.style.backgroundColor = value;
            break;
        case 'borderColorPasteButton':
            borderColorPicker.value = value
            button.style.borderColor = value
            break;
        case 'textColorPasteButton':
            textColorPicker.value = value;
            button.style.color = value
            break;
        case 'hoverColorPasteButton':
            hoverColorPicker.value = value;
            break;
        case 'hoverTextColorPasteButton':
            hoverTextColorPicker.value = value;
            break;
        case 'hoverBorderColorPasteButton':
            hoverBorderColorPicker.value = value;
            break;
    }
}

function copyCSS() {
    var css = `font-size: ${fontsizeSlider.value}px; font-weight: ${fontWeightSlider.value}; padding: ${paddingSlider.value}px; border-width: ${borderSizeSlider.value}px; background-color: ${backgroundColorPicker.value}; border-color: ${backgroundColorPicker.defaultValue}; border-radius: ${borderRadiusSlider.value}px;`
    var sandbox = $('#sandbox').html(css).select();
    document.execCommand('copy');
    alert(css)
}

button.onmouseenter = function() {
    button.style.backgroundColor = hoverColorPicker.value
    button.style.color = hoverTextColorPicker.value
    button.style.borderColor = hoverBorderColorPicker.value
    
}

button.onmouseleave = function() {
    button.style.backgroundColor = backgroundColorPicker.value
    button.style.borderColor = borderColorPicker.value
    button.style.color = textColorPicker.value
}

// Padding
paddingSlider.oninput = function() {
    paddingVar.innerHTML = this.value
    button.style.padding = `${this.value}px`
}

// Font Size
fontsizeSlider.oninput = function() {
    fontsizeVar.innerHTML = this.value
    button.style.fontSize = `${this.value}px`
}

// Font Weight
fontWeightSlider.oninput = function() {
    fontWeightVar.innerHTML = this.value
    button.style.fontWeight = this.value
}

// Border size
borderSizeSlider.oninput = function() {
    borderSizeVar.innerHTML = this.value
    button.style.borderWidth = `${this.value}px`
}

// Border radius
borderRadiusSlider.oninput = function() {
    borderRadiusVar.innerHTML = this.value
    button.style.borderRadius = `${this.value}px`
}

// Button content
contentField.oninput = function() {
    button.innerHTML = this.value
}

// Background color
backgroundColorPicker.oninput = function() {
    button.style.backgroundColor = this.value
}

// Border color
borderColorPicker.oninput = function() {
    button.style.borderColor = this.value
}

// Div background color
divBackgroundColorPicker.oninput = function() {
    background.style.backgroundColor = this.value
}

// Text color
textColorPicker.oninput = function() {
    button.style.color = this.value
}

// Cursor
cursorSelecter.oninput = function() {
    button.style.cursor = this.value
}