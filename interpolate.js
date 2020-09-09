// Named colors
const colorNames = {
  transparent: "00000000",
  aliceblue: "f0f8ffff",
  antiquewhite: "faebd7ff",
  aqua: "00ffffff",
  aquamarine: "7fffd4ff",
  azure: "f0ffffff",
  beige: "f5f5dcff",
  bisque: "ffe4c4ff",
  black: "000000ff",
  blanchedalmond: "ffebcdff",
  blue: "0000ffff",
  blueviolet: "8a2be2ff",
  brown: "a52a2aff",
  burlywood: "deb887ff",
  burntsienna: "ea7e5dff",
  cadetblue: "5f9ea0ff",
  chartreuse: "7fff00ff",
  chocolate: "d2691eff",
  coral: "ff7f50ff",
  cornflowerblue: "6495edff",
  cornsilk: "fff8dcff",
  crimson: "dc143cff",
  cyan: "00ffffff",
  darkblue: "00008bff",
  darkcyan: "008b8bff",
  darkgoldenrod: "b8860bff",
  darkgray: "a9a9a9ff",
  darkgreen: "006400ff",
  darkgrey: "a9a9a9ff",
  darkkhaki: "bdb76bff",
  darkmagenta: "8b008bff",
  darkolivegreen: "556b2fff",
  darkorange: "ff8c00ff",
  darkorchid: "9932ccff",
  darkred: "8b0000ff",
  darksalmon: "e9967aff",
  darkseagreen: "8fbc8fff",
  darkslateblue: "483d8bff",
  darkslategray: "2f4f4fff",
  darkslategrey: "2f4f4fff",
  darkturquoise: "00ced1ff",
  darkviolet: "9400d3ff",
  deeppink: "ff1493ff",
  deepskyblue: "00bfffff",
  dimgray: "696969ff",
  dimgrey: "696969ff",
  dodgerblue: "1e90ffff",
  firebrick: "b22222ff",
  floralwhite: "fffaf0ff",
  forestgreen: "228b22ff",
  fuchsia: "ff00ffff",
  gainsboro: "dcdcdcff",
  ghostwhite: "f8f8ffff",
  gold: "ffd700ff",
  goldenrod: "daa520ff",
  gray: "808080ff",
  green: "008000ff",
  greenyellow: "adff2fff",
  grey: "808080ff",
  honeydew: "f0fff0ff",
  hotpink: "ff69b4ff",
  indianred: "cd5c5cff",
  indigo: "4b0082ff",
  ivory: "fffff0ff",
  khaki: "f0e68cff",
  lavender: "e6e6faff",
  lavenderblush: "fff0f5ff",
  lawngreen: "7cfc00ff",
  lemonchiffon: "fffacdff",
  lightblue: "add8e6ff",
  lightcoral: "f08080ff",
  lightcyan: "e0ffffff",
  lightgoldenrodyellow: "fafad2ff",
  lightgray: "d3d3d3ff",
  lightgreen: "90ee90ff",
  lightgrey: "d3d3d3ff",
  lightpink: "ffb6c1ff",
  lightsalmon: "ffa07aff",
  lightseagreen: "20b2aaff",
  lightskyblue: "87cefaff",
  lightslategray: "778899ff",
  lightslategrey: "778899ff",
  lightsteelblue: "b0c4deff",
  lightyellow: "ffffe0ff",
  lime: "00ff00ff",
  limegreen: "32cd32ff",
  linen: "faf0e6ff",
  magenta: "ff00ffff",
  maroon: "800000ff",
  mediumaquamarine: "66cdaaff",
  mediumblue: "0000cdff",
  mediumorchid: "ba55d3ff",
  mediumpurple: "9370dbff",
  mediumseagreen: "3cb371ff",
  mediumslateblue: "7b68eeff",
  mediumspringgreen: "00fa9aff",
  mediumturquoise: "48d1ccff",
  mediumvioletred: "c71585ff",
  midnightblue: "191970ff",
  mintcream: "f5fffaff",
  mistyrose: "ffe4e1ff",
  moccasin: "ffe4b5ff",
  navajowhite: "ffdeadff",
  navy: "000080ff",
  oldlace: "fdf5e6ff",
  olive: "808000ff",
  olivedrab: "6b8e23ff",
  orange: "ffa500ff",
  orangered: "ff4500ff",
  orchid: "da70d6ff",
  palegoldenrod: "eee8aaff",
  palegreen: "98fb98ff",
  paleturquoise: "afeeeeff",
  palevioletred: "db7093ff",
  papayawhip: "ffefd5ff",
  peachpuff: "ffdab9ff",
  peru: "cd853fff",
  pink: "ffc0cbff",
  plum: "dda0ddff",
  powderblue: "b0e0e6ff",
  purple: "800080ff",
  rebeccapurple: "663399ff",
  red: "ff0000ff",
  rosybrown: "bc8f8fff",
  royalblue: "4169e1ff",
  saddlebrown: "8b4513ff",
  salmon: "fa8072ff",
  sandybrown: "f4a460ff",
  seagreen: "2e8b57ff",
  seashell: "fff5eeff",
  sienna: "a0522dff",
  silver: "c0c0c0ff",
  skyblue: "87ceebff",
  slateblue: "6a5acdff",
  slategray: "708090ff",
  slategrey: "708090ff",
  snow: "fffafaff",
  springgreen: "00ff7fff",
  steelblue: "4682b4ff",
  tan: "d2b48cff",
  teal: "008080ff",
  thistle: "d8bfd8ff",
  tomato: "ff6347ff",
  turquoise: "40e0d0ff",
  violet: "ee82eeff",
  wheat: "f5deb3ff",
  white: "ffffffff",
  whitesmoke: "f5f5f5ff",
  yellow: "ffff00ff",
  yellowgreen: "9acd32ff",
};

function conv3to6(hex) {
  const regex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  return hex.replace(regex, function (_, r, g, b) {
    return "#" + r + r + g + g + b + b;
  });
}

function conv6to8(hex) {
  if (hex.length === 7) {
    return hex + "FF";
  }

  return hex;
}

function hexToRgba(hex) {
  const hex6 = conv3to6(hex);
  const hex8 = conv6to8(hex6);
  const hexRgba = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    hex8
  );

  return {
    r: parseInt(hexRgba[1], 16),
    g: parseInt(hexRgba[2], 16),
    b: parseInt(hexRgba[3], 16),
    a: parseInt(hexRgba[4], 16) / 255,
  };
}

function rgbaToHex(rgba) {
  const { r, g, b, a } = rgba;

  const hexR = (r | (1 << 8)).toString(16).slice(1);
  const hexG = (g | (1 << 8)).toString(16).slice(1);
  const hexB = (b | (1 << 8)).toString(16).slice(1);
  const hexA = ((a * 255) | (1 << 8)).toString(16).slice(1);

  return "#" + hexR + hexG + hexB + hexA;
}

function processColor(color) {
  if (typeof color === "number") {
    const alpha = ((color >> 24) & 255) / 255;
    const red = (color >> 16) & 255;
    const green = (color >> 8) & 255;
    const blue = color & 255;

    return { r: red, g: green, b: blue, a: alpha };
  } else {
    // If string then check whether it has # in 0 index
    if (color[0] === "#") {
      return hexToRgba(color);
    } else {
      // It is string color
      const hexColorName = colorNames[color];
      if (hexColorName) {
        return hexToRgba(hexColorName);
      } else {
        console.error(new Error("String cannot be parsed!"));
        return null;
      }
    }
  }
}

const mix = (perc, val1, val2) => {
  return val1 * (1 - perc) + val2 * perc;
};

const _internalInterpolate = (val, arr, extrapolateLeft, extrapolateRight) => {
  const [inputMin, inputMax, outputMin, outputMax] = arr;
  let result = val;

  // EXTRAPOLATE
  if (result < inputMin) {
    if (extrapolateLeft === "identity") {
      return result;
    } else if (extrapolateLeft === "clamp") {
      result = inputMin;
    } else if (extrapolateLeft === "extend") {
      // noop
    }
  }

  if (result > inputMax) {
    if (extrapolateRight === "identity") {
      return result;
    } else if (extrapolateRight === "clamp") {
      result = inputMax;
    } else if (extrapolateRight === "extend") {
      // noop
    }
  }

  if (outputMin === outputMax) {
    return outputMin;
  }

  if (inputMin === inputMax) {
    if (val <= inputMin) {
      return outputMin;
    }
    return outputMax;
  }

  // Input Range
  if (inputMin === -Infinity) {
    result = -result;
  } else if (inputMax === Infinity) {
    result = result - inputMin;
  } else {
    result = (result - inputMin) / (inputMax - inputMin);
  }

  // Output Range
  if (outputMin === -Infinity) {
    result = -result;
  } else if (outputMax === Infinity) {
    result = result + outputMin;
  } else {
    result = result * (outputMax - outputMin) + outputMin;
  }

  return result;
};

const _getNarrowedInputArray = function (x, input, output) {
  const length = input.length;
  let narrowedInput = [];

  // Boundaries
  if (x < input[0]) {
    narrowedInput = [input[0], input[1], output[0], output[1]];
  } else if (x > input[length - 1]) {
    narrowedInput = [
      input[length - 2],
      input[length - 1],
      output[length - 2],
      output[length - 1],
    ];
  }

  // Narrow the input and output ranges
  for (let i = 1; i < length; ++i) {
    if (x <= input[i]) {
      narrowedInput = [input[i - 1], input[i], output[i - 1], output[i]];
      break;
    }
  }

  return narrowedInput;
};
const interpolate = (value, inputRange, outputRange, extrapolateConfig) => {
  const extrapolate = extrapolateConfig?.extrapolate;
  const extrapolateLeft = extrapolateConfig?.extrapolateLeft;
  const extrapolateRight = extrapolateConfig?.extrapolateRight;

  const narrowedInput = _getNarrowedInputArray(value, inputRange, outputRange);

  let _extrapolateLeft = "extend";
  if (extrapolateLeft !== undefined) {
    _extrapolateLeft = extrapolateLeft;
  } else if (extrapolate !== undefined) {
    _extrapolateLeft = extrapolate;
  }

  let _extrapolateRight = "extend";
  if (extrapolateRight !== undefined) {
    _extrapolateRight = extrapolateRight;
  } else if (extrapolate !== undefined) {
    _extrapolateRight = extrapolate;
  }

  if (outputRange.length) {
    if (typeof outputRange[0] === "number") {
      return _internalInterpolate(
        value,
        narrowedInput,
        _extrapolateLeft,
        _extrapolateRight
      );
    } else if (Array.isArray(outputRange)) {
      const [inputMin, inputMax, outputMin, outputMax] = narrowedInput;

      if (outputMin.length === outputMax.length) {
        console.log("OKKAY");
      } else {
        throw new Error("Array length doesn't match");
      }

      return 0;
    } else {
      // If outputRange is in string then is must be color otherwise.
      const [inputMin, inputMax, outputMin, outputMax] = narrowedInput;

      const outputMinProcessed = processColor(outputMin);
      const outputMaxProcessed = processColor(outputMax);

      const red = _internalInterpolate(
        value,
        [inputMin, inputMax, outputMinProcessed.r, outputMaxProcessed.r],
        "clamp",
        "clamp"
      );

      const green = _internalInterpolate(
        value,
        [inputMin, inputMax, outputMinProcessed.g, outputMaxProcessed.g],
        "clamp",
        "clamp"
      );

      const blue = _internalInterpolate(
        value,
        [inputMin, inputMax, outputMinProcessed.b, outputMaxProcessed.b],
        "clamp",
        "clamp"
      );

      const alpha = _internalInterpolate(
        value,
        [inputMin, inputMax, outputMinProcessed.a, outputMaxProcessed.a],
        "clamp",
        "clamp"
      );

      return rgbaToHex({ r: red, g: green, b: blue, a: alpha });
    }
  } else {
    console.error(new Error("Output Range Cannot be Empty"));
  }
};
