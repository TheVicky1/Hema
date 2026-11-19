let _globalAdd = null;

export function setToastHandler(fn) {
  _globalAdd = fn;
}

export function addToast(options) {
  if (_globalAdd) {
    _globalAdd(options);
  }
}
