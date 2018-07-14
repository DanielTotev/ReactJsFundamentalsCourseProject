const observer = {};

export default {
    add: (func, name) => observer[name] = func,
    exec: (name, props) => observer[name](props)
}