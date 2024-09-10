function add(a: string, b: string): undefined | number
function add(a: string, b: number): undefined | number
function add(a: number, b: string): undefined | number
function add(a: number, b: string): undefined | number
function add(a: string | number, b: string | number) {
  if (typeof a !== typeof b) {
    return undefined
  }

  return parseInt(a.toString()) + parseInt(b.toString())
}