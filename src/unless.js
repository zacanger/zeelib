const unless = (cond, fn) => !cond ? fn() : null
export default unless
