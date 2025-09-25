/**
 * ANSI escape codes for styling terminal output.
 * Includes foreground, background, 256-color and truecolor (RGB) support.
 */
const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        gray: "\x1b[90m",
        bright: {
            red: "\x1b[91m",
            green: "\x1b[92m",
            yellow: "\x1b[93m",
            blue: "\x1b[94m",
            magenta: "\x1b[95m",
            cyan: "\x1b[96m",
            white: "\x1b[97m",
        },
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        gray: "\x1b[100m",
        bright: {
            red: "\x1b[101m",
            green: "\x1b[102m",
            yellow: "\x1b[103m",
            blue: "\x1b[104m",
            magenta: "\x1b[105m",
            cyan: "\x1b[106m",
            white: "\x1b[107m",
        },
    },
    fg256: (n) => `\x1b[38;5;${n}m`,
    bg256: (n) => `\x1b[48;5;${n}m`,
    fgRGB: (r, g, b) => `\x1b[38;2;${r};${g};${b}m`,
    bgRGB: (r, g, b) => `\x1b[48;2;${r};${g};${b}m`,
};
export default colors;
export { colors, };
