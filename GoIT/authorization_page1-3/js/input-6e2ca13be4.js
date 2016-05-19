"use strict";function focus(e){if(e){var t=new DomEl(e.target),r=t.nextEl();r.addClass("active")}}function blur(e){var t=new DomEl(e.target);checkInput(t);var r=t.nextEl();""==t.val()&&r.removeClass("active")}function checkInput(e){e.parent().hasClass("notNull")&&checkNotNull(e),"email"==e.attr("name")&&checkEmail(e),"tel"==e.attr("name")&&checkTel(e),"index"==e.attr("name")&&checkIndex(e)}function checkNotNull(e){if(""==e.val().trim()){var t=e.nextEl();t.attr("data-placeholder-notNull",t.text()),t.text(textErrorNotNull),e.addClass("error")}else{var t=e.nextEl();t.text(t.attr("data-placeholder-notNull")),e.removeClass("error")}}function checkEmail(e){if(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(e.val())){var t=e.nextEl();t.text("E-mail"),e.removeClass("error")}else{var t=e.nextEl();t.text(textErrorEmail),e.addClass("error")}}function checkTel(e){if(/^\+38[0-9]{10}$/.test(e.val())||/^[0-9]{10}$/.test(e.val())){var t=e.nextEl();t.text("Телефон"),e.removeClass("error")}else{var t=e.nextEl();t.text(textErrorNumber),e.addClass("error")}}function checkIndex(e){if(/^\d{5}$/.test(e.val())){var t=e.nextEl();t.text(inputPlaceholder_index),e.removeClass("error")}else{var t=e.nextEl();t.text(textErrorIndex),e.addClass("error")}}new DomEl(".input input").on("focus",focus).on("blur",blur);