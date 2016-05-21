"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var themeShape = _ref.themeShape;
    var _ref$useGridProps = _ref.useGridProps;
    var useGridProps = _ref$useGridProps === undefined ? true : _ref$useGridProps;
    var React = _ref.React;
    var PropTypes = React.PropTypes;


    var gridPropsShape = PropTypes.shape({ xs: PropTypes.number,
        sm: PropTypes.number,
        md: PropTypes.number,
        lg: PropTypes.number,
        xsOffset: PropTypes.number,
        smOffset: PropTypes.number,
        mdOffset: PropTypes.number,
        lgOffset: PropTypes.number
    });

    var paletteShape = PropTypes.shape({ scheme: PropTypes.string,
        base03: PropTypes.string,
        base02: PropTypes.string,
        base01: PropTypes.string,
        base00: PropTypes.string,
        base0: PropTypes.string,
        base1: PropTypes.string,
        base2: PropTypes.string,
        base3: PropTypes.string,
        yellow: PropTypes.string,
        orange: PropTypes.string,
        red: PropTypes.string,
        magenta: PropTypes.string,
        violet: PropTypes.string,
        blue: PropTypes.string,
        cyan: PropTypes.string,
        green: PropTypes.string
    });

    if (!themeShape) {
        var colorShape = PropTypes.shape({ primary: PropTypes.string.isRequired,
            secondary: PropTypes.string.isRequired,
            accent: PropTypes.string.isRequired
        });

        var brandShape = PropTypes.shape({ default: PropTypes.string.isRequired,
            primary: PropTypes.string.isRequired,
            info: PropTypes.string.isRequired,
            success: PropTypes.string.isRequired,
            warning: PropTypes.string.isRequired,
            danger: PropTypes.string.isRequired
        });

        var panelStyleShape = PropTypes.shape({ backgroundColor: PropTypes.string.isRequired,
            borderColor: PropTypes.string.isRequired,
            borderStyle: PropTypes.string.isRequired,
            borderWidth: PropTypes.number.isRequired,
            margin: PropTypes.number.isRequired,
            borderRadius: PropTypes.number.isRequired,
            fontFamily: PropTypes.string.isRequired,
            fontWeight: PropTypes.number.isRequired
        });

        var boldShape = PropTypes.shape({ fontWeight: PropTypes.number.isRequired });

        var inputShape = PropTypes.shape({ color: PropTypes.string.isRequired,
            backgroundColor: PropTypes.string.isRequired,
            borderColor: PropTypes.string.isRequired,
            borderWidth: PropTypes.number.isRequired,
            borderStyle: PropTypes.string.isRequired
        });

        var styleShape = PropTypes.shape({ app: PropTypes.object.isRequired,
            panel: panelStyleShape,
            bold: boldShape,
            input: inputShape
        });

        themeShape = PropTypes.shape({ palette: paletteShape,
            color: colorShape,
            brand: brandShape,
            style: styleShape
        });
    }
    return { theme: themeShape, gridProps: gridPropsShape };
};