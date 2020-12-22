# Dropshare Landingpage (built with Tailwind CSS)

![Build](https://github.com/stefanzweifel/dropshare-tailwind-landingpage/workflows/Build/badge.svg)

Landingpage you can use with [Dropshare](https://getdropsha.re/). Built with [Tailwind CSS](https://tailwindcss.com/)

![Screenshot](https://raw.githubusercontent.com/stefanzweifel/dropshare-tailwind-landingpage/master/screenshot.jpg)

## Usage

1. Open Dropshare -> Settings -> Landingpage -> Edit Custom Design
2. Paste the content from [this file](https://raw.githubusercontent.com/stefanzweifel/dropshare-tailwind-landingpage/master/dist/index.html) into the Dropshare Settings Panel
3. Save Changes
4. Profit

## Build from Source

1. Install dependencies with `yarn install`
2. Change Styling in `src/main.css`
3. Run `npm run prod`
4. Manually delete `<script type="text/javascript" src="mix.js"></script>` from `dist/index.html` 🤷‍♂️

## Credits

* [Stefan Zweifel](https://github.com/stefanzweifel)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
