import Vue from 'vue'
import Modal from './modal.vue'

const ModalBox = Vue.extend(Modal);

Modal.install = (content, title, options) => {
  if (typeof title === 'object') {
    options = title;
    title = '';
  } else if (title === undefined) {
    title = '';
  }

  options = Object.assign({
    title: title,
    content: content,
  }, options);

  let instance = new ModalBox({
    data: options
  }).$mount();

  document.body.appendChild(instance.$el);

  return instance.Modal();
};

export default Modal